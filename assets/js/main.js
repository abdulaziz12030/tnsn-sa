// ===== Service Request Form (demo handler) =====
(function initServiceForm(){
  const form = document.getElementById('serviceForm');
  const msg  = document.getElementById('formMsg');
  if(!form || !msg) return;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // تحقق مبدئي
    if(!form.checkValidity()){
      msg.textContent = "الرجاء تعبئة جميع الحقول المطلوبة بشكل صحيح.";
      msg.className = "form-msg error";
      return;
    }
    // هنا ممكن ترسل البيانات عبر Fetch لـ EmailJS أو API
    // demo:
    msg.textContent = "✅ تم استلام طلبك، سنتواصل معك قريبًا.";
    msg.className = "form-msg success";
    form.reset();
  });
})();
