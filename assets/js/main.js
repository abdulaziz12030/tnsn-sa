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
  });
})();
