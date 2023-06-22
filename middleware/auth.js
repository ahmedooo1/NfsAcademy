export default function ({ store, redirect, route }) {
  if (process.client) {
    const token = localStorage.getItem('token');
    if (token) {
      store.commit('setToken', token);
    }
    const user = localStorage.getItem('user');
    if (user) {
      store.commit('setUser', JSON.parse(user));
    }
  }

  const requiresAuth = route.meta.some((meta) => meta.auth === true);
  const noAuth = route.meta.some((meta) => meta.auth === false);

  // Si l'utilisateur n'est pas authentifié et que la page requiert l'authentification, redirigez vers la page de connexion
  if (!store.getters.isLoggedIn && requiresAuth) {
    return redirect('/');
  }

  // Si l'utilisateur est authentifié et que la page ne nécessite pas d'authentification, redirigez vers la page d'accueil
  if (store.getters.isLoggedIn && noAuth) {
    return redirect('/');
  }
}