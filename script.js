// Toggle Light/Dark Mode
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode')
    ? 'Dark Mode'
    : 'Light Mode';
});

const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

