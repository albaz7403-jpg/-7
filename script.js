// تأثير ظهور السيرة الذاتية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    const resumeCard = document.querySelector('.resume-card');
    
    // إخفاء البطاقة في البداية
    resumeCard.style.opacity = "0";
    resumeCard.style.transform = "translateY(30px)";
    resumeCard.style.transition = "all 1s ease-out";

    // إظهارها بعد لحظة صغيرة
    setTimeout(() => {
        resumeCard.style.opacity = "1";
        resumeCard.style.transform = "translateY(0)";
    }, 200);
});