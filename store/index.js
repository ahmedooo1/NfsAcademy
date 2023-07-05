
import cookies from './cookies';




export const modules = {
  cookies
}

export const state = () => ({
  token: null,
  user: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    console.log('Updated user object:', state.user); // Ajouter cette ligne
  },
  removeToken(state) {
    state.token = null
    state.user = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
};

export const getters = {
  isAdminOrRedacteur: (state) => {
    console.log("User role:", state.user?.role); // Ajoutez cette ligne
    return (
      state.user &&
      (state.user.role === "admin" || state.user.role === "redacteur")
    );
  },
  isLoggedIn: (state) => !!state.token || !!state.user,
};

export const actions = {
    nuxtServerInit({  commit }, { req }) {
      
      if (process.client) {
        const token = localStorage.getItem('token');
        if (token) {
          commit('setToken', token);
        }
        const user = localStorage.getItem('user');
        if (user) {
          commit('setUser', JSON.parse(user));
        }
      }
    },
  
  
};
