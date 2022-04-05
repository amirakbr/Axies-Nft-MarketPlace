const emailInput = document.querySelector('.register__email--input') ; 
const passwordInput  = document.querySelector('.register__password--input') ; 
const emailTitle = document.querySelector('.register__email--title') ; 
const passwordTitel  = document.querySelector('.register__password--title') ; 
const submmitkey = document.querySelector('.submit__register--form') ; 
const passvisibility = document.querySelector('.passwordVisibility') ; 

emailInput.addEventListener('click' ,function(){
    emailTitle.style.transform = "translateY(-1.5rem) translateX(1rem)"
    if (passwordInput.value === "") {
        passwordTitel.style.transform ="" ;
    }
})
passwordInput.addEventListener('click' ,function(){
    passwordTitel.style.transform = "translateY(-1.5rem) translateX(1rem)"
    if (emailInput.value === "") {
        emailTitle.style.transform = "" ; 
    }
})
document.querySelector('.modal').addEventListener('click' , function(){
    if (emailInput.value === "") {
        emailTitle.style.transform = "" ; 
    }
    if (passwordInput.value === ""){
        passwordTitel.style.transform = "" ;
    }
})
let inputvalue ; 
function checkFill(params) {
    inputvalue = emailInput.value.toLowerCase() ; 
    if(!(inputvalue === "") && inputvalue.includes("@gmail") || inputvalue.includes("@yahoo") || inputvalue.includes("@mail") || inputvalue.includes("@hotmail")) {
        document.querySelector('body').style.setProperty(`--disply` , `flex`)
    }else{
        document.querySelector('body').style.setProperty(`--disply` , `none`)
        emailTitle.style.transform = "" ; 
    }
    if(!(passwordInput.value === "")){
        document.querySelector('body').style.setProperty(`--disply1` , `flex`)
    }else{
        document.querySelector('body').style.setProperty(`--disply1` , `none`)
        passwordTitel.style.transform = "" ; 
    }
}
setInterval(checkFill , 3000);


submmitkey.addEventListener('click' , function(){
    if(!(passwordInput.value === "")){
        const passvalue = passwordInput.value ;
        console.log(passvalue);
        alert(`This Password : "${passvalue}" is Already Taken by User : Amir.....a`)
    }
})
passvisibility.addEventListener('click' , function(){
    if(!(passwordInput.value === "") && passvisibility.classList.contains('unvisible')){
        let passvalu = passwordInput.value ;
        passwordInput.type = "text" ; 
        passwordInput.value = passvalu ;
        passvisibility.classList.remove('unvisible')
        passvisibility.classList.add('visible')
    }
    else if(!(passwordInput.value === "" ) && passvisibility.classList.contains('visible')){
        let passvalu = passwordInput.value ;
        passwordInput.type = "password" ; 
        passwordInput.value = passvalu ;
        passvisibility.classList.add('unvisible')
        passvisibility.classList.remove('visible')
    } 
})