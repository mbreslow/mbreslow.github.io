define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/home.hbs'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
        var template = Handlebars.compile(homeTemplate);
        this.$el.html(template());
    }

  });

  return HomeView;
  
});
