/* 教科書テスト p189*/
function Animal(){} //教科書がここではvar Animal = function(){}
Animal.prototype = {
  walk : function(){
    console.log("わんわん");
  }
};
function SuperAnimal(){} //ここではvar SuperAnimal = function(){}
SuperAnimal.prototype = {
  walk : function() {
    console.log("どたどた");
  }
};
function Dog(){}
(function(){
  Dog.prototype = new Animal();
  var d1 = new Dog();
  d1.walk(); //わんわん。まだDog.protoytpeはAnimalを参照
  Dog.prototype = new SuperAnimal();
  d1.walk(); //どたどた..には変わらず、d1インスタンスが生成された時点のDog.protoytpeに固定される
  var d2 = new Dog();
  d2.walk(); //どたどた。Dog.prototypeがSuperAnimalを参照してからインスタンスを生成している
})();