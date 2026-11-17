const menuToggle = document.querySelector('.mobile-nav-toggle');
new MutationObserver(() => menuToggle.setAttribute('aria-expanded',String(document.body.classList.contains('mobile-nav-active')))).observe(document.body,{attributes:true,attributeFilter:['class']});
document.addEventListener('keydown', event => {
  if(event.key === 'Escape' && document.body.classList.contains('mobile-nav-active')) {menuToggle.click();menuToggle.focus();}
});
document.querySelectorAll('.isotope-filters li').forEach(filter => {
  filter.addEventListener('keydown', event => {
    if(event.key === 'Enter' || event.key === ' ') {event.preventDefault();filter.click();}
  });
  filter.addEventListener('click', () => document.querySelectorAll('.isotope-filters li').forEach(item => item.setAttribute('aria-pressed',String(item === filter))));
});
