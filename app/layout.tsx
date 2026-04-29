import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AXION V3 PRO | Wireless Gaming Mouse',
  description: 'Mouse gamer sem fio ultraleve com conexão tri-mode, baixa latência e controle absoluto. Precisão sem fio para performance competitiva.',
  keywords: ['gaming mouse', 'mouse gamer', 'wireless mouse', 'AXION', 'V3 PRO', 'esports'],
}

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
