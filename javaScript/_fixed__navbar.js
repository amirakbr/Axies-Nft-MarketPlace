let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.nav').classList.add('fix__top') ; 
    document.querySelector('.hero').style.marginTop = '9vh' ; 
  }
  else if (currentScrollPos > 20){
    document.querySelector(".nav").classList.remove('fix__top') ;   
    document.querySelector('.hero').style.marginTop = '' ; 
  }
  else{
    document.querySelector(".nav").classList.remove('fix__top') ; 
  }
  prevScrollpos = currentScrollPos;
} 