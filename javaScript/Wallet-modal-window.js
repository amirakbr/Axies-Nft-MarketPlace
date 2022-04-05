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