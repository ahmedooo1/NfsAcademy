export default {
    state: () => ({
      accepted: false,
    }),
  
    mutations: {
      accept(state) {
        state.accepted = true;
      },
    },
  
    actions: {
      accept({ commit }) {
        commit('accept');
        this.$cookies.set('accepted', true, { path: '/', maxAge: 60 * 60 * 24 * 365 });
      },
    },
  };