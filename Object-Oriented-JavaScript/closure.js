/**
  *  Closure Test
  *
  *  Some samples of closure pattern in javascript
  *
  *  クロージャーは実行時コンテキスト(Execution Context)と宣言時スコープ(Lexical Scope)が異なれば、その関数の実行ごとに新たな実行時コンテキストを生成するため、値を保存するようになる。
  *
  *  1) return pattern
  *  2) global variable pattern
  *  3) passing to setTimeout **
  */

//var closureTest = (function(){
//  var cnt = 0;
//  return function(value){ //無名関数でなくとも良い
//    cnt += value;
//    console.log(cnt);
//  };
//})();
//
//closureTest(1); //関数を返されるため、その関数のコンテキストが変わる。
//closureTest(1);
//closureTest(1);
//closureTest(1);
//

var sagas = [];
var closureTest2 = function(){
  var cnt = 0;
  sagas.push(function(value){ //returnでなくても実装できる。実行時のコンテキストが宣言時と異なれば良い。
    cnt += value;
    console.log(cnt);
  });
};

closureTest2();
sagas[0](1);
sagas[0](1);
closureTest2();
sagas[0](1);
sagas[1](1);


//* i don't know i should code it. */
//var closureTest3 = function(value) {
//  var cnt = 0;
//  setTimeout(function(){
//    cnt += value;
//    console.log(cnt);
//  }, 100);
//};
//var a = closureTest3;
//var b = closureTest3;
//a(1);
//a(1);
//b(1);

