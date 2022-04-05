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

