//business logic

//constructor

function Pizza () {
  this.pizzaToppings = [];
  this.pizzaSize = [];
};

//prototype

Pizza.prototype.pizzaPrice = function() {
  var price = 0;
  if (this.pizzaToppings === "cheese" && this.pizzaSize === "small") {
    price += 2;
  } else {
    price += 5;
  }

  if (this.pizzaSize === "small") {
    price += 4;
  } else {
    price += 10;
  }
  return price;
};


//interface logic

$(document).ready (function() {
  $(".orderPizza").submit(function(event) {
    event.preventDefault ();
   $(".pizza-price").show();

  var inputTopping = $("#chooseToppings").val();
  var inputSize = $("#chooseSize").val();
  var Results = new Pizza (inputTopping, inputSize);


  $(".showPrice").text(Results.pizzaPrice());
  });
});
