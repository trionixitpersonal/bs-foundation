const ADMIN_SESSION_KEY = 'bs_admin_session';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

// Demo credentials for local admin mode. Replace with API auth for production.
const DEFAULT_USER = 'admin';
const DEFAULT_PASS = 'Admin@123';

function now() {
  return Date.now();
}

export function login(username, password) {
  if (username !== DEFAULT_USER || password !== DEFAULT_PASS) {
    return { ok: false, message: 'Invalid username or password.' };
  }

  const payload = {
    username,
    issuedAt: now(),
    expiresAt: now() + SESSION_TTL_MS,
  };

  localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(payload));
  return { ok: true };
}

export function logout() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function getSession() {
  const raw = localStorage.getItem(ADMIN_SESSION_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed.expiresAt || parsed.expiresAt < now()) {
      logout();
      return null;
    }
    return parsed;
  } catch {
    logout();
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getSession());
}
