// سنة ديناميكية
document.getElementById('year').textContent = new Date().getFullYear();

// سلايدر
const slides = document.querySelectorAll('#heroSlider .slide');
let index = 0;
function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  slides[i].classList.add('active');
}
document.querySelector('#heroSlider .next').onclick=()=>{index=(index+1)%slides.length;showSlide(index);}
document.querySelector('#heroSlider .prev').onclick=()=>{index=(index-1+slides.length)%slides.length;showSlide(index);}
// تلقائي أسرع (كل 4 ثواني)
setInterval(()=>{index=(index+1)%slides.length;showSlide(index);},4000);
