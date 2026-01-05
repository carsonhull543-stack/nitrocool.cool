// Clean search btn + modal
searchBtn.style.cssText = 'background:none;border:1px solid var(--border);color:var(--text);padding:.4rem .8rem;border-radius:var(--radius);font-size:.875rem;cursor:pointer;';
searchBtn.title = 'Search';
document.querySelector('nav').appendChild(searchBtn);

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
  modal.innerHTML=`
  <div style="position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:999;display:flex;align-items:center;justify-content:center;">
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);width:90%;max-width:500px;padding:1rem;">
      <input id="search-input" type="text" placeholder="Search pages…" style="width:100%;padding:.5rem;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);">
      <ul id="search-results" style="margin-top:1rem;list-style:none;padding:0;"></ul>
    </div>
  </div>`;
  document.body.appendChild(modal);
  input = modal.querySelector('#search-input');
  list  = modal.querySelector('#search-results');
  input.focus();
  input.addEventListener('input',e=>render(e.target.value));
  modal.addEventListener('click',e=>{if(e.target===modal)closeSearch();});
}
function closeSearch(){modal.remove();modal=null;}
function render(q){
  const hits=pages.filter(p=>p.title.toLowerCase().includes(q.toLowerCase()));
  list.innerHTML=hits.map(p=>`<li><a style="color:var(--accent);text-decoration:none;" href="${p.url}">${p.title}</a></li>`).join('');
}
searchBtn.addEventListener('click',openSearch);
window.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}
});
