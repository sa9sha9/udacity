class Dog
  # コンストラクタ
  constructor: (@name) ->

  # Public メソッド
  action_public: (verb) ->
    console.log "#{verb} #{@name} (public)."

  call_action_private: (verb) ->
    action_private(verb)

  # Private メソッド
  action_private = (verb) ->
    console.log "#{verb} #{@name} (private)."

  @var1: "a" #=> Dog.var1 = "a";
  @var2= "b" #=> Dog.var2 = "b";
  var3: "c" #=> Dog.prototype.var3 = "c";
  var4= "d" #=> var4 = "d"

# Dogを継承したLabradorクラス
class Labrador extends Dog
  action: (verb) ->
    #基底クラスのメンバ呼び出し
    alert "#{verb} #{@name}."

Hana = new Dog "Hana"
Hana.action_public('Running') #=> Running Hana (public).
Hana.action_private('Running') #=> Error no method 'action_private'
Hana.action_action_private('Running') #=> Running (private).

Hana = new Dog "Hana"
console.log Dog.var1 #=> a
console.log Dog.var2 #=> b
console.log Hana.var3 #=> c
console.log Hana.var4 #=> undefined