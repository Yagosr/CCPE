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
       <body className="bg-blue-100 text-primary-50">{children}</body> 
       <link rel="shortcut icon" href="./img/LogoCcpeBranco.jpeg" type="image/x-icon" />
    </html>
  )
}