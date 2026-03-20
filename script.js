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