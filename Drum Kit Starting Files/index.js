// alert("hey admin")
// prompt("hey")
function tryMe() {

   
}
// document.querySelector("h1").innerHTML = "hey".dr
var btnlng = document.getElementsByClassName("drum").length;

for (var i = 0; i < btnlng; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
      this.style.color = "white";
      var buttonContent = this.innerHTML;
      switch (buttonContent) {
        case "w":
          var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
          break;

        case "a":
          var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
          break;
        case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        case "d":
          var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
          break;
        case "j":
          var audio = new Audio('sounds/crash.mp3');
            audio.play();
          break;
        case "k":
          var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
          break;
        case "l":
          var audio = new Audio('sounds/snare.mp3');
            audio.play();
        
        
      }
    })
    
    
    
}

// adding buttonclick event

document.addEventListener("keypress" , function() {
  // alert(event.key);
  var keyPressed = event.key;
  switch (keyPressed) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/snare.mp3');
        audio.play();
    
    
  }

})


