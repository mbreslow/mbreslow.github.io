// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/resume/ResumeView'
], function($, _, Backbone, HomeView, ResumeView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'resume': 'showResume',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:defaultAction', function (actions) {
     
//        var homeView = new HomeView();
//        homeView.render();
        // for now lets show resume since I haven't decided what to put on home view yet
        var resumeView = new ResumeView();
        resumeView.render();
    });

    app_router.on('route:showResume', function(actions) {
       var resumeView = new ResumeView();
       resumeView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
