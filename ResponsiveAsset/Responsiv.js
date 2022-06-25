let mediaQueriesArray = [
    window.matchMedia("(max-width : 1240px)") ,
    window.matchMedia("(max-width : 1000px)") ,
    window.matchMedia("(max-width : 430px)") ,
]
window.addEventListener("DOMContentLoaded" , (e) => {
    for (let  i= 0; i < mediaQueriesArray.length; i++) {
        mediaQueriesArray[i].addListener(mediaQueriesFunction) ; 
    }
    mediaQueriesFunction() ;
})
function mediaQueriesFunction() {
    if(mediaQueriesArray[0].matches) {
        document.querySelector("body").setAttribute("id" , "1240px") ; 
    }
    if(mediaQueriesArray[1].matches) {
        document.querySelector("body").setAttribute("id" , "1000px") ; 
    }
    if(mediaQueriesArray[2].matches) {
        document.querySelector("body").setAttribute("id" , "430px") ; 
    }
}
document.querySelector(".hamburger__icon").addEventListener("click" , (e) => {
    document.querySelector(".hamburger__icon").classList.toggle("hamburger__icon--active")
    document.querySelector(".headder__content").classList.toggle("headder__content--active")
}) ; 

















let userTool = document.querySelectorAll(".header__register--user") ; 
        let headerSearch = document.querySelector(".header__search--box") ;
        let SocialBanner = document.querySelector(".ff") ; 
        let headerContainer = document.querySelectorAll(".header__content") ; 
        let closeMenu = document.querySelectorAll(".closeMenu") ; 
        headerContainer.forEach((event) => {
            event.parentElement.classList.remove("activeHeaderContainer") ; 
            event.addEventListener("click" , (e)=> {
                headerContainer.forEach((de) => {
                    de.parentElement.classList.remove("activeHeaderContainer") ; 
                })
                event.parentElement.classList.add("activeHeaderContainer") ; 
                event.parentElement.childNodes[3].classList.remove("deactiveMenu") ;
            }) ; 
        })
        let menuLP = document.querySelectorAll(".menu--p") ; 
        menuLP.forEach((event) => {
            event.addEventListener("click" , (e)=> {
                event.parentElement.classList.add("menu--li__active") ;
                event.parentElement.childNodes[3].classList.remove("deactiveMenu") ;
            })
        })
        SocialBanner.addEventListener("click" , (e)=> {
            document.querySelector(".fixed__social").classList.toggle("fixed__social--active")  ; 
        })
        userTool.forEach((event) => {
            event.addEventListener('click' , (e) => {
                event.classList.remove("header__register--user--active")
            })
        })
        document.addEventListener("click" , (e) => {
            if(!SocialBanner.contains(e.target)) {
                document.querySelector(".fixed__social").classList.remove("fixed__social--active")  ; 
            }
            if(!headerSearch.contains(e.target)){
                headerSearch.classList.remove("active--dark") ;
            }
            userTool.forEach((event) => {
                if(!event.contains(e.target)){
                    event.classList.remove("header__register--user--active")
                }
            })
            headerContainer.forEach((event) => {
                if(!event.contains(e.target)) {
                    event.classList.remove("activeHeaderContainer") ; 
                }
            })
        })
        closeMenu.forEach((event) => {
            event.addEventListener("click" , (e)=> {
                event.parentElement.classList.add("deactiveMenu")
            })
        })
