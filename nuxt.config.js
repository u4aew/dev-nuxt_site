module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TM - Интернет журнал, новости, технологии, здоровье, кино',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'the-magazine.ru'},
      {name: 'msapplication-TileColor', content: '#51A1FF'},
      {name: 'theme-color', content: '#B591BE'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&family=Merriweather:wght@400;700&display=swap&family=Lato:wght@300;400;700&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#5F36BA', height: '5px'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/moment',
    '@nuxtjs/yandex-metrika',
  ],
  buildModules: [
    '@/modules/generator',
    '@nuxtjs/moment',
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  router: {
    middleware: 'trailingSlashRedirect',
  },
  sitemap: {
    hostname: 'https://the-magazine.ru',
    gzip: true,
    generate: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  moment: {
    locales: ['ru']
  },
  yandexMetrika: {
    id: '74632201',
    webvisor: true,
    clickmap: true,
    useCDN: false,
    trackLinks: true,
    accurateTrackBounce: true,
  },
  styleResources: {
    stylus: [
      './assets/style/common.styl'
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://the-magazine.ru',
    apiUrl: process.env.API_URL || 'https://api.the-magazine.ru/wp-json/wp/v2'
  }
};
