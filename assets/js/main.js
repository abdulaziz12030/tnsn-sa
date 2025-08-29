
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
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {rootMargin:'-10% 0px -10% 0px', threshold:0.1});
    items.forEach(el=>io.observe(el));
  }else{ items.forEach(el=>el.classList.add('in')); }

  // Slider (simple)
  qsa('.slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.parentElement.querySelectorAll('.slider-dots button');
    let i = 0;
    function go(n){
      i = (n + slides.length) % slides.length;
      track.style.transform = `translateX(-${i*100}%)`;
      dots.forEach((d,idx)=> d.classList.toggle('is-active', idx===i));
    }
    slider.querySelector('.prev').addEventListener('click', ()=>go(i-1));
    slider.querySelector('.next').addEventListener('click', ()=>go(i+1));
    dots.forEach((d,idx)=> d.addEventListener('click', ()=>go(idx)));
    // touch
    let sx=0, dx=0;
    slider.addEventListener('touchstart', e=> sx = e.touches[0].clientX, {passive:true});
    slider.addEventListener('touchmove', e=> dx = e.touches[0].clientX - sx, {passive:true});
    slider.addEventListener('touchend', ()=> { if(Math.abs(dx)>40){ go(i + (dx<0?1:-1)); } sx=dx=0; });
    go(0);
  });

  // Scroll-to-top button
  const topBtn = qs('.fab-top');
  function toggleTop(){ if(!topBtn) return; topBtn.hidden = window.scrollY < 180; }
  window.addEventListener('scroll', toggleTop, {passive:true});
  toggleTop();
})();


// Simple touch slider
(function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dots = Array.from(slider.querySelectorAll('.dot'));
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  let index = 0, startX=0, dx=0, isDown=false;

  function go(i){
    index = (i+slides.length)%slides.length;
    track.style.transform = `translateX(-${index*100}%)`;
    dots.forEach((d,k)=>d.classList.toggle('active', k===index));
  }
  dots.forEach((d,k)=>d.addEventListener('click', ()=>go(k)));
  prev && prev.addEventListener('click', ()=>go(index-1));
  next && next.addEventListener('click', ()=>go(index+1));

  // touch
  track.addEventListener('pointerdown', (e)=>{ isDown=true; startX=e.clientX; track.style.transition='none'; });
  window.addEventListener('pointermove', (e)=>{
    if(!isDown) return; dx=e.clientX-startX; track.style.transform=`translateX(${dx - index*slider.clientWidth}px)`;
  });
  window.addEventListener('pointerup', ()=>{
    if(!isDown) return; isDown=false; track.style.transition=''; 
    if(Math.abs(dx) > slider.clientWidth*0.18){ go(index + (dx<0?1:-1)); } else { go(index); }
    dx=0;
  });

  // Auto-slide (optional calm every 5s)
  let timer = setInterval(()=>go(index+1), 5000);
  slider.addEventListener('mouseenter', ()=>clearInterval(timer));
  slider.addEventListener('mouseleave', ()=>timer=setInterval(()=>go(index+1), 5000));

  go(0);
})();
