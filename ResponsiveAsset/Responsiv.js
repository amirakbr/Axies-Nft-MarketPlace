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