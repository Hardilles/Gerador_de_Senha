let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password")
let charset = "abcdefghiklmnopqrstuvxwzABCDEFGHIKLMNOPQRSTUVXWZ0123456789/*-+.@#$%&!";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
    
}

function generatePassword(){
    alert(`Vamos gerar sua senha, com ${sliderElement.value} caracteres`)
    
    ler pass = "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value;++i){
        pass += charset.charAt(Math.floor(Math.random() * n)); /*Math.random pega um digito aleatório*/
    }
}


