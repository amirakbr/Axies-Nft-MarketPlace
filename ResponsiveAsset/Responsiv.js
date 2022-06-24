let mediaQueriesArray = [
    window.matchMedia("(max-width : 1350px)") ,
]
window.addEventListener("DOMContentLoaded" , (e) => {
    for (let  i= 0; i < mediaQueriesArray.length; i++) {
        mediaQueriesArray[i].addListener(mediaQueriesFunction) ; 
    }
    mediaQueriesFunction() ;
})
function mediaQueriesFunction() {
    if(mediaQueriesArray[0].matches) {
        
    }
}
document.querySelector(".hamburger__icon").addEventListener("click" , (e) => {
    document.querySelector(".hamburger__icon").classList.toggle("hamburger__icon--active")
    document.querySelector(".headder__content").classList.toggle("headder__content--active")
})