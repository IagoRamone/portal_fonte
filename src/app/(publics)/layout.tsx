import type { Metadata } from 'next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portal.unisuam.site'),

  title: 'Portal Jornalistico Unisuam',
  description: '',

  openGraph: {
    title: 'Portal Jornalistico Unisuam',
    type: 'website',
    url: 'https://portal.unisuam.site',
    description: '',
    images: '/fb.webp',
  },
  twitter: {
    title: 'Portal Jornalistico Unisuam',
    description: '',
    images: '/fb.webp',
    site: 'https://portal.unisuam.site',
  },

  keywords: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
