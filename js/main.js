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

    const submitBtn = devisForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = 'Envoi en cours...';

    const ajaxAction = devisForm.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

    fetch(ajaxAction, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(devisForm)
    })
      .then((response) => {
        if (!response.ok) throw new Error('request failed');
        formStatus.textContent = 'Merci ! Votre demande est enregistrée, nous revenons vers vous sous 24h ouvrées.';
        devisForm.reset();
      })
      .catch(() => {
        formStatus.innerHTML =
          "Une erreur est survenue à l'envoi. Réessayez, ou écrivez-nous directement à " +
          '<a href="mailto:johan.simonneau.pro@gmail.com">johan.simonneau.pro@gmail.com</a>.';
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });
}
