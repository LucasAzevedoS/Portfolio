"use client "

import { MantineProvider } from "@mantine/core"
import Portfolio from "@/components/portfolio"
import "@mantine/core/styles.css"

export default function Home() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <Portfolio />
    </MantineProvider>
  )
}
