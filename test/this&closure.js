/** 関数宣言によるクロージャ
  * newをつけて呼ばれないとthis=windowになってしまいグローバル汚染をする
*/
function Closure(num) {
  this.val = num;
  this.increment = function() {
    this.val++;
    console.log(this.val);
  };
}
/* varとthisによるメンバ宣言時の動作の確認*/
//function Closure(num) {
//  var val = num; //this.memberでないとインスタンス生成時に格納するフィールドではなくなってしまう
//  var increment = function() { //incrementのスコープはこの関数内だけであるため、外から参照できない。あまつさえthisによってメンバ宣言をしていないため、インスタンスが宣言できず、さらに普通の関数呼び出ししたものを変数に代入しても戻り値はundefinedであるため意味がない。
//    val++;
//    console.log(val);
//  };
//  increment(); //関数は宣言した後に呼び出さないとね(当然だけど)
//}

/** 関数宣言によるクロージャ part2
  * newをつけて呼ばれないとthis=windowになってしまいグローバル汚染をする
  * この書き方だと、呼び出し元はこいつを宣言した後に設置する必要がある(当然だけどね)
*/
var Closure2 = function(num) {
  this.val = num;
  this.increment = function() {
    this.val++;
    console.log(this.val);
  };
};

/** メソッド呼び出し */
var Closure3 = {
  val: undefined,
  constractor: function(num){
    this.val = num; //thisは必ずオブジェクト内を指す
  },
  increment: function(){
    this.val++;
    console.log(this.val); //各メンバにはthisでアクセスしましょう
  }
};


/** 'this' Testing */
//え？closureのテストなの？thisのテストなの？
//さあ？どっちもじゃないかな
(function(){
  /** 関数宣言呼び出し*/
  var cl1 = new Closure(1);
  var cl2 = new Closure(1);
  cl1.increment(); //2
  cl2.increment(); //2 独立だね
  /** 関数宣言呼び出し part2*/
  var cl1 = new Closure2(1);
  var cl2 = new Closure2(1);
  cl1.increment(); //2
  cl2.increment(); //2 独立だね
  /** メソッド呼び出し*/
  Closure3.constractor(1);
  Closure3.increment();
  /** apply()呼び出し */
  /** call()呼び出し */
  /** bind()呼び出し */
})();
