// Cierra los menús desplegables al hacer clic afuera o con Escape
document.addEventListener('click', (e) => {
  document.querySelectorAll('details.dropdown[open]').forEach((d) => {
    if (!d.contains(e.target)) d.removeAttribute('open');
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('details.dropdown[open]').forEach((d) => {
    d.removeAttribute('open'); d.querySelector('summary').focus();
  });
});
