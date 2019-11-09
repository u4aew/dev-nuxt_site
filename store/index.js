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
  },
  SET_CITY_INFO (state, cityInfo) {
    state.cityInfo = cityInfo
  }
};
export const actions = {
  async nuxtServerInit({commit}, {req, env, $axios, redirect}) {
    const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const params = await $axios.$get(`${process.env.API_URL}/info-ip/`, {
      params: {
        ip
      }
    });
    commit('SET_CITY', CityHelper.getCity(req, env));
    commit('SET_IP', ip);
    commit('SET_CITY_INFO', params)
  }
};
