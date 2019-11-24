'use strict';

export default {
  install (Vue, opts = {}) {
    Vue.prototype.$service = {
      api: '',
      security: ''
    }
  }
}
