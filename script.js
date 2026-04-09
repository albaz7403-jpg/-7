document.addEventListener('DOMContentLoaded', () => {
    const paper = document.querySelector('.word-page');
    
    // ظهور ناعم للورقة
    paper.style.opacity = '0';
    paper.style.transition = 'opacity 0.6s ease-in-out';
    
    setTimeout(() => {
        paper.style.opacity = '1';
    }, 100);

    // تأثير الكتابة في الصفحة الرئيسية فقط
    const typingElement = document.querySelector('.hero-typing');
    if (typingElement) {
        const text = typingElement.innerText;
        typingElement.innerText = '';
        let i = 0;
        function typeEffect() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeEffect, 80);
            }
        }
        typeEffect();
    }
});