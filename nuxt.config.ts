import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,
  target: 'static',
  srcDir: 'src',
  plugins: [
    '~plugins/gtag.ts',
    '~plugins/youtube.client.ts'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  css: [
    '~assets/scss/main.scss',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
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
      { name: 'theme-color', content: '#0a0a0a' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Gorillatio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://gorillat.io/' },
      { hid: 'og:title', property: 'og:title', content: 'Gorillatio | Pursuit Kawaii for all mankind.' },
      { hid: 'og:description', property: 'og:description', content: 'Sanpaku-eyes girl is salvation, justice, and order of nature.' },
      { hid: 'og:image', property: 'og:image', content: 'https://gorillat.io/ogp.jpg' },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/touch-icon.jpg" }
    ]
  },
  modules: [
    ['vue-scrollto/nuxt', { duration: 300 }],
    'nuxt-i18n',
    ['@nuxtjs/fontawesome', { component: 'fa', suffix: true }],
    '@nuxtjs/axios'
  ],
  i18n: {
    seo: false,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English'},
      { code: 'ja', iso: 'ja-JP', name: '日本語' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true
  },
  fontawesome: {
    icons: {
      solid: ['faBars', 'faTimes', 'faHeart', 'faGlobe', 'faUser', 'faEnvelope', 'faPaperPlane', 'faThumbsUp', 'faSkullCrossbones'],
      brands: ['faTwitter', 'faYoutube', 'faInstagram', 'faTumblr']
    }
  }
}

export default config
