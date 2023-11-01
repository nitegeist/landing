import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Haus - Reality in the making.',
  description: 'Haus is a cross-chain livestreaming platform for artists to showcase their creative process - and participants to tip for it in real-time, during its creation.',
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
