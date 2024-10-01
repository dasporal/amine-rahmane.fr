import * as React from 'react'

import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const [language, setLanguage] = React.useState<'fr' | 'en'>('fr')

  React.useEffect(() => {
    const isEnglish = true
    setLanguage(isEnglish ? 'en' : 'fr')
  }, [])

  const toggleTheme = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'))
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {language === 'en' ? 'FR' : 'EN'}
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
