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

const pages = [
  {title:'Home',url:'index.html'},
  {title:'About',url:'about.html'},
  {title:'Products',url:'products.html'},
  {title:'Philosophy',url:'philosophy.html'},
  {title:'Contact',url:'contact.html'}
];
let modal, input, list;
function openSearch(){
  if(modal) return;
  modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:999;display:flex;align-items:center;justify-content:center;';
  const card = document.createElement('div');
  card.style.cssText = 'background:var(--card);border:1px solid var(--border);border-radius:var(--radius);width:90%;max-width:500px;padding:1rem;position:relative;';
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = 'position:absolute;top:.5rem;right:.5rem;background:#ff0040;border:none;color:#fff;font-size:1.4rem;cursor:pointer;padding:0 .4rem;border-radius:4px;';
  closeBtn.onclick = () => modal.remove();
  const inp = document.createElement('input');
  inp.id = 'search-input';
  inp.type = 'text';
  inp.placeholder = 'Search pages…';
  inp.style.cssText = 'width:100%;padding:.5rem;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);';
  const ul = document.createElement('ul');
  ul.id = 'search-results';
  ul.style.cssText = 'margin-top:1rem;list-style:none;padding:0;';
  card.append(closeBtn, inp, ul);
  modal.appendChild(card);
  document.body.appendChild(modal);
  input = inp;
  list  = ul;
  input.focus();
  input.addEventListener('input',e=>{
    const hits=pages.filter(p=>p.title.toLowerCase().includes(e.target.value.toLowerCase()));
    list.innerHTML=hits.map(p=>`<li><a style="color:var(--accent);text-decoration:none;" href="${p.url}">${p.title}</a></li>`).join('');
  });
  closeBtn.onclick = () => modal.remove();
}
document.getElementById('search-btn').addEventListener('click',openSearch);
window.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}});
