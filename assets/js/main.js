
(function(){
  const imgs=['assets/img/hero1.jpg','assets/img/hero2.jpg','assets/img/hero3.jpg'];
  let i=0;const el=document.getElementById('hero-img');
  function show(n){el.src=imgs[n];}
  document.getElementById('next').onclick=()=>{i=(i+1)%imgs.length;show(i);};
  document.getElementById('prev').onclick=()=>{i=(i-1+imgs.length)%imgs.length;show(i);};
  show(0);
  const toggle=document.getElementById('menu-toggle');const menu=document.getElementById('menu');
  toggle.addEventListener('click',()=>menu.classList.toggle('open'));
})();