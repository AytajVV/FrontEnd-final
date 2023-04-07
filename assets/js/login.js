let loginPanel = document.querySelector(".formLog");
let registerPanel = document.querySelector(".formReg");
let register = document.getElementById("register");
let login = document.getElementById("login");

register.addEventListener("click", function(e){
    e.preventDefault();
    loginPanel.style.left="-500px";
    registerPanel.style.left="10px";
    loginPanel.classList.add("d-none");
    registerPanel.classList.remove("d-none");
    document.getElementById("register").classList.add("color");
    document.getElementById("login").classList.remove("color");
    

});

login.addEventListener("click", function(e){
    e.preventDefault();
    loginPanel.style.left="10px";
    registerPanel.style.left="-500px";
    registerPanel.classList.add("d-none");
    loginPanel.classList.remove("d-none");
    
    document.getElementById("login").classList.add("color");
    document.getElementById("register").classList.remove("color");
    // document.getElementById("register").classList.add("color1");
})


