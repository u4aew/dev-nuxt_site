import types from '@/store/types';

export const state = () => ({
  ipInfo: null
});

export const mutations = {
  [types.session.actions.ipInfo.set] (state, data) {
    state.ipInfo = data
  }
};

export const actions = {
  [types.session.actions.ipInfo.set] (state, data) {
    state.commit(types.session.actions.ipInfo.set, data)
  }
};
