(function($){
   var Task = Backbone.Model.extend({});
   var atask = new Task({title: 'RandomTask'});
   
   var TaskView = Backbone.View.extend({
      el: $('#taskspace'),
      initialize: function(){
         _.bindAll(this, 'render');
         this.render();
      },
      render: function(){
         $(this.el).append('<li>' + this.model.get('title') + '</li>');
      }
   });

   var taskView = new TaskView({model: atask});
})(jQuery);
