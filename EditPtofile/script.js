var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiperr", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-paginationI",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  window.addEventListener('scrollY' , function(t){
      console.log(t);
  }) ; 
  const bodyStyle = document.querySelector("body").style ; 
  const personalInput = document.querySelectorAll(".personal__input") ; 
  const socialMediaInput = document.querySelectorAll(".social--media__input") ; 
  const input = document.querySelectorAll("form") ; 
  input.forEach((e) => {
      e.addEventListener("submit" , (element) => {
          element.preventDefault() ; 
      }) ; 
  })
  personalInput.forEach(element => {
      element.addEventListener("focus" , (e) => {
          inputFocus(element);
      }) ; 
      element.addEventListener("blur" , (e) => {
          inputBlur(element) ; 
      }) ; 
  });
  socialMediaInput.forEach(element => {
      element.addEventListener("focus" , (e) => {
          inputFocus(element);
      }) ; 
      element.addEventListener("blur" , (e) => {
          inputBlur(element) ; 
      }) ; 
  });
  const bioTextArea = document.querySelector(".biotextarea") ; 
  bioTextArea.onfocus = bioTextAreaActive ; 
  bioTextArea.onblur = bioTextAreaDeActive ;
  const closebtn  = document.querySelector(".closebtn") ; 
  const uploadBtn  = document.querySelectorAll(".upload")
  uploadBtn.forEach((e) => {
      e.addEventListener("click" , (element) => {
          document.querySelector(".draganddrup").style.display = "block" ;
      })
  })
  closebtn.addEventListener("click" , (e) => {
      document.querySelector(".draganddrup").style.display = "none" ;
  })
  function inputFocus(element) {
      element.parentElement.style.border = `0.45rem solid blueviolet` ; 
      element.parentElement.style.padding = `0 0 0 2rem` ; 
      element.parentElement.style.color = `royalblue` ; 
      element.style.color = `royalblue` ; 
      labelSelector(element.id) ; 
  }
  function inputBlur(element) {
      element.parentElement.style.border = `0.35rem solid #4d4d64` ; 
      element.parentElement.style.padding = `0 0 0 0` ; 
      element.parentElement.style.color = `white` ; 
      element.style.color = `white` ; 
      labelDeActiver(element.id) ;    
  }
  function bioTextAreaActive() {
          bioTextArea.style.color = `royalblue` ; 
          bioTextArea.style.border = `0.45rem solid blueviolet` ; 
          labelSelector(bioTextArea.id) ; 
          console.log(bioTextArea.id);
      }
      function bioTextAreaDeActive() {
          bioTextArea.style.color = `white` ; 
          bioTextArea.style.border = `0.35rem solid #4d4d64` ; 
          labelDeActiver(bioTextArea.id) ; 
      }
      function labelSelector(id) {
          document.querySelector(`.${id}label`).classList.add("activelabel") ; 
          let v = document.querySelector(".activelabel").children[0].offsetWidth / 20 ; 
          document.querySelector("body").style.setProperty('--label-p-width', `${v}rem`) ; 
          console.log(id);
      }
      function labelDeActiver(id) {
          document.querySelector(`.${id}label`).classList.remove("activelabel") ; 
      }