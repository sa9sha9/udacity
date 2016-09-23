$(function(){
  /* model */
  var data = {
    lastID: 0,
    pizzas: []
  };
  
  /* controler */
  var octopus = {
    addPizza: function() {
      var thisID = ++data.lastID; //data.lastID++は？
      
      data.pizzas.push({
        id: thisID,
        visible: true
      });
      view.render();
    },
    removePizza: function(pizza) {
      console.log(pizza.id); //@@
      var clickedPizza = data.pizzas[ pizza.id - 1 ]; //0-origin
      clickedPizza.visible = false;
      view.render();
    },
    getVisiblePizzas: function() {
      //data.pizzas[]でvisible:trueを持つpizzaのみを格納する配列
      var visiblePizzas = data.pizzas.filter(function(pizza) {
        return pizza.visible;
      });
      return visiblePizzas;
    },
    init: function() {
      view.init();
    }
  };
  
  /* view */
  var view = {
    init: function() {
      var addPizzaBtn = $('.add-pizza');
      addPizzaBtn.click(function() {
        octopus.addPizza();
      });
      //grab elements and html for using in the render function
      this.$pizzaList = $('.pizza-list');
      this.pizzaTemplate = $('script[data-template="pizza"]').html();
      
      //delegate event to listen for removal clicks
      this.$pizzaList.on('click', '.remove-pizza', function(e) {
        var pizza = $(this).parents('.pizza').data(); //一旦parentに戻らないとどのpizzaをremoveすればいいのか断定できない
        octopus.removePizza(pizza);
        return false;
      });
      
      this.render();
    },
    render: function() {
      //Cache vars for use in forEach() callback
      var $pizzaList = this.$pizzaList, //this = window
          pizzaTemplate = this.pizzaTemplate;
      
      //clear and render
      $pizzaList.html('');
      octopus.getVisiblePizzas().forEach(function(pizza){
        //replace template markers with data
        var thisTemplate = pizzaTemplate.replace(/{{id}}/g, pizza.id);
        $pizzaList.append(thisTemplate);
      });
    }
  };
  octopus.init();
})();
