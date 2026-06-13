import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Organizer — Auto-organize Slack threads by priority',
  description: 'Automatically categorizes and prioritizes Slack threads using AI, creating custom views and notifications for important conversations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ecfe1340-a09e-4a33-8fab-c2be0bb81f4b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
