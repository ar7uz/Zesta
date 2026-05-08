/* ZESTA FRUITS — interactive 3D globe (about page wow-anchor)
   Built with Globe.GL (https://globe.gl, Three.js under the hood).
   Loaded only when the about page renders the .globe-stage element.
   Mobile fallback: keeps a flat SVG map (defined in HTML), this script no-ops. */

(function () {
  'use strict';

  const stage = document.getElementById('globeStage');
  if (!stage) return;

  // Mobile / reduced-motion fallback — globe replaced by flat map
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.innerWidth < 768;
  if (reduceMotion || small) {
    stage.classList.add('is-flat');
    return;
  }

  // Lazy-load Globe.GL only when stage is in viewport
  function loadGlobe() {
    return new Promise((resolve, reject) => {
      if (window.Globe) return resolve(window.Globe);
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/globe.gl@2.34.4/dist/globe.gl.min.js';
      s.onload = () => resolve(window.Globe);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // Origin → destination data
  const TASHKENT = { lat: 41.30, lng: 69.24, name: 'Tashkent · ZESTA hub' };
  const ORIGINS = [
    { iso: 'PL', lat: 52.23, lng: 21.01, name: 'Poland', color: '#9DD55C', product: 'Apples' },
    { iso: 'CN', lat: 39.90, lng: 116.41, name: 'China', color: '#9DD55C', product: 'Citrus · Pineapple · Passion fruit' },
    { iso: 'IR', lat: 35.69, lng: 51.39, name: 'Iran', color: '#9DD55C', product: 'Mazzafati Dates' }
  ];

  const arcs = ORIGINS.map((o) => ({
    startLat: o.lat,
    startLng: o.lng,
    endLat: TASHKENT.lat,
    endLng: TASHKENT.lng,
    color: o.color,
    label: `${o.iso} → UZ · ${o.product}`
  }));

  const points = [
    ...ORIGINS.map((o) => ({
      lat: o.lat,
      lng: o.lng,
      label: `${o.iso} · ${o.name}\n${o.product}`,
      color: o.color,
      size: 0.6
    })),
    {
      lat: TASHKENT.lat,
      lng: TASHKENT.lng,
      label: 'UZ · Tashkent\nZESTA distribution hub',
      color: '#D9994F',
      size: 0.9
    }
  ];

  const rings = [{ lat: TASHKENT.lat, lng: TASHKENT.lng, color: '#D9994F', maxR: 6, propagationSpeed: 4, repeatPeriod: 1600 }];

  function start() {
    loadGlobe().then((Globe) => {
      const g = Globe()(stage)
        .backgroundColor('rgba(0,0,0,0)')
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .atmosphereColor('#9DD55C')
        .atmosphereAltitude(0.18)
        .pointsData(points)
        .pointAltitude(0.02)
        .pointColor('color')
        .pointRadius('size')
        .pointLabel('label')
        .arcsData(arcs)
        .arcColor('color')
        .arcDashLength(0.42)
        .arcDashGap(0.18)
        .arcDashAnimateTime(2200)
        .arcStroke(0.5)
        .arcAltitudeAutoScale(0.42)
        .arcLabel('label')
        .ringsData(rings)
        .ringColor((r) => r.color)
        .ringMaxRadius('maxR')
        .ringPropagationSpeed('propagationSpeed')
        .ringRepeatPeriod('repeatPeriod')
        .pointOfView({ lat: 41, lng: 60, altitude: 2.4 }, 0);

      // auto-rotate idle
      const controls = g.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false;

      // pause auto-rotate on user interaction
      stage.addEventListener('pointerdown', () => (controls.autoRotate = false));
      stage.addEventListener('pointerleave', () => (controls.autoRotate = true));

      // resize handler
      function fit() {
        g.width(stage.clientWidth).height(stage.clientHeight);
      }
      fit();
      window.addEventListener('resize', fit);
    }).catch(() => {
      stage.classList.add('is-flat');
    });
  }

  // Lazy-init when stage enters viewport
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            io.unobserve(stage);
          }
        });
      },
      { rootMargin: '200px' }
    );
    io.observe(stage);
  } else {
    start();
  }
})();
