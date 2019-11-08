import CityHelper from '~/plugins/helpers/server/city-helper'

export const state = () => ({
  city: []
});

export const mutations = {
  SET_IP(state, ip) {
    state.ip = ip
  },
  SET_CITY(state, leads) {
    state.city = leads
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env}) {

    const ip = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      (req.connection.socket ? req.connection.socket.remoteAddress : null);

    commit('SET_CITY', CityHelper.getCity(req, env));
    commit('SET_IP', ip)
  }
};
