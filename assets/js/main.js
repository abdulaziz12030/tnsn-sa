
(function(){
  function qs(s){ return document.querySelector(s); }
  function qsa(s){ return Array.from(document.querySelectorAll(s)); }

  // Mobile menu
  const toggle = qs('.mobile-toggle');
  const nav = qs('.nav-right');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
    });
  }

  // Reveal on scroll
  const items = qsa('.reveal');
  if('IntersectionObserver' in window && items.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {rootMargin:'-10% 0px -10% 0px', threshold:0.1});
    items.forEach(el=>io.observe(el));
  }else{
    items.forEach(el=>el.classList.add('in'));
  }

  // Smooth scroll for same-page anchors
  qsa('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const id = a.getAttribute('href').slice(1);
      const el = qs('#'+id);
      if(el){
        ev.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Dummy submit
  qsa('form').forEach(f=>{
    f.addEventListener('submit', (e)=>{
      if(f.getAttribute('data-dummy') !== null){
        e.preventDefault();
        alert('تم استلام طلبك بنجاح. سنعود إليك قريبًا.');
      }
    });
  });
})();

// Show "back to top" only after some scroll
(function(){
  const topBtn = document.querySelector('.fab-top');
  function toggleTop(){
    if(!topBtn) return;
    if(window.scrollY > 180){ topBtn.hidden = false; } else { topBtn.hidden = true; }
  }
  window.addEventListener('scroll', toggleTop, {passive:true});
  toggleTop();
})();
