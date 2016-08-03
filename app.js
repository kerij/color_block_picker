$(document).ready(function() {

//make colored divs and append to DOM
  $("#container").append('<div id="red" class="colors"></div>');
  $("#container").append('<div id="yellow" class="colors"></div>');
  $("#container").append('<div id="green" class="colors"></div>');
  $("#container").append('<div id="blue" class="colors"></div>');

//pick a random number to choose color
  var choice;

  function randomNumber(min, max) {
      return Math.floor(Math.random() * (1 + max - min) + min);
  }
  choice = randomNumber(1, 4);
  console.log(choice);


//show user which color to pick
  switch(choice) {
    case 1:
      $("#choice").append("red");
    break;
    case 2:
      $("#choice").append("yellow");
    break;
    case 3:
      $("#choice").append("green");
    break;
    case 4:
      $("#choice").append("blue");
    break;
  }

  //did they pick the right div?
  $("#red").on("click", function() {
    if (choice == 1 && (this).id == "red") {
      var again = confirm ("You win! Do you want to play again?");
        if (again == true) {
          location.reload();
        } else {
          window.location.href = "http://globalthermonuclearwar.net/";
        }
    } else {
      alert ("Try again.");
    }
  });
  $("#yellow").on("click", function() {
    if (choice == 2 && (this).id == "yellow") {
      var again = confirm ("You win! Do you want to play again?");
        if (again == true) {
          location.reload();
        } else {
          window.location.href = "http://globalthermonuclearwar.net/";
        }
    } else {
      alert ("Try again.");
    }
  });
  $("#green").on("click", function() {
    if (choice == 3 && (this).id == "green") {
      var again = confirm ("You win! Do you want to play again?");
        if (again == true) {
          location.reload();
        } else {
          window.location.href = "http://globalthermonuclearwar.net/";
        }
    } else {
      alert ("Try again.");
    }
  });
  $("#blue").on("click", function() {
    if (choice == 4 && (this).id == "blue") {
      var again = confirm ("You win! Do you want to play again?");
        if (again == true) {
          location.reload();
        } else {
          window.location.href = "http://globalthermonuclearwar.net/";
        }
    } else {
      alert ("Try again.");
    }

//trying with a for loop instead - not working
  // var color = ["red", "yellow", "green", "blue"]
  // $("div").on("click", ".colors", function() {
  // for (var i = 1; i < 5; i++) {
  //  if (choice = i && (this).id == color[i]);
  //   var again = confirm ("You win! Do you want to play again?");
  //    if (again == true) {
  //      location.reload();
  //    } else {
  //      window.location.href = "http://globalthermonuclearwar.net/";
  //    }
  //  } else {
  //  alert ("Try again.");
  // });
  });
});
