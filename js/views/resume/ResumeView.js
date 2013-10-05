define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/resume/ResumeModel',
  'collections/resumes/ResumesCollection',
  'text!templates/resume/resume-summary.hbs'
], function($, _, Backbone, Handlebars, ResumeModel, ResumesCollection, resumeTemplate){

  var ResumeView = Backbone.View.extend({
    el: $("#page"),
    initialize : function() {
        this.model = new ResumeModel();
        this.model.on('change', this.render, this);
        this.model.fetch();
    },
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');

      var template = Handlebars.compile(resumeTemplate);
      this.$el.html(template(this.model.toJSON()));
        console.log('model: ' + this.model);
    }
  });

  return ResumeView;
});
