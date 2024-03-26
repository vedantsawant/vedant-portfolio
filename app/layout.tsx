import type { Metadata } from 'next'
import { Inter, Syne, Public_Sans, Archivo, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

const publicsans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-publicsans',
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const dmsans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans',
})

export const metadata: Metadata = {
  title: 'Vedant Sawant',
  description: 'Portfolio website for Vedant Sawant',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${publicsans.variable} ${dmsans.variable} ${archivo.variable}`}>
      <body className={publicsans.className}>{children}</body>
    </html>
  )
}
