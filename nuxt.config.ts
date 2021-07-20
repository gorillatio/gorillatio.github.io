import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,
  target: 'static',
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build'],
  css: ['~assets/scss/main.scss'],
  head: {
    title: 'Gorillatio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Pursuit Kawaii for all mankind."
      },
      { name: 'theme-color', content: '#000' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Gorillatio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://gorillat.io/' },
      { hid: 'og:title', property: 'og:title', content: 'Gorillatio' },
      { hid: 'og:description', property: 'og:description', content: 'Pursuit Kawaii for all mankind.' },
      { hid: 'og:image', property: 'og:image', content: '~assets/img/avatar.jpg' },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/touch-icon.jpg"}
    ]
  },
  modules: [
    ['vue-scrollto/nuxt', { duration: 300 }],
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English'},
      { code: 'ja', name: '日本語' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true
  }
}

export default config
