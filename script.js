
const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const welcome=document.querySelector('.welcome');
if(welcome){
  if(localStorage.getItem('zenithWelcomeSeen')) welcome.classList.add('hide');
  const close=()=>{localStorage.setItem('zenithWelcomeSeen','1');welcome.classList.add('hide');};
  document.querySelector('[data-enter]')?.addEventListener('click',close);
  document.querySelector('[data-skip]')?.addEventListener('click',close);
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=form.querySelector('[name="name"]')?.value||'there';
    const msg=form.querySelector('.form-message');
    if(msg){msg.hidden=false;msg.textContent=`Thank you, ${name}. Your message has been captured in this demo. Connect the form to Zenith's official email/backend before publishing.`;}
    form.reset();
  });
});
