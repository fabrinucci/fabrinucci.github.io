import i18next from 'i18next'
import globaEn from '../translations/en/global.json'
import globalEs from '../translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.localStorage.getItem('language') || 'en',
  resources: {
    en: {
      global: globaEn
    },
    es: {
      global: globalEs
    }
  }
})

export default i18next
