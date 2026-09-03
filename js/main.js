document.getElementById('year').textContent = new Date().getFullYear();

const heroScene = document.querySelector('.hero-scene');
if (heroScene && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if (typeof heroScene.pauseAnimations === 'function') heroScene.pauseAnimations();
}

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const devisForm = document.getElementById('devisForm');
const formStatus = document.getElementById('formStatus');

if (devisForm) {
  devisForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const honeypot = devisForm.querySelector('#website');
    if (honeypot && honeypot.value) return; // bot filled the trap field, silently drop
    // Placeholder submission: no backend is wired up yet.
    // Replace with a real endpoint (Formspree, Netlify Forms, etc.) before running ads.
    formStatus.textContent = 'Merci ! Votre demande est enregistrée, nous revenons vers vous sous 24h ouvrées.';
    devisForm.reset();
  });
}
