const API_BASE = '/api';

const api = {
  // Generic fetch wrapper with auth header
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('cima_token');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    let response;
    try {
      response = await fetch(`${API_BASE}${endpoint}`, config);
    } catch (err) {
      throw new Error('Unable to connect to server. Make sure the backend is running.');
    }

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error('Server returned an invalid response.');
    }

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  },

  // Auth endpoints
  auth: {
    register(name, email, password) {
      return api.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });
    },

    login(email, password) {
      return api.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
    },

    getMe() {
      return api.request('/auth/me');
    },
  },
};

export default api;
