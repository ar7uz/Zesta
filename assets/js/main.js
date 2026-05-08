/* ZESTA FRUITS — main runtime
   - Language switcher (ru/uz/en) with localStorage persist
   - Mobile menu
   - Header scroll-state
   - Active nav link
   - Smooth anchor scroll */

(function () {
  'use strict';

  const I18N = window.ZESTA_I18N;
  const STORAGE_KEY = 'zesta.lang';

  /* ---------- LANGUAGE ---------- */
  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && I18N.langs.includes(stored)) return stored;
    return I18N.defaultLang;
  }

  function applyLang(lang) {
    if (!I18N.langs.includes(lang)) lang = I18N.defaultLang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const entry = I18N.dict[key];
      if (entry && entry[lang] != null) el.textContent = entry[lang];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const entry = I18N.dict[key];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr'); // e.g. "placeholder:co.form.placeholder"
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const entry = I18N.dict[key];
        if (entry && entry[lang] != null) el.setAttribute(attr, entry[lang]);
      });
    });

    document.querySelectorAll('.lang button').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Re-split text after translation, preserving reveal state
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (typeof window.__zestaSplit !== 'function') return;
      const wasRevealed = el.classList.contains('is-revealed');
      el.classList.remove('is-revealed');
      window.__zestaSplit(el);
      if (wasRevealed) requestAnimationFrame(() => el.classList.add('is-revealed'));
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang button').forEach((btn) => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(getLang());
  }

  /* ---------- MOBILE MENU ---------- */
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    if (!toggle || !nav) return;

    function close() {
      toggle.classList.remove('is-open');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function open() {
      toggle.classList.add('is-open');
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    toggle.addEventListener('click', () => {
      nav.classList.contains('is-open') ? close() : open();
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
    });
  }

  /* ---------- HEADER SCROLL STATE ---------- */
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  function initActiveNav() {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-page]').forEach((link) => {
      const target = (link.dataset.page + '.html').toLowerCase();
      if (target === path || (path === '' && target === 'index.html')) {
        link.classList.add('is-active');
      }
    });
  }

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLangSwitcher();
    initMobileMenu();
    initHeader();
    initActiveNav();
    initAnchors();
  });
})();
