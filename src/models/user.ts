import { touch, login, logout } from '../api/user';

export const user = {
  state: {
    user: null,
    loading: true
  },
  reducers: {
    setData(state, payload) {
      return Object.assign({}, state, { user: payload.user, loading: payload.loading });
    }
  },
  effects: (dispatch) => ({
    async getUserAsync(rootState) {
      dispatch.user.setData({ loading: true });
      try {
        let user: any = await touch();
        dispatch.user.setData({ user: user.toJSON(), loading: false });
        return user;
      } catch {
        dispatch.user.setData({ user: null, loading: false });
        return null;
      }
    },
    async loginAsync(params: any, rootState) {
      dispatch.user.setData({ loading: true });
      try {
        let user: any = await login(params.name, params.pwd);
        dispatch.user.setData({ user: user.toJSON(), loading: false });
        return user;
      } catch {
        dispatch.user.setData({ user: null, loading: false });
        return null;
      }
    },
    async logoutAsync(rootState) {
      dispatch.user.setData({ loading: true });
      try {
        logout();
        dispatch.user.setData({ user: null, loading: false });
      } catch {
        dispatch.user.setData({ user: null, loading: false });
      }
    }
  })
};
