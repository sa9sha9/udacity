/* レキシカルスコープ */
(function(){
  var hoge = "fuga";
  console.log(hoge);
  if(hoge){ //jsではifやforではレキシカルスコープが張られない
    var hoge = "moge";
    console.log(hoge);
  }
  for(var i=0;i<1;i++){
    var hoge = "poge";
    console.log(hoge);
  }
  console.log(hoge);
})();


