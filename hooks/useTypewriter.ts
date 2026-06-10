'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterOptions {
  words: string[]
  loop?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

interface TypewriterResult {
  text: string
  isTyping: boolean
  currentWordIndex: number
}

export function useTypewriter({
  words,
  loop = true,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterOptions): TypewriterResult {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentWord = words[wordIndex] ?? ''

    if (phase === 'typing') {
      if (charIndex < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, typingSpeed)
      } else {
        setIsTyping(false)
        setPhase('pausing')
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => {
        setPhase('deleting')
        setIsTyping(true)
      }, pauseDuration)
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(currentWord.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, deletingSpeed)
      } else {
        const nextIndex = (wordIndex + 1) % words.length
        if (nextIndex === 0 && !loop) return
        setWordIndex(nextIndex)
        setPhase('typing')
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [phase, charIndex, wordIndex, words, loop, typingSpeed, deletingSpeed, pauseDuration])

  return { text, isTyping, currentWordIndex: wordIndex }
}
