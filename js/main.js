// Dark-mode toggle + smooth scroll
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme or default dark
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
else html.setAttribute('data-theme', 'dark');

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '🌙' : '☀️';
});
