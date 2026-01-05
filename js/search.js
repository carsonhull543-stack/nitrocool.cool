// attach click to the visible search button
document.getElementById('search-btn').addEventListener('click', () => {
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
