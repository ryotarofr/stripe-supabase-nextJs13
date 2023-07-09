import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getContentsByUserId from '@/actions/getContentsByUserId'
import Player from '@/components/Player'


const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone is change for me',
  description: 'Welcome to Learn',
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userContents = await getContentsByUserId()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar contents={userContents}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
