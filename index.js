const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  // this.serve = function() {
  //   console.log("here's your " + this.name + ", enjoy!");
  // }
}

// function serve() {
//   console.log("here's your " + this.name + ", enjoy!");
// }

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");

// blt.name = 'BLT'
//
// blt.serve();
let gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
let pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");

// serve.call(gc);
// serve.call(gc, "Terry");
// serve.apply(gc, ['Terry'])
deliverFood.call(gc, "Terry", 14);
deliverFood.apply(gc, ['Terry', 14])

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    } else {
        console.log(this.name + ". Order up!");
    }
}
