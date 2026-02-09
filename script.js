const preview = document.querySelector('.hover-preview');
const img = preview.querySelector('img');
const text = preview.querySelector('.preview-text');
const links = document.querySelectorAll('.works-sidebar a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    img.src = link.dataset.image;
    text.textContent = link.dataset.text;
    preview.classList.add('visible');
  });

  link.addEventListener('mouseleave', () => {
    preview.classList.remove('visible');
  });
});
