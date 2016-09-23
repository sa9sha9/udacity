var closureTest = (function(){
  var cnt = 0;
  return function(value){ //無名関数でなくとも良い
    cnt += value;
    console.log(cnt);
  };
})();

closureTest(1); //関数を返されるため、その関数のコンテキストが変わる。
closureTest(1);
closureTest(1);
closureTest(1);
