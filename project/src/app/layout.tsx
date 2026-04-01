import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'PhotoBuddy - AI-Powered Photo Sharing',
  description: 'Share your photography and get AI-powered feedback, editing suggestions, and creative insights. Connect with photographers worldwide.',
  keywords: 'photography, photo sharing, AI editing, photo feedback, photographer community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
