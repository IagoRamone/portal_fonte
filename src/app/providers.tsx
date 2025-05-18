import { HeroUIProvider } from '@heroui/system'
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes'
import React from 'react'
type DefaultTemplateProps = {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export default function Providers({
  children,
  themeProps,
}: DefaultTemplateProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider forcedTheme="light" {...themeProps}>
        <>{children}</>
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
