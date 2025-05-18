import '@/styles/globals.css'
import Providers from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
