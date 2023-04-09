let first = document.querySelector(".firstImg");
let second = document.querySelector(".secondImg");
let third = document.querySelector(".thirdImg");
let main = document.getElementById("mainImg");
first.addEventListener("click", function(){
    main.setAttribute("src", "./img/product-image-62-600x540.jpg")
})
second.addEventListener("click", function(){
    main.setAttribute("src", "./img/product-image2-47.jpg")
})
third.addEventListener("click", function(){
    main.setAttribute("src", "./img/product-image3-35-600x540.jpg")
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