const lighttheme = document.querySelectorAll('.header__lightTheme') ; 
const darktheme = document.querySelectorAll('.header__blackTheme') ; 
const header = document.querySelector('.header') ; 
const hero = document.querySelector('.hero') ; 
const swipper = document.querySelector('.swiper') ; 
const main = document.querySelector('.main') ; 
const swiperheader = document.querySelector('.swiper__header') ;  
const feature = document.querySelector('.feature__card--container') ; 
const popular = document.querySelector('.popular') ; 
const topseller = document.querySelector('.top__seller') ;  
const todapick = document.querySelector('.todayPicksZ') ; 
const footer = document.querySelector('.footer') ; 
const menu = document.querySelectorAll('.menu') ; 
const menu1 = document.querySelectorAll('.menu1') ; 
const hamburgerIcon = document.querySelector('.hamburger__container') ; 
lighttheme.forEach(element => {
    element.addEventListener('click' , function(){
        if(header.classList.contains('darkHeader')){
            header.classList.remove('darkHeader') ; 
            header.classList.add('lightHeader') ; 
            main.classList.remove('maindark') ; 
            main.classList.add('mainlight')
            hero.classList.remove('herodark') ; 
            hero.classList.add('herolight')  ;
            swiperheader.classList.remove('swiper__header--dark') ; 
            swiperheader.classList.add('swiper__header--light') ; 
            swipper.classList.remove('swiper__container--dark') ; 
            swipper.classList.add('swiper__container--light') ; 
            feature.classList.remove('feature__dark') ; 
            feature.classList.add('feature__light') ; 
            popular.classList.remove('popular__dark') ; 
            popular.classList.add('popular__light') ; 
            topseller.classList.remove('top__seller--dark') ;
            topseller.classList.add('top__seller--light') ;
            todapick.classList.remove('today__picks--dark') ;
            todapick.classList.add('today__picks--light') ;  
            footer.classList.remove('footer--dark') ; 
            footer.classList.add('footer--light') ; 
            menu.forEach(elem => {
                elem.classList.remove('darkmenu') ;
                elem.classList.add('lightmenu') ;
            });
            menu1.forEach(elemm => {
                elemm.classList.remove('darkmenu') ;
                elemm.classList.add('lightmenu') ;
            });
            }
            hamburgerIcon.classList.add('lightHamburger') ; 
            document.querySelector('body').classList.add('lightbody') ; 
            document.querySelector('body').classList.remove('darkbody') ; 
            
    })
});
darktheme.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(header.classList.contains('lightHeader')){
            header.classList.add('darkHeader') ; 
            header.classList.remove('lightHeader') ; 
            main.classList.add('maindark') ; 
            main.classList.remove('mainlight')
            hero.classList.add('herodark') ; 
            hero.classList.remove('herolight')  ;
            swiperheader.classList.add('swiper__header--dark') ; 
            swiperheader.classList.remove('swiper__header--light') ; 
            swipper.classList.add('swiper__container--dark') ; 
            swipper.classList.remove('swiper__container--light') ; 
            feature.classList.add('feature__dark') ; 
            feature.classList.remove('feature__light') ; 
            popular.classList.add('popular__dark') ; 
            popular.classList.remove('popular__light') ; 
            topseller.classList.add('top__seller--dark') ;
            topseller.classList.remove('top__seller--light') ;
            todapick.classList.add('today__picks--dark') ;
            todapick.classList.remove('today__picks--light') ;  
            footer.classList.add('footer--dark') ; 
            footer.classList.remove('footer--light') ;
            menu.forEach(elem => {
                elem.classList.add('darkmenu') ;
                elem.classList.remove('lightmenu') ;
            });
            menu1.forEach(elemm => {
                elemm.classList.add('darkmenu') ;
                elemm.classList.remove('lightmenu') ;
            });
            hamburgerIcon.classList.remove('lightHamburger') ; 
            document.querySelector('body').classList.remove('lightbody') ; 
            document.querySelector('body').classList.add('darkbody') ;       
          }
    })  
})
/*

darktheme.forEach(element => {
    element.addEventListener('click' , function(){
        
    })
});
*/

/*
    else {
     
    }
*/