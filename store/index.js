import CityHelper from '~/plugins/helpers/server/city-helper'

export const state = () => ({
  city: [],
  categories: []
});

export const mutations = {
  SET_CATEGORIES(state, leads) {
    state.categories = leads
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env, $axios}) {
    const categories = await $axios.$get(`${env.apiUrl}/categories`);
    commit('SET_CATEGORIES', categories)
  }
};
