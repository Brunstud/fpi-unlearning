(() => {
  const dialog = document.querySelector('.lightbox');
  const image = dialog?.querySelector('.lightbox-image');
  const caption = dialog?.querySelector('.lightbox-caption');
  const pdfLink = dialog?.querySelector('.lightbox-pdf');
  let opener = null;

  if (dialog && image && caption && pdfLink && typeof dialog.showModal === 'function') {
    document.querySelectorAll('.figure-open').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        opener = link;
        image.src = link.dataset.image;
        image.alt = link.querySelector('img')?.alt || '';
        caption.textContent = link.dataset.caption || '';
        pdfLink.href = link.href;
        dialog.dataset.kind = link.dataset.kind || 'standard';
        dialog.showModal();
      });
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener('close', () => {
      image.removeAttribute('src');
      opener?.focus();
    });
  }

  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      link.closest('details')?.removeAttribute('open');
    });
  });
})();
