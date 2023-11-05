import { ui, defaultLang, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function getTranslations(lang: keyof typeof ui) {
  return ui[lang]
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
