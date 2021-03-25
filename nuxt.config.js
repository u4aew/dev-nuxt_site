module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'the-magazine.ru',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'the-magazine.ru'},
      {name: 'msapplication-TileColor', content: '#da532c'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&family=Merriweather:wght@400;700&display=swap&family=Lato:wght@400;700&display=swap'
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
    '@nuxtjs/sitemap'
  ],
  buildModules: [
    '@/modules/generator'
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  sitemap: {
    hostname: 'https://the-magazine.ru',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
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
