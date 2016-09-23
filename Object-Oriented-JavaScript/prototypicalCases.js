var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

Car.prototype.move = function(){
  this.loc++;
};


var amy = Car(10);
amy.move();
console.log(amy.loc);

var ben = Car(20);
ben.move();
console.log(amy.loc);

