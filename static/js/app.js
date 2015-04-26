(function($){
   var Task = Backbone.Model.extend({});
   task = new Task({title: 'RandomTask'});

   var TaskView = Backbone.View.extend({
      el: $('#taskspace'),
      initialize: function(){
         _.bindAll(this, 'render');
         this.render();
      },
      render: function(){
         $(this.el).html('<li>' + this.model.get('title') + '</li>');
      }
   });

   var taskView = new TaskView({model: task});
})(jQuery);
