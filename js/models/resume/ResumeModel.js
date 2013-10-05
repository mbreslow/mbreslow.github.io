define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var ResumeModel = Backbone.Model.extend({
      url: "data/resume.json",
      initialize : function() {
          console.log("Initialized Model")
      }
  });

  return ResumeModel;

});
