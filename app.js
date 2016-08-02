$(document).ready(function() {

//make colored divs and append to DOM
  $("#container").append('<div id="red"></div>');
  $("#container").append('<div id="yellow"></div>');
  $("#container").append('<div id="green"></div>');
  $("#container").append('<div id="blue"></div>');

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
      $("#choice").append("blue")
    break;
  }

  //did they pick the right div?
  $("#red").on("click", function() {
    console.log(choice);
    console.log((this).id)
    if (choice == 1 && (this).id == "red") {
      alert ("You win!");
    } else {
      alert ("Try again.")
    }
  });
  $("#yellow").on("click", function() {
    console.log(choice);
    console.log((this).id)
    if (choice == 2 && (this).id == "yellow") {
      alert ("You win!");
    } else {
      alert ("Try again.")
    }
  });
  $("#green").on("click", function() {
    console.log(choice);
    console.log((this).id)
    if (choice == 3 && (this).id == "green") {
      alert ("You win!");
    } else {
      alert ("Try again.")
    }
  });
  $("#blue").on("click", function() {
    console.log(choice);
    console.log((this).id)
    if (choice == 4 && (this).id == "blue") {
      alert ("You win!");
    } else {
      alert ("Try again.");
    }
  });
  });
