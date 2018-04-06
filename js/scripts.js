//business logic

//constructor

function Pizza () {
  this.pizzaToppings = [];
  this.pizzaSize = [];
};

//prototype

Pizza.prototype.pizzaPrice = function() {
  var price = 10;
  if (this.pizzaToppings === "cheese") {
    price += 2;
  } else {
    price += 5;
  }

  if (this.pizzaSize === "small") {
    price += 4;
  } else {
    price += 6;
  }

  return price;
};


//interface logic

$(document).ready (function() {
  $(".orderPizza").submit(function(event) {
    event.preventDefault ();


  var inputTopping = $("#chooseToppings").val();
  var inputSize = $("#chooseSize").val();
  var Results = new Pizza (inputTopping, inputSize);

  $(".pizza-price").show();
  $(".showPrice").text(Results.pizzaPrice());
  });
});
