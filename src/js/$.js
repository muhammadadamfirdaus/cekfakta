// check if element in viewport
let elementInViewport = function(elem) {
  let rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.right >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// get current scroll
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

// firing scroll event
let scrolling = false;
window.addEventListener('scroll', function(){
  scrolling = true;
});

setInterval(function(){
  if(scrolling){
    scrolling = false;

    // check if scroll in viewport
    let home = document.querySelector('.home');
    if(home){
      let section = document.querySelectorAll('section');
      window.addEventListener('scroll', function(){
        for(let i = 0; i < section.length; i++){
          let elementViewport = elementInViewport(section[i]);
          if(elementViewport){
            section[i].classList.add('active');
          } else {
            section[i].classList.remove('active');
          }
        }
      });
    }
  }
}, 250);