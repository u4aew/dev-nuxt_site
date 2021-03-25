export const state = () => ({
  categories: [],
  menuOpen: false
});

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_MENU_OPEN(state, value) {
    state.menuOpen = value
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env, $axios}) {
    const categories = await $axios.$get(`${env.apiUrl}/categories`);
    commit('SET_CATEGORIES', categories)
  },
  SET_MENU_OPEN(context, value) {
    context.commit('SET_MENU_OPEN', value)
  }
};
