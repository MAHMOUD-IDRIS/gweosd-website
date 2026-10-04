const root = document.documentElement;
const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

function setLanguage(lang){
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
  langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  const isAboutPage = document.body.classList.contains('about-page');
  document.title = isAboutPage
    ? (lang === 'ar' ? 'GWEOSD | التعريف الرسمي الشامل' : 'GWEOSD | Comprehensive Official Profile')
    : (lang === 'ar' ? 'GWEOSD | منظمة سيدات ورائدات الأعمال العالمية للتنمية المستدامة' : 'GWEOSD | Global Women Entrepreneurs Organization for Sustainable Development');
  localStorage.setItem('gweosd-language', lang);
}
if(langToggle) langToggle.addEventListener('click',()=>setLanguage(root.lang === 'ar' ? 'en' : 'ar'));
if(menuToggle && mainNav) menuToggle.addEventListener('click',()=>{
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
if(mainNav) mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mainNav.classList.remove('open');
  if(menuToggle) menuToggle.setAttribute('aria-expanded','false');
}));
const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
const preferred = localStorage.getItem('gweosd-language') || (navigator.language?.startsWith('ar') ? 'ar' : 'en');
setLanguage(preferred);

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
