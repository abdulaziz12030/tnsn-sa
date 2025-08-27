(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // سنة الفوتر
    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();

    // قائمة الموبايل
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    }
    // نمط القائمة المفتوحة
    const style = document.createElement('style');
    style.textContent = `
      .nav.is-open{
        display:flex; flex-direction:column; gap:6px;
        position:absolute; top:64px; right:0; left:0;
        background:#fff; border:1px solid #E6E8EB; padding:10px; margin:0 16px; border-radius:12px;
        box-shadow:0 8px 24px rgba(0,0,0,.06);
      }
    `;
    document.head.appendChild(style);

    // تمرير سلس
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          nav && nav.classList.remove('is-open');
        }
      });
    });

    // زر لأعلى
    const toTop = document.querySelector('.to-top');
    const revealTop = () => {
      if (!toTop) return;
      (window.scrollY > 280) ? toTop.removeAttribute('hidden') : toTop.setAttribute('hidden', '');
    };
    window.addEventListener('scroll', revealTop, { passive: true });
    revealTop();
    toTop && toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // عدادات الإنجازات
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length) {
      const animate = (el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const dur = 1100; // ms
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

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.28 });

      counters.forEach(el => io.observe(el));
    }
  });
})();
