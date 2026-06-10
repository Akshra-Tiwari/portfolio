import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    'Akshra Tiwari',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'MERN Stack',
    'Portfolio',
    'RGPV',
    'Bhopal',
    'Software Engineer Intern',
    'FraudSense',
    'SWAN Protocol',
  ],
  authors: [{ name: 'Akshra Tiwari', url: 'https://github.com/Akshra-Tiwari' }],
  creator: 'Akshra Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://akshra-tiwari.vercel.app',
    siteName: 'Akshra Tiwari — Portfolio',
    title: 'Akshra Tiwari — Full Stack Developer',
    description:
      'Full Stack Developer and CS undergrad at RGPV. Building MERN stack apps, Next.js platforms, and ML integrations.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Akshra Tiwari — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshra Tiwari — Full Stack Developer',
    description:
      'Full Stack Developer and CS undergrad at RGPV. Building MERN stack apps and ML integrations.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Syne — display headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* DM Sans — body text | DM Mono — code */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: '#0a0a0b',
          fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif',
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
