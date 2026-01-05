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

// attach click to the visible search button
document.getElementById('search-btn').addEventListener('click', () => {
  // inject the same modal we deleted earlier
  const pages = [
    {title:'Home',url:'index.html'},
    {title:'About',url:'about.html'},
    {title:'Products',url:'products.html'},
    {title:'Philosophy',url:'philosophy.html'},
    {title:'Contact',url:'contact.html'}
  ];
  let modal, input, list;
  function open(){
    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML=`
    <div style="position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:999;display:flex;align-items:center;justify-content:center;">
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);width:90%;max-width:500px;padding:1rem;">
        <button style="position:absolute;top:.5rem;right:.5rem;background:#ff0040;border:none;color:#fff;font-size:1.4rem;cursor:pointer;padding:0 .4rem;border-radius:4px;" onclick="modal.remove()">×</button>
        <input id="search-input" type="text" placeholder="Search pages…" style="width:100%;padding:.5rem;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);">
        <ul id="search-results" style="margin-top:1rem;list-style:none;padding:0;"></ul>
      </div>
    </div>`;
    document.body.appendChild(modal);
    input = modal.querySelector('#search-input');
    list  = modal.querySelector('#search-results');
    input.focus();
    input.addEventListener('input',e=>{
      const hits=pages.filter(p=>p.title.toLowerCase().includes(e.target.value.toLowerCase()));
      list.innerHTML=hits.map(p=>`<li><a style="color:var(--accent);text-decoration:none;" href="${p.url}">${p.title}</a></li>`).join('');
    });
    modal.addEventListener('click',e=>{if(e.target===modal)modal.remove();});
  }
  open();
});
