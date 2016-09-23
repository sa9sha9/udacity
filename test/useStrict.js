function other() {
  "use strict";

  //いずれにせよレキシカルスコープは張られない -> ES6にて実装
  for(var i=0;i<1;i++){
    var scope = 'aaa';
    console.log(scope);
  }
  console.log(scope);

//  var arguments = 'hoge'; //error
//  var eval = 'fuga';      //error
//  var private = 'fizz';   //error
//  globalVariable = 'hoge'; //error
}


function nonStrict() {
  console.log(typeof this);
}
function Strict(){
  "use strict";
  console.log(typeof this);
}
var arry = [1,2,3];
var bool = true;
var NULL = null;
var str = 'strig';
nonStrict.call(arry); //object
Strict.call(arry);    //object
nonStrict.call(bool); //object
Strict.call(bool);    //boolean
nonStrict.call(NULL); //object
Strict.call(NULL);    //object
nonStrict.call(str);  //object
Strict.call(str);     //string

