import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spacez - Coupons',
  description: 'Save money with exclusive coupons and deals',
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
