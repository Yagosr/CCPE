import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carta convite CCPE',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
       <body className="bg-white text-secondary-100">{children}</body> 
       <link rel="shortcut icon" href="./img/LogoCcpeBranco.jpeg" type="image/x-icon" />
    </html>
  )
}
