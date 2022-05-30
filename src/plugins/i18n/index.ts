import { createI18n } from 'vue-i18n'

import en from './translations/en'
import ru from './translations/ru'

const language: string = window.navigator.language.substr(0, 2).toLowerCase()

const i18n = createI18n({
    legacy: false,
    locale: language == 'en' || 'ru' ? language : 'en',
    messages: {
        en,
        ru
    } 
})

export default i18n

// import { useI18n } from 'vue-i18n'
// const { locale } = useI18n()
// console.log(locale.value);
// npm install --save vue-i18n@next
