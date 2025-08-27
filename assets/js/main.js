(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // سنة الفوتر
    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();

    // فتح/إغلاق قائمة الموبايل
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('is-open');
      });
    }

    // تمرير سلس للروابط الداخلية
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

    // عدادات الإنجازات — تبدأ عند الظهور
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length) {
      const animate = (el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const dur = 1200; // ms
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
      }, { threshold: 0.3 });

      counters.forEach(el => io.observe(el));
    }
  });
})();
