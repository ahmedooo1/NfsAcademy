import createPersistedState from 'vuex-persistedstate'
import Cookies from 'universal-cookie'

export default ({store, req, isDev}) => {
  // On récupère le cookie selon l'environnement
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()

  // On définit les options de configuration pour vuex-persistedstate
  const settings = {
    key: 'NfsAcademy',
    paths: [], // définit les propriétés du store à persister
    storage: {
      setItem: (key, value) => cookies.set(key, value),
      getItem: key => cookies.get(key),
      removeItem: key => cookies.remove(key)
    }
  }

  // On ajoute le module vuex-persistedstate à notre store
  createPersistedState(settings)(store)
}