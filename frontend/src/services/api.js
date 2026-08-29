// Base API Client Configuration & Service Interceptor

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const SIMULATED_LATENCY_MS = 200; // Realistic network response feel

// Helper to simulate asynchronous backend network request
export async function apiClient(endpoint, options = {}) {
  const { method = 'GET', data = null, params = null } = options;

  // Add auth token if present
  const token = localStorage.getItem('quickcourt_auth_token');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  // If a real backend server is running, we can attempt live fetch
  // Otherwise, we seamlessly fallback to our persistent service storage handler
  if (import.meta.env.VITE_USE_LIVE_BACKEND === 'true') {
    try {
      let url = `${API_BASE_URL}${endpoint}`;
      if (params) {
        const query = new URLSearchParams(params).toString();
        url += `?${query}`;
      }

      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (err) {
      console.warn(`[API] Live backend call to ${endpoint} failed, falling back to mock layer:`, err.message);
    }
  }

  // Simulated latency for realistic UI feedback (spinners, skeletons)
  await new Promise((r) => setTimeout(r, SIMULATED_LATENCY_MS));

  return null; // Signals mock handler to return storage data
}

export { API_BASE_URL };
