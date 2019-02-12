const home = document.querySelector('.home');

if(home){
  const card = document.querySelectorAll('.card');

  for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', function(){
      if(card[i].classList.contains('active')){
        this.classList.remove('active');
      } else {
        this.classList.add('active');
      }
    });
  }
}
