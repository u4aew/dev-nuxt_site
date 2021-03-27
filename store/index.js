export const state = () => ({
  categories: [],
  lastNews: [],
  menuOpen: false
});

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_MENU_OPEN(state, value) {
    state.menuOpen = value
  },
  SET_LAST_NEWS(state, news) {
    state.lastNews = news
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env, $axios}) {
    const categories = await $axios.$get(`${env.apiUrl}/categories`);
    commit('SET_CATEGORIES', categories)

    const news = await $axios.$get(`${env.apiUrl}/posts?per_page=5`);
    commit('SET_LAST_NEWS', news)
  },
  SET_MENU_OPEN(context, value) {
    context.commit('SET_MENU_OPEN', value)
  }
};
