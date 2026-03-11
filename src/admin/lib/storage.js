const STORAGE_KEY = 'bs_admin_content_v1';

const seed = {
  cms: {
    home: {
      title: 'Empowering Communities',
      subtitle: 'Compassion-led programs for lasting social impact.',
      heroImage: '',
    },
    about: {
      title: 'About BS Foundation',
      body: 'We support education, healthcare, and community development.',
      image: '',
    },
    contact: {
      email: 'office@bappeshakila.org',
      phone: '+61 402 384 501',
      address: 'Level 3, 41-45 Rickard Road, Sydney, NSW, Australia, 2200',
    },
    footer: {
      copyright: '2021-2026',
      orgName: 'Trionix IT',
      orgLink: 'https://trionixit.com.au',
    },
  },
  blogs: [],
  services: [],
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return structuredClone(seed);
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(seed),
      ...parsed,
      cms: {
        ...seed.cms,
        ...(parsed.cms || {}),
      },
    };
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return structuredClone(seed);
  }
}

function saveState(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function getCmsSection(sectionKey) {
  const state = loadState();
  return state.cms[sectionKey] || {};
}

export function saveCmsSection(sectionKey, payload) {
  const state = loadState();
  state.cms[sectionKey] = payload;
  saveState(state);
}

export function listBlogs() {
  return loadState().blogs;
}

export function createBlog(payload) {
  const state = loadState();
  const item = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...payload,
  };
  state.blogs = [item, ...state.blogs];
  saveState(state);
  return item;
}

export function updateBlog(id, payload) {
  const state = loadState();
  state.blogs = state.blogs.map((b) =>
    b.id === id ? { ...b, ...payload, updatedAt: new Date().toISOString() } : b
  );
  saveState(state);
}

export function deleteBlog(id) {
  const state = loadState();
  state.blogs = state.blogs.filter((b) => b.id !== id);
  saveState(state);
}

export function listServices() {
  return loadState().services;
}

export function createService(payload) {
  const state = loadState();
  const item = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...payload,
  };
  state.services = [item, ...state.services];
  saveState(state);
  return item;
}

export function updateService(id, payload) {
  const state = loadState();
  state.services = state.services.map((s) =>
    s.id === id ? { ...s, ...payload, updatedAt: new Date().toISOString() } : s
  );
  saveState(state);
}

export function deleteService(id) {
  const state = loadState();
  state.services = state.services.filter((s) => s.id !== id);
  saveState(state);
}

export function getDashboardCounts() {
  const state = loadState();
  return {
    blogs: state.blogs.length,
    services: state.services.length,
    cmsSections: Object.keys(state.cms).length,
  };
}
