import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import ThemeProviders from './ThemeProviders'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="bg-gray-100 transition-all duration-500 dark:bg-zinc-900">
        <ThemeProviders>
          <Header></Header>
          <div className="mx-auto max-w-6xl">{children}</div>
        </ThemeProviders>
      </body>
    </html>
  )
}
