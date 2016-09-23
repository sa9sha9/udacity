var Car = function(loc) {
  this.loc = loc;

  /* newメソッドの暗黙の処理 */
  //  this = Object.create(Car.prototype);
  //  return this
};

Car.prototype.move = function() {
  this.loc++;
};

var amy = new Car(10);
amy.move();
console.log(amy.loc);
var ben = new Car(20);
ben.move();
console.log(amy.loc);

