import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData } from '@/types'

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= MAX_REQUESTS) return true
  entry.count++
  return false
}

function validate(body: unknown): body is ContactFormData {
  if (!body || typeof body !== 'object') return false
  const { name, email, message } = body as Record<string, unknown>
  if (typeof name !== 'string' || name.trim().length < 2) return false
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false
  if (typeof message !== 'string' || message.trim().length < 10) return false
  return true
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment.' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!validate(body)) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check all fields.' },
        { status: 400 }
      )
    }

    const { name, email, message } = body
    const toEmail = process.env.CONTACT_EMAIL ?? 'akshratiwari425@gmail.com'
    const apiKey  = process.env.RESEND_API_KEY

    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [toEmail],
          reply_to: email,
          subject: `New message from ${name} — Portfolio`,
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0b;color:#fff;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
              <h2 style="margin:0 0 20px;color:#a78bfa;font-size:18px">New Portfolio Message</h2>
              <p style="margin:0 0 6px;font-size:13px;color:rgba(255,255,255,0.5)">From: <strong style="color:#fff">${name}</strong></p>
              <p style="margin:0 0 20px;font-size:13px;color:rgba(255,255,255,0.5)">Reply-to: <a href="mailto:${email}" style="color:#a78bfa">${email}</a></p>
              <div style="padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.08)">
                <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.7;white-space:pre-wrap">${message}</p>
              </div>
            </div>
          `,
        }),
      })
      if (!res.ok) {
        console.error('Resend error:', await res.text())
      }
    } else {
      // Dev fallback
      console.log('[Contact Form]', { name, email, message })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please email me directly.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
