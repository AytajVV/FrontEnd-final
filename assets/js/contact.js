let nameInput = document.querySelector(".name");
let emailInput = document.querySelector(".email");
let subInput = document.querySelector(".sub");
let sendBtn = document.querySelector(".send");
let nameSpan = document.querySelector(".nameSpan");
let emailSpanReq = document.querySelector(".emailSpanReq");
let emailSpanEmail = document.querySelector(".emailSpanEmail");
let subSpan = document.querySelector(".subSpan");


sendBtn.addEventListener("click", function(e){
    e.preventDefault();
    if (nameInput.value == "") {
        nameSpan.classList.remove("d-none");
    }
    else{
        nameSpan.classList.add("d-none");
    }

    if (emailInput.value == "") {
        emailSpanReq.classList.remove("d-none");
    }
    else{
        emailSpanReq.classList.add("d-none");
    }

    if (subInput.value == "") {
        subSpan.classList.remove("d-none");
    }
    else{
        subSpan.classList.add("d-none");
    }

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailInput.value.match(validRegex) || emailInput.value=="") {
            emailSpanEmail.classList.add("d-none");

          return true;
        } 
        else {
            emailSpanEmail.classList.remove("d-none");
            return false;
      
        }
      
    
})

// if (nameInput.value != "") {
//     nameSpan.classList.add("d-none");
// }
// if (emailInput.value != "") {
//     emailSpan.classList.add("d-none");
// }
// if (subInput.value != "") {
//     subSpan.classList.add("d-none");
// }

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