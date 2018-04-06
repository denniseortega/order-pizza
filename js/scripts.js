//business logic

//constructor

function Pizza () {
  this.pizzaToppings = [];
  this.pizzaSize = [];
}

//protoype

Pizza.prototype.pizzaPrice = function(){
  var price = 0;
  if (this.pizzaToppings === "cheese") {
    return price += 2;
  } else {
    return price += 5;
  }
}


//interface logic

$(document).ready (function() {
  $(".orderPizza").submit(function(event) {
    event.preventDefault ();

  var inputTopping = $("#chooseToppings").val();
  var Results = new Pizza (inputTopping);

  $(".pizza-price").show();
  $(".showPrice").text(Results.pizzaPrice());
  })
});
