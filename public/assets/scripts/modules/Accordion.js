export default function Accordion() {
  const accordion = document.getElementsByClassName('mobile-starter-kit__name');
  const accordionExpand = document.getElementsByClassName('mobile-starter-kit__expand')[0];
  const accordionCollapse = document.getElementsByClassName('mobile-starter-kit__collapse')[0];

  for (let i = 0; i < accordion.length; i ++) {
    accordion[i].onclick = function() {
      this.classList.toggle('mobile-starter-kit__name--active');

      let panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }
  }

  if(accordionExpand) {
    accordionExpand.addEventListener('click', function() {
      for(let i = 0; i < accordion.length; i++) {
        accordion[i].classList.add('mobile-starter-kit__name--active');
        accordion[i].nextElementSibling.style.maxHeight = accordion[i].nextElementSibling.scrollHeight + 'px';
      }
    });
  }

  if(accordionCollapse) {
    accordionCollapse.addEventListener('click', function() {
      for(let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('mobile-starter-kit__name--active');
        accordion[i].nextElementSibling.style.maxHeight = null;
      }
    });
  }
}
