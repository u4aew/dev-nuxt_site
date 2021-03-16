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
  loading: {color: 'red', height: '5px'},
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
    '@nuxtjs/axios'
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  styleResources: {
    stylus: [
      './assets/style/common.styl'
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://the-magazine.ru/wp-json/wp/v2',
    apiUrl: process.env.API_URL || 'https://the-magazine.ru/wp-json/wp/v2'
  }
};
