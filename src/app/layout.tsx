import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Navigation } from './@components'
import ContentWrapper from './@components/ContentWrapper'
import { ViewportProvider } from './@context/Viewport'
import { PostProvider } from './@context/Post'

const fontFamily = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brancs Blog | Home',
  description: 'Blog by Brancs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>
        <ViewportProvider>
          <PostProvider>
            <ContentWrapper>
              <Navigation />
              {children}
            </ContentWrapper>
          </PostProvider>
        </ViewportProvider>
      </body>
    </html>
  )
}
