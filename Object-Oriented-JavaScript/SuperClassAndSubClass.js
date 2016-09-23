var Car function(){
  this.loc = loc;
};
Car.prototype.move = function() {
  this.loc++;
};

var Ven = function(loc) {
  new Car(loc); //new brand!
};
//or
Van.prototype = new Car();



