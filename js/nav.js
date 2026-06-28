document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');

  window.setTimeout(() => {
    document.body.classList.add('page-ready');
  }, 300);

  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');

      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
        return;
      }

      event.preventDefault();
      document.body.classList.add('page-leaving');

      window.setTimeout(() => {
        window.location.href = href;
      }, 260);
    });
  });
});

