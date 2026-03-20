// ── Nav: aggiungi classe quando si scrolla ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Reveal on scroll + animazione skill bars ──
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.classList.add('animate');
        });
      }, i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Language toggle ──
let currentLang = 'it';
const langToggle = document.getElementById('langToggle');
const langLabel  = document.getElementById('langLabel');

function applyLanguage(lang) {
  document.querySelectorAll('[data-it]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) {
      // Use innerHTML to support <strong> tags inside translations
      el.innerHTML = text;
    }
  });
  langLabel.textContent = lang === 'it' ? 'EN' : 'IT';
  document.documentElement.lang = lang;
}

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  applyLanguage(currentLang);
});