// ~/services/auth.js

export default {
  login: async (axios, credentials) => {
    const response = await axios.post('/auth/login', credentials)
    return response.data
  },

  register: async (axios, userData) => {
    const response = await axios.post('/auth/register', userData)
    return response.data
  }
}