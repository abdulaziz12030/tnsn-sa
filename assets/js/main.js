/*
سلايدر بسيط بدون تبعيات:
- يعمل حتى لو لديك شريحة واحدة فقط
- يدعم autoplay ويمكن إيقافه عند عدم وجود إلا شريحة واحدة
- أزرار السابق/التالي مع تعطيلها تلقائيًا عند عدم الحاجة
*/


(function(){
document.addEventListener('DOMContentLoaded', function(){
// قائمة الموبايل
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');
if(toggle && nav){
toggle.addEventListener('click', () => nav.classList.toggle('open'));
}


// السلايدر
const slider = document.querySelector('.slider');
if(!slider) return;


const slides = Array.from(slider.querySelectorAll('.slide'));
const prevBtn = slider.querySelector('.ctrl.prev');
const nextBtn = slider.querySelector('.ctrl.next');


if(slides.length === 0){
// لا توجد شرائح
if(prevBtn) prevBtn.style.display = 'none';
if(nextBtn) nextBtn.style.display = 'none';
return;
}


let index = Math.max(0, slides.findIndex(s => s.classList.contains('is-active')));
if(index === -1) index = 0;


function go(i){
slides[index].classList.remove('is-active');
index = (i + slides.length) % slides.length;
slides[index].classList.add('is-active');
}


function next(){ go(index + 1); }
function prev(){ go(index - 1); }


// ربط الأزرار
if(prevBtn) prevBtn.addEventListener('click', prev);
if(nextBtn) nextBtn.addEventListener('click', next);


// تعطيل الأزرار والـ autoplay إذا شريحة واحدة فقط
if(slides.length === 1){
if(prevBtn) prevBtn.style.display = 'none';
if(nextBtn) nextBtn.style.display = 'none';
return; // لا حاجة للتشغيل التلقائي
}


})();
