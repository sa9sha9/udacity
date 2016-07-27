"use strict";

var $ = jQuery;
var window = this;

document.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});

/** クラス生成
 - 関数宣言でコンストラクタ設置
 - prototypeにメソッド、変数を設定
  */

/* Cat with vannila */

/* Cat with jQuery */
/* Class Cat (正確にはコンストラクタだけどね) */
function NormalCat(){
  this.cnt=0;
  this.height = $('#cat01').height();
  this.width = $('#cat01').width();
  this.initial = function() {
    console.log("initialized!");
  };
  this.change = function() {
    this.cnt++;
    console.log("changed!");
    $('#cat01').height(this.height*(Math.pow(1.1, this.cnt))).width(this.width*(Math.pow(1.1, this.cnt)));
    $('#main').append('<p>'+this.cnt+'</p>');
  };
}

function PrototypeCat(){
  //各変数がvarだと外部から参照できない(スコープ外だからね)
  //thisならインスタンス生成すれば参照できるようになる(普通の関数呼び出しにするとwindowがthisに入っちゃうから危険だけどね)
  var cat_img = $('.cat_img');
  this.cnt= 0;
  this.height= cat_img.height();
  this.width= cat_img.width();
}
/* prototype設定 */
PrototypeCat.prototype.initial= function() {
  console.log("initialized!");
};
PrototypeCat.prototype.change= function($target) {
  console.log("changed!");
  this.cnt++;
  var ratio = Math.pow(1.02, this.cnt);
  /* 一旦parentを参照して、どのcatが発火されたのかを特定 */
  var $targetParent = $target.parent();
  var $targetChild = $targetParent.children('.cat_img');
  console.log('$targetParent:', $targetParent);//@@
  console.log('$targetChild:', $targetChild);//@@
  /* 大きさを指数関数に比例させて増加させる */
  $targetChild.height(this.height*ratio).width(this.width*ratio);
  /* beforeにcntを表示(バッジ) */
  $targetParent.attr('data-cnt', this.cnt);
};

/* 複数の猫ちゃんに対応 */
$(function(){
//  var cat = new Cat();
  var cat = new PrototypeCat();
  $(window).load(function(){
    console.log("enetr initial Cat");
//    cat.initial();
  });
  $('.cat_img').click(function(){
    console.log("enter change Cat");
    /* 新たな猫ちゃんの場合、新たなインスタンスを生成 */
    if($(this).parent().attr('data-cnt') == 0) {
      this.cat = new PrototypeCat();
    }
    this.cat.change($(this));
  });
});