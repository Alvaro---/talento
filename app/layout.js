import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Evento +Talento',
  description: 'Evento de formacion de lideres HR Bussines Parters',
  keywords: 'talento, eventos, formación, liderzgo',
  author: 'Talento',
  ogTitle: 'Talento',
  ogDescription: 'Evento de formacion de lideres HR Bussines Parters',
  ogImage: '/imagenes/logo.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
