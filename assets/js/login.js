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


let allCategories = document.querySelector(".allCategories");
  let miniCat = document.querySelector(".miniCategory");

  allCategories.addEventListener("click", function(){
    if (miniCat.style.display == 'none') {
      miniCat.style.display='block'
    
    }
    else{
      miniCat.style.display='none'
    }
  
  })


  let inputUsernameLog = document.querySelector(".emailLog");
  let inputPassLog = document.querySelector(".passLog");
  let warning = document.querySelector(".warning");
  let logBtn = document.querySelector(".logBtn");
  let warningSpan = document.querySelector(".warningSpan");

  logBtn.addEventListener("click", function(){
    if (inputUsernameLog.value == "" || inputUsernameLog.value==null ) {
        warning.classList.remove("d-none")
        return
    }
    else{
        warning.classList.add("d-none")
    }
    if (inputPassLog.value=="" || inputPassLog.value==null) {
        warning.classList.remove("d-none");
        warningSpan.innerText="Error: The password field is empty."
    }
    else{
        warning.classList.add("d-none");
    }

  })

  let inputUserReg = document.querySelector(".inputUserReg");
  let inputPassReg = document.querySelector(".inputPassReg");
  let RegBtn = document.querySelector(".RegBtn");
  let warningReg = document.querySelector(".warningReg");
  let warningSpanReg = document.querySelector(".warningSpanReg");

  RegBtn.addEventListener("click", function(){
    if (inputUserReg.value == "" || inputUserReg.value==null) {
        warningReg.classList.remove("d-none")
        return
    }
    else{
        warningReg.classList.add("d-none");
    }
    if (inputPassReg.value=="" || inputPassReg==null) {
        warningReg.classList.remove("d-none");
        warningSpanReg.innerText="Please enter an account password."
    }
    else{
        warningReg.classList.add("d-none");
    }
  })
