import '../globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar/sidebar'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard SKM',
  description: 'Dashboard for website profile sangkima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Sidebar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
