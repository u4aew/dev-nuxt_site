import CityHelper from '~/plugins/helpers/server/city-helper'

export const state = () => ({
  city: []
});

export const mutations = {
  SET_CITY(state, leads) {
    state.city = leads
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env}) {
    commit('SET_CITY', CityHelper.getCity(req, env))
  }
};
