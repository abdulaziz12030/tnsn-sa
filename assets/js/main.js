// main.js (ES Module, Progressive Enhancement)
const qs  = (s, el=document) => el.querySelector(s);
const qsa = (s, el=document) => [...el.querySelectorAll(s)];

const state = {
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

// ===== Mobile Nav (ARIA + Focus Trap) =====
(function initNav(){
  const toggle = qs('.menu-toggle');
  const nav    = qs('.nav');
  if(!toggle || !nav) return;

  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    nav.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');

    // Focus trap
    const focusables = qsa('a, button, [tabindex]:not([tabindex="-1"])', nav);
    const first = focusables[0], last = focusables[focusables.length - 1];
    const trap = (e) => {
      if(e.key !== 'Tab') return;
      if(e.shiftKey && document.activeElement === first){ last.focus(); e.preventDefault(); }
      else if(!e.shiftKey && document.activeElement === last){ first.focus(); e.preventDefault(); }
    };
    nav.addEventListener('keydown', trap);
    nav.dataset.trap = '1';
    first && first.focus();

    // Click outside to close
    const closeOnOutside = (e) => {
      if(!nav.contains(e.target) && e.target !== toggle){ close(); }
    };
    document.addEventListener('click', closeOnOutside, { capture:true, once:true });
  };

  const close = () => {
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if(nav.dataset.trap){
      nav.removeAttribute('data-trap');
    }
    lastFocused && lastFocused.focus();
  };

  toggle.addEventListener('click', () => {
    (nav.hidden) ? open() : close();
  });

  // Close on Esc
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !nav.hidden) close();
  });

  // Close on nav link click (in-page)
  nav.addEventListener('click', (e)=>{
    const link = e.target.closest('a[href^="#"]');
    if(link) close();
  });
})();

// ===== Smooth scroll for internal anchors (enhanced) =====
(function initSmoothScroll(){
  qsa('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = qs(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// ===== To-Top button (IntersectionObserver sentinel) =====
(function initToTop(){
  const btn = qs('.to-top');
  if(!btn) return;

  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  sentinel.setAttribute('aria-hidden','true');
  document.body.prepend(sentinel);

  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) btn.setAttribute('hidden','');
      else btn.removeAttribute('hidden');
    });
  });
  io.observe(sentinel);

  btn.addEventListener('click', ()=> window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ===== Counters on reveal =====
(function initCounters(){
  const els = qsa('[data-counter]');
  if(!els.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    if(!Number.isFinite(target)) return (el.textContent = '0');
    if(state.reducedMotion) return (el.textContent = new Intl.NumberFormat('ar-SA').format(target));

    const dur = 1100;
    const start = performance.now();
    const fmt = new Intl.NumberFormat('ar-SA');

    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      const val = Math.round(target * eased);
      el.textContent = fmt.format(val);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  els.forEach(el => io.observe(el));
})();

// ===== Lazy-load AOS JS when idle (progressive) =====
(function initAOS(){
  const load = () => {
    import('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js')
      .then(mod => { window.AOS = mod.default || mod; window.AOS.init({ duration: 600, easing: 'ease-out', once: true, offset: 70 }); })
      .catch(()=>{ /* fail silently */ });
  };
  if('requestIdleCallback' in window) requestIdleCallback(load, {timeout: 2000});
  else setTimeout(load, 800);
})();
