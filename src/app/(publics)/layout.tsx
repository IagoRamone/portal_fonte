import type { Metadata } from 'next'

import { Navbar } from '@/components/Navbar'
import { serviceNavbar } from '@/services/configDefault'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await serviceNavbar()
  return (
    <main>
      <Navbar data={data} />
      {children}
    </main>
  )
}
