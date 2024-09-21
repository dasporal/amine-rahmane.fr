import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark'>(
    'theme-light'
  )

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove'](
      'dark'
    )
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prevTheme) =>
      prevTheme === 'dark' ? 'theme-light' : 'dark'
    )
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
