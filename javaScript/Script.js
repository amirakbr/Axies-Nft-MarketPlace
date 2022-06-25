window.addEventListener('load' ,function(){
    const mer = document.querySelector('.mer').complete ;
    const ast = document.querySelector('.ast').complete ;
    const ear = document.querySelector('.ear').complete ;
        console.log("hi");
        document.querySelector('.preload').classList.add('hidden') ; 
})
const WalletModal = document.querySelector('.header__wallet') ; 
const closeWallet = document.querySelector('.modal-close') ; 
const modal = document.querySelector('.modal__wallet') ; 
const modalwallet = document.querySelector('.wallet-modal') ; 
closeWallet.addEventListener('click' , function(){
    modal.classList.add('hidden') ; 
})
WalletModal.addEventListener('click' , function(){
    modal.classList.remove('hidden') ; 
    modal.classList.add('modal') ; 
})
window.addEventListener('keydown' , function(e){
    if(e.key === 'Escape') {
        modal.classList.add('hidden') ; 
    }
})
modalwallet.addEventListener('click' ,function(){
     modal.classList.add('hidden') ; 
})
const searchBox = document.querySelector('.header__search--box') ; 
const searchblock = document.querySelector('.header__search--block') ; 
function active() {
        searchBox.classList.add('active--dark') ; 
        searchBox.classList.remove('de-active--dark') ; 
        searchblock.classList.remove('hidden') ; 
        searchblock.classList.remove('de-active--search--block') ; 
        searchblock.classList.add('active--search--block') ; 
}
function deactive() {
        searchBox.classList.remove('active--dark') ; 
        searchBox.classList.add('de-active--dark') ; 
        searchblock.classList.add('de-active--search--block') ; 
}
searchBox.addEventListener('click' , function(){
    if (searchBox.classList.contains('active--dark')) {
        deactive() ;
    } else {
        active() ; 
    }
})
const poplarimg1 = document.querySelectorAll('.popular__image1') ; 
const poplarimg2 = document.querySelectorAll('.popular__image2') ; 
const poplarimg3 = document.querySelectorAll('.popular__image3') ; 
const poplarimg4 = document.querySelectorAll('.popular__image4') ; 
const poplarimg5 = document.querySelectorAll('.popular__image5') ; 
poplarimg1.forEach(e => {
    e.addEventListener('mouseover' , function(){
        e.style.scale = '1.2' ; 
        e.style.zIndex = '10000'
    })
    e.addEventListener('mouseout' ,function(){
        e.style.scale = '' ; 
        e.style.zIndex = '' ;
    })
});
poplarimg2.forEach(ee => {
    ee.addEventListener('mouseover' , function(){
        ee.style.scale = '1.2' ; 
        ee.style.zIndex = '10000'
    })
    ee.addEventListener('mouseout' ,function(){
        ee.style.scale = '' ; 
        ee.style.zIndex = '' ;
    })
});
poplarimg4.forEach(e => {
    e.addEventListener('mouseover' , function(){
        e.style.scale = '1.3' ; 
        e.style.zIndex = '10000'
    })
    e.addEventListener('mouseout' ,function(){
        e.style.scale = '' ; 
        e.style.zIndex = '' ;
    })
});
poplarimg3.forEach(ee => {
    ee.addEventListener('mouseover' , function(){
        ee.style.scale = '1.3' ; 
        ee.style.zIndex = '10000'
    })
    ee.addEventListener('mouseout' ,function(){
        ee.style.scale = '' ; 
        ee.style.zIndex = '' ;
    })
});
poplarimg5.forEach(ee => {
    ee.addEventListener('mouseover' , function(){
        ee.style.scale = '1.3' ; 
        ee.style.zIndex = '10000'
    })
    ee.addEventListener('mouseout' ,function(){
        ee.style.scale = '' ; 
        ee.style.zIndex = '' ;
    })
});

const day2 = document.querySelectorAll('.count2--day') ; 
const hou2 = document.querySelectorAll('.count2--hour') ; 
const min2 = document.querySelectorAll('.count2--min') ; 
const sec2 = document.querySelectorAll('.count2--sec'); 

const day1 = document.querySelectorAll('.count1--day') ;
const hou1 = document.querySelectorAll('.count1--hour') ;
const min1 = document.querySelectorAll('.count1--min') ;
const sec1 = document.querySelectorAll('.count1--sec') ;


var countDownDate1 = new Date("Mar 18, 2022 15:37:25").getTime();
var countDownDate2  = new Date("Mar 22, 2022 22:00:00").getTime() ; 

var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate1 - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  day1.forEach(itemdayI => {
    itemdayI.innerHTML = days + ' D' + ' :' ;
  });
  hou1.forEach(itemhouI => {
    itemhouI.innerHTML = hours + ' H' + ' :' ;  
  });
  min1.forEach(itemminI => {
    itemminI.innerHTML = minutes + ' M' + ' :' ; 
  })
  sec1.forEach(itemsecI => {
    itemsecI.innerHTML = seconds + ' S' ; 
  })  ;
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var y = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate2 - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  day2.forEach(itemdayII => {
    itemdayII.innerHTML = days + ' D' + ' :' ;
  });
  hou2.forEach(itemhouII => {
    itemhouII.innerHTML = hours + ' H' + ' :' ;  
  });
  min2.forEach(itemminII => {
    itemminII.innerHTML = minutes + ' M' + ' :' ; 
  })
  sec2.forEach(itemsecII => {
    itemsecII.innerHTML = seconds + ' S' ; 
  })



  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


lighttheme.addEventListener('click' , function(){
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
    document.querySelector('body').classList.add('lightbody') ; 
    document.querySelector('body').classList.remove('darkbody') ; 
})
darktheme.addEventListener('click' ,function(){
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
    document.querySelector('body').classList.remove('lightbody') ; 
    document.querySelector('body').classList.add('darkbody') ; 
})