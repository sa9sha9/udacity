var Car function(loc){
  this.loc = loc;
};
Car.prototype.move = function() {
  this.loc++;
};

var Ven = function(loc) {
  //implisit//
  //this = Object.created();
  Car.call(this, loc); //super call
};

/** comment
  Van and Car have absolutely different scope each other.
*/

//sample
var product = function(b) {
  return this * b;
};

var double = function() {
  return product(this, 2);
};

double(2);

/**
sampleを実行すると、doubleのthisが
*/
