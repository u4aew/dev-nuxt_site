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
    baseUrl: process.env.BASE_URL || 'https://the-magazine.ru',
    apiUrl: process.env.API_URL || 'https://api.the-magazine.ru/wp-json/wp/v2'
  }
};
