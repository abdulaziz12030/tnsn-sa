// سنة الحقوق
document.getElementById('year').textContent = new Date().getFullYear();

// قائمة الجوال + ARIA
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// === Enter animations on load ===
window.addEventListener('load', ()=>{
  requestAnimationFrame(()=>{
    document.getElementById('title').classList.add('in');
    setTimeout(()=>{ document.getElementById('subtitle').classList.add('in'); }, 120);
    setTimeout(()=>{ document.getElementById('ctaRow').classList.add('in'); }, 260);
  });
});

// === Gentle parallax for hero background (via CSS var) with rAF throttling ===
const hero = document.getElementById('hero');
let ticking = false;
window.addEventListener('scroll', ()=>{
  if(!ticking){
    window.requestAnimationFrame(()=>{
      const y = window.scrollY;
      hero.style.setProperty('--bgY', `calc(50% + ${y*0.06}px)`);
      ticking = false;
    });
    ticking = true;
  }
},{passive:true});

// === Ripple on buttons ===
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(e){
    const r = document.createElement('span');
    const d = Math.max(this.clientWidth, this.clientHeight);
    r.style.width = r.style.height = d + 'px';
    const rect = this.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left - d/2) + 'px';
    r.style.top  = (e.clientY - rect.top  - d/2) + 'px';
    r.className = 'ripple';
    this.appendChild(r);
    r.addEventListener('animationend', ()=> r.remove());
  });
});

// === Scroll reveal (عناوين/بطاقات/لوحات) + Counters ===
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in','show');
      if(e.target.querySelector && e.target.querySelector('.counter')) startCounters(e.target);
      io.unobserve(e.target);
    }
  });
},{
  threshold: 0.12,
  rootMargin: '80px 0px -20px 0px' // يكشف العناصر أبكر قليلًا
});

document.querySelectorAll('.from-right,.from-left,.card,.stat,.panel').forEach(el=> io.observe(el));
document.querySelectorAll('.card').forEach(el=> el.classList.remove('show'));

// Counters animation
function startCounters(scope){
  scope.querySelectorAll('.counter').forEach(el=>{
    const target = +el.dataset.target; const dur = 1400 + Math.random()*800;
    const start = performance.now();
    function tick(t){
      const p = Math.min(1,(t-start)/dur);
      el.textContent = Math.floor(target*p).toLocaleString('en-US');
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Ask buttons -> preselect service
document.querySelectorAll('.ask-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const serviceText = btn.dataset.service || 'طلب عرض سعر';
    const select = document.getElementById('serviceSelect');
    if(select){
      Array.from(select.options).forEach(o=>{ o.selected = (o.text.trim() === serviceText.trim()); });
      document.getElementById('leadForm').scrollIntoView({behavior:'smooth'});
    }
  });
});

// Back to top
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{ toTop.style.display = (window.scrollY > 400) ? 'block' : 'none'; });
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Submit form (Formspree أو باك إندك) + إخفاء نجاح تلقائي
async function submitLead(ev){
  ev.preventDefault();
  const form = ev.target;
  let endpoint = (form.dataset.endpoint || '').trim(); // Formspree endpoint
  // دعم تعيين المعرف عبر ?fs=YOUR_ID
  try {
    if (!endpoint || /your-id-here/i.test(endpoint)){
      const fs = new URLSearchParams(window.location.search).get('fs');
      if(fs){ endpoint = `https://formspree.io/f/${fs}`; }
    }
  } catch(_){ /* ignore */ }
  const ok = document.getElementById('ok');
  const no = document.getElementById('no');
  if(ok) ok.style.display='none'; if(no) no.style.display='none';
  const data = Object.fromEntries(new FormData(form).entries());
  if(data.email && !data._replyto){ data._replyto = data.email; }
  if(!data._subject){ data._subject = 'طلب خدمة جديد — TNSN'; }
  if(!endpoint){ if(no) no.style.display='block'; return false; }
  try{
    const res = await fetch(endpoint, {
      method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify(data)
    });
    if(res.ok){
      form.reset();
      if(ok){
        ok.style.display='block';
        setTimeout(()=>{ ok.style.display='none'; }, 5000);
      }
    }else{
      if(no) no.style.display='block';
    }
  }catch(_){
    if(no) no.style.display='block';
  }
  return false;
}
