define([
  'jquery',
  'underscore',
  'backbone',
  'models/resume/ResumeModel'
], function($, _, Backbone, ResumeModel){
  var ResumesCollection = Backbone.Collection.extend({
    model: ResumeModel,
    
    initialize: function(){

      var resume0 = new ResumeModel('Marc Breslow', '/data/resume.json');
      this.add([resume0]);

    }

  });
 
  return ResumesCollection;
});
