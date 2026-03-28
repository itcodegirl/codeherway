/* ============================================
   CODEHERWAY — MAIN JS
   Handles: component loading, nav toggle,
   active link highlighting
   ============================================ */

/**
 * Load HTML component into a target element
 * @param {string} selector - CSS selector for target element
 * @param {string} url - Path to the component HTML file
 */
async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
    el.dispatchEvent(new Event('component:loaded'));
  } catch (err) {
    console.warn(`[CodeHerWay] Could not load component: ${url}`, err);
  }
}

/**
 * Highlight the active nav link based on current URL
 */
function setActiveNavLink() {
  const current = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && current.includes(href) && href !== '/index.html') {
      link.classList.add('active');
    } else if (href === '/index.html' && (current === '/' || current.endsWith('index.html'))) {
      link.classList.add('active');
    }
  });
}

/**
 * Mobile nav toggle
 */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.classList.toggle('active', isOpen);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {

  // Determine base path (works in subfolders too)
  const depth = window.location.pathname.split('/').filter(Boolean).length - 1;
  const base  = depth > 0 ? '../'.repeat(depth) : './';

  // Load shared components
  await Promise.all([
    loadComponent('#site-header', `${base}components/header.html`),
    loadComponent('#site-footer', `${base}components/footer.html`),
  ]);

  // Post-load setup
  setActiveNavLink();
  initNavToggle();
});
