import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desa Sangkima',
  description: 'Website desa sangkima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
