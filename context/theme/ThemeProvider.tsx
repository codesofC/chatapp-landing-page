'use client'

import { useState } from "react"
import { ThemeProvider } from "next-themes"


const ProviderTheme = ({children}:{children: React.ReactNode}) => {

    const [theme, setTheme] = useState<"light" | "dark">("light")

  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
        {children}
    </ThemeProvider>
  )
}

export default ProviderTheme