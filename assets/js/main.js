(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // سنة الفوتر
    const y = document.getElementById('y');
    if(y) y.textContent = new Date().getFullYear();

    // قائمة الموبايل
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mainNav');
    if(toggle && nav){ toggle.addEventListener('click', () => nav.classList.toggle('open')); }

    // نموذج تواصل (تجريبي)
    const form = document.querySelector('.contact-form');
    if(form){
      form.addEventListener('submit', () => {
        alert('شكرًا لتواصلك! سنعود إليك قريبًا.');
      });
    }
  });
})();