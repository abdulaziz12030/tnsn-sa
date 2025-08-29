
function toggleMenu(){
  const nav = document.querySelector('.nav-right');
  if(!nav) return;
  if(getComputedStyle(nav).display === 'none'){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'var(--bg)';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '0';
    nav.style.padding = '12px 16px';
    nav.style.boxShadow = '0 10px 20px rgba(0,0,0,.25)';
  }else{
    nav.style.display = 'none';
  }
}
function submitDummy(e){ e.preventDefault(); alert('تم استلام رسالتك بنجاح. سنعود إليك قريبًا.'); }
