var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 5,
    perMove: 1,
  } );
  
  splide.mount();

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


  function updateTime(){
    let dayBox = document.getElementById("day");
    let hoursBox = document.getElementById("hours");
    let minutesBox = document.getElementById("minutes");
    let secondsBox = document.getElementById("seconds");

    var dateTime = new Date();
    var day = dateTime.getDate();
		var hours = dateTime.getHours();
		var minutes = dateTime.getMinutes();
		var seconds = dateTime.getSeconds();

    dayBox.innerText = day;
    hoursBox.innerText=hours;
    minutesBox.innerText=minutes;
    secondsBox.innerText=seconds;
  }
    setInterval( updateTime, 1000);

  