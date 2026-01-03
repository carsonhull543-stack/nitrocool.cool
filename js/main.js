// tiny scroll-reveal & nav highlight
const io=new IntersectionObserver(e=>{e.forEach(i=>i.target.classList.toggle('show',i.isIntersecting))});
document.querySelectorAll('section').forEach(s=>io.observe(s));
