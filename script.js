(function(){
  // عناصر
  const toggle = document.getElementById('toggleTheme');
  const printBtn = document.getElementById('printBtn');

  // تبديل الثيم (يحفظ في localStorage)
  if(toggle){
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
    });

    // استعادة
    const saved = localStorage.getItem('cv-theme');
    if(saved === 'dark') document.body.classList.add('dark');
    if(saved === 'light') document.body.classList.remove('dark');
  }

  // طباعة
  if(printBtn){
    printBtn.addEventListener('click', () => window.print());
  }

  // فتح الخرائط: يحاول فتح geo: على الأجهزة الداعمة، وإلا يفتح Google Maps في نافذة جديدة
  window.openMaps = function(e, lat, lng){
    if(e) e.preventDefault();
    const geo = `geo:${lat},${lng}`;
    const google = `https://www.google.com/maps?q=${lat},${lng}`;
    // محاولة فتح geo: ثم fallback إلى google maps
    const a = document.createElement('a');
    a.href = geo;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      window.open(google, '_blank', 'noopener');
      a.remove();
    }, 500);
  };

  // حفظ بسيط لبعض الحقول (الاسم والوظيفة) تلقائياً
  const nameEl = document.querySelector('.name');
  const roleEl = document.querySelector('.role');
  if(nameEl && localStorage.getItem('cv-name')) nameEl.textContent = localStorage.getItem('cv-name');
  if(roleEl && localStorage.getItem('cv-role')) roleEl.textContent = localStorage.getItem('cv-role');

  [nameEl, roleEl].forEach(el => {
    if(!el) return;
    el.addEventListener('input', () => {
      if(el.classList.contains('name')) localStorage.setItem('cv-name', el.textContent);
      if(el.classList.contains('role')) localStorage.setItem('cv-role', el.textContent);
    });
  });

})();