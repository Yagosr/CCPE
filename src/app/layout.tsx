import './globals.css'
import type { Metadata } from 'next'
import { Source_Code_Pro} from 'next/font/google'
 
const cabin = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
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
       <body className={cabin.className} style={{backgroundColor:"#666", color:'white'}} >{children}</body> 
       <link rel="shortcut icon" href="./img/LogoCcpeBranco.png" type="image/x-icon" />
       
    </html> 
  )
}
