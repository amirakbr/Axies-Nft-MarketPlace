const day2 = document.querySelectorAll('.count2--day') ; 
const hou2 = document.querySelectorAll('.count2--hour') ; 
const min2 = document.querySelectorAll('.count2--min') ; 
const sec2 = document.querySelectorAll('.count2--sec'); 

const day1 = document.querySelectorAll('.count1--day') ;
const hou1 = document.querySelectorAll('.count1--hour') ;
const min1 = document.querySelectorAll('.count1--min') ;
const sec1 = document.querySelectorAll('.count1--sec') ;


var countDownDate1 = new Date("Dec 18, 2022 15:37:25").getTime();
var countDownDate2  = new Date("Dec 22, 2022 22:00:00").getTime() ; 

var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate1 - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  day1.forEach(itemdayI => {
    itemdayI.innerHTML = days + ' :' ;
  });
  hou1.forEach(itemhouI => {
    itemhouI.innerHTML = hours + ' :' ;  
  });
  min1.forEach(itemminI => {
    itemminI.innerHTML = minutes  + ' :' ; 
  })
  sec1.forEach(itemsecI => {
    itemsecI.innerHTML = seconds  ; 
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
    itemdayII.innerHTML = days + ' :' ;
  });
  hou2.forEach(itemhouII => {
    itemhouII.innerHTML = hours + ' :' ;  
  });
  min2.forEach(itemminII => {
    itemminII.innerHTML = minutes  + ' :' ; 
  })
  sec2.forEach(itemsecII => {
    itemsecII.innerHTML = seconds; 
  })



  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
