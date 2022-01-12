

$(".close").click(function(){
   let Bgnav =$(".nav").outerWidth();
     $(".nav").animate({"left":-Bgnav},1000)
     $(".open").animate({"left":10},1000)
     console.log(Bgnav)

})

$(".open").click(function(){

    $(".nav").animate({"left":0},1000)
    $(".open").animate({"left":260},1000)
   
})

$("#singer h5").click(function(e){
 $(e.target).next().slideToggle(500)
 $("#singer p").not($(e.target).next()).slideUp(500)

})



// let date = new Date();
// console.log(date.getDate()); //1-31
// console.log(date.getDay()); //0-6
// console.log(date.getFullYear()); //current year
// console.log(date.getHours()); //0-23
// console.log(date.getMinutes()); //0-59
// console.log(date.getSeconds()); //0-59


// settimeout,setinterval 
//=> scheduling for function calling
  







      // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = "-"+ days + "D" ;
  document.getElementById("hours").innerHTML= "0-"+hours + "h ";
  document.getElementById("mun").innerHTML = "0-"+ minutes + "m " ;
  document.getElementById("scound").innerHTML = "0-"+ seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

