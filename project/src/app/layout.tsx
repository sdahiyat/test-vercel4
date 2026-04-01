import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PhotoBuddy - AI-Powered Photo Sharing',
  description: 'Share your photos and let AI help you create amazing content. Get feedback, editing suggestions, and auto-tags for your photography.',
  keywords: 'photography, AI, photo sharing, editing, social media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
