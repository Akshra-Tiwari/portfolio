import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akshra-tiwari.vercel.app'
  ),
  title: {
    default: 'Akshra Tiwari — Full Stack Developer',
    template: '%s | Akshra Tiwari',
  },
  description:
    'Full Stack Developer and CS undergrad at RGPV. I build MERN stack applications, Next.js platforms, and Python ML integrations. Currently seeking software development internships.',
  keywords: [
    'Akshra Tiwari', 'Full Stack Developer', 'React', 'Next.js',
    'Node.js', 'MERN Stack', 'Portfolio', 'RGPV', 'Bhopal',
    'Software Engineer Intern', 'Synq', 'FraudSense', 'CampusShare',
  ],
  authors: [{ name: 'Akshra Tiwari', url: 'https://github.com/Akshra-Tiwari' }],
  creator: 'Akshra Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akshra-tiwari.vercel.app',
    siteName: 'Akshra Tiwari — Portfolio',
    title: 'Akshra Tiwari — Full Stack Developer',
    description: 'Full Stack Developer and CS undergrad at RGPV. Building MERN stack apps, Next.js platforms, and ML integrations.',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Akshra Tiwari — Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshra Tiwari — Full Stack Developer',
    description: 'Full Stack Developer and CS undergrad at RGPV.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: '#0a0a0b',
          fontFamily: 'var(--font-dm-sans), system-ui, -apple-system, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  )
}
