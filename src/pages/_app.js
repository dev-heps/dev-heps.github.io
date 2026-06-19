import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${ibmPlexMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
