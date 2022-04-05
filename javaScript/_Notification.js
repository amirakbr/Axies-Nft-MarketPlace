
const close = document.querySelector('.close') ; 

close.addEventListener('click' , function(){
    document.querySelector('.notification__register').classList.add('hidden') ; 
    document.querySelector('.notification__light--theme').style.top = "10rem"
})
document.querySelector('.close1').addEventListener('click' , function(){
    document.querySelector('.notification__light--theme').classList.add('hidden') ; 
}) ;




const user = document.querySelector('.header__register--user1') ; 
const userEntryy = document.querySelector('.register__content') ; 
user.addEventListener('mouseover' , function(){
     userEntryy.style.transform = "scaleY(1)" ; 
})
user.addEventListener('mouseout' , function(){
    userEntryy.style.transform = "scaleY(0)" ; 
})
