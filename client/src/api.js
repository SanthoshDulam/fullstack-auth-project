import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

// 🔑 Function to attach JWT token for protected routes
export function authHeaders() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export const api = {
  // ✅ Register user
  async register(username, password) {
    const { data } = await axios.post(`${API_BASE}/api/register`, { username, password })
    return data
  },

  // ✅ Login user and store token
  async login(username, password) {
    const { data } = await axios.post(`${API_BASE}/api/login`, { username, password })
    if (data?.token) localStorage.setItem('token', data.token)
    return data
  },

  // ✅ Fetch user profile (protected)
  async getProfile() {
    const { data } = await axios.get(`${API_BASE}/api/profile`, { headers: authHeaders() })
    return data
  },

  // (Optional) — old stuff from template system
  async getTemplates() {
    const { data } = await axios.get(`${API_BASE}/api/templates`)
    return data
  },

  async addFavorite(templateId) {
    const { data } = await axios.post(`${API_BASE}/api/favorites/${templateId}`, {}, { headers: authHeaders() })
    return data
  },

  async getFavorites() {
    const { data } = await axios.get(`${API_BASE}/api/favorites`, { headers: authHeaders() })
    return data
  }
}
