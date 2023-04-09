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