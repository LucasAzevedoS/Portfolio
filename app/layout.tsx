import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Azevedo - Full Stack Developer",
  description:
    "Portfólio pessoal de Lucas Azevedo, desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="auto">
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
