const env = require("dotenv").config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
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
  router: {
    middleware: 'city'
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  styleResources: {
    stylus: [
      './assets/style/common.styl'
    ]
  },
  env: {...env.parsed}
};
