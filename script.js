// 1. تأثير الظهور التدريجي (Fade In) عند فتح أي صفحة
document.addEventListener("DOMContentLoaded", function() {
    // نجعل الصفحة تبدأ بشفافية صفر
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease-in-out";
    
    // إظهار الصفحة بعد التحميل مباشرة
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);
});

// 2. إضافة تأثير صوتي بسيط أو اهتزاز عند الضغط على أزرار التنقل (اختياري)
const navCards = document.querySelectorAll('.nav-card');

navCards.forEach(card => {
    card.addEventListener('click', function() {
        // يمكنك هنا إضافة أي منطق برمجي قبل الانتقال
        console.log("جاري الانتقال إلى: " + this.querySelector('span').innerText);
    });
});

// 3. رسالة ترحيب ذكية تظهر مرة واحدة فقط في الصفحة الرئيسية
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    window.onload = function() {
        console.log("مرحباً بك في موقع السيرة الذاتية الاحترافية!");
    };
}

// 4. وظيفة للتحقق من أن جميع روابط الصفحات تعمل
window.onerror = function() {
    alert("عذراً، حدث خطأ في تحميل إحدى الصفحات. تأكد من وجود جميع الملفات في نفس المجلد.");
};