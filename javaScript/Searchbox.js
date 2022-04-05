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