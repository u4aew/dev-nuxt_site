import types from '@/store/types';

export const actions = {
  async nuxtServerInit(store, {req, $axios}) {
    const ipInfo = await $axios.$get(`${process.env.API_URL}/info-ip/`, {
      params: {
        ip: req.headers['x-real-ip'] || req.connection.remoteAddress
      }
    });

    store.commit(types.session.moduleName + types.session.actions.ipInfo.set, ipInfo);
  }
};
