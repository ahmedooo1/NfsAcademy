export default {
    state: () => ({
      accepted: false,
      rejected: false, 
    }),
  
    mutations: {
      accept(state) {
        state.accepted = true;
      },
      reject(state) { 
        state.rejected = true;
      },
      setRejected(state, value) { 
        state.rejected = value;
      },
    },
  
    actions: {
      accept({ commit }) {
        commit('accept');
        this.$cookies.set('accepted', true, { path: '/', maxAge: 60 * 60 * 24 * 365 });
      },
      reject({ commit }) { 
        commit('reject');
        this.$cookies.set('accepted', false, { path: '/', maxAge: 60 * 60 * 24 * 365 });
      },
    },
  };