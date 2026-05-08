/* ZESTA FRUITS — premium effects (vanilla JS, no deps)
   Animation budget per DESIGN STANDARDS: ≤3 types per page.
   Sweet-spot trio: SplitText + BlurText + Magnetic.
   Supplementary: Counter, 3D-Tilt-with-Glare. */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = matchMedia('(hover: none)').matches;

  /* ---------- SPLIT TEXT ---------- */
  function splitText(el) {
    const text = el.textContent;
    el.textContent = '';
    const words = text.split(/\s+/);
    words.forEach((w, i) => {
      const word = document.createElement('span');
      word.className = 'word';
      const inner = document.createElement('span');
      inner.textContent = w;
      word.appendChild(inner);
      el.appendChild(word);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  }
  window.__zestaSplit = splitText;

  /* ---------- INTERSECTION REVEALS ---------- */
  function observe(els, cb, opts = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }) {
    if (reduceMotion) {
      els.forEach((el) => cb(el));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cb(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      opts
    );
    els.forEach((el) => io.observe(el));
  }

  function initSplits() {
    document.querySelectorAll('[data-split]').forEach((el) => splitText(el));
    observe(document.querySelectorAll('[data-split]'), (el) => el.classList.add('is-revealed'));
  }

  function initBlur() {
    observe(document.querySelectorAll('[data-blur]'), (el) => el.classList.add('is-revealed'));
  }

  /* ---------- MAGNETIC HOVER ---------- */
  function initMagnetic() {
    if (isTouch || reduceMotion) return;
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.3;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ---------- COUNTER ---------- */
  function animateCounter(el) {
    const raw = el.dataset.counter || el.textContent.replace(/[^\d]/g, '');
    const target = parseInt(raw, 10);
    if (!isFinite(target) || target === 0) return;
    const suffix = (el.dataset.suffix || '').toString();
    const duration = 1400;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(target * eased);
      el.textContent = v.toLocaleString('ru-RU') + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    observe(document.querySelectorAll('[data-counter]'), animateCounter);
  }

  /* ---------- 3D TILT + GLARE ---------- */
  function initTilt() {
    if (isTouch || reduceMotion) return;
    document.querySelectorAll('[data-tilt]').forEach((el) => {
      el.classList.add('tilt-host');
      let glare = el.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'tilt-glare';
        el.appendChild(glare);
      }
      const max = parseFloat(el.dataset.tilt) || 6;

      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * max;
        const ry = (px - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        glare.style.setProperty('--gx', px * 100 + '%');
        glare.style.setProperty('--gy', py * 100 + '%');
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initSplits();
    initBlur();
    initMagnetic();
    initCounters();
    initTilt();
  });
})();
