(function($){
   var Task = Backbone.Model.extend({
      defaults: function() {
         return {
            name: 'RandomTask',
            description: 'RandomTask',
            weeklyfreq: 1
         }
      },
      urlRoot: function() {
         return '/api/v1/task/';
      }
   });
   
   var TaskView = Backbone.View.extend({
      el: $('#taskspace'),
      template: _.template('<div class="col-md-4 col-sm-6">\n' + 
                      '<div class="well well-sm">\n' + 
                      '<h3><%= name %></h3>\n' +
                      '<p><%= description %></p>\n' +
                      '<button class="btn btn-success">Done</button>\n' +
                      '<button class="btn btn-warning">Reset</button>\n' +
                      '<button class="btn btn-danger">Delete Task</button>\n' +
                      '<div class="progress">\n' +
                      '<div class="progress-bar progress-bar-success ' + 
                      'progress-bar-striped active" role="progressbar">\n' +
                      '0%</div></div></div></div></div>\n'),
      render: function(){
         this.$el.html(this.template(this.model.toJSON()));
         return this;
      }
   });
   
   var TaskList = Backbone.Collection.extend({
      model: Task,
      url: '/api/v1/task/'
   });

   var TaskListView = Backbone.View.extend({
      initialize: function(){
         this.collection.on('add', this.addOne, this);
         this.collection.on('reset', this.addAll, this);
      },
      addOne: function(task){
         var taskview = new TaskView({model: Task});
         this.$el.append(taskview.render().el);
      },
      addAll: function(){
         this.collection.forEach(this.addOne, this);
      },
      render: function(){
         this.addAll();
      }
   });

   var tasklist = new TaskList();
   tasklist.fetch();
   var tasklistview = new TaskListView({collection: tasklist});
   tasklistview.render();
})(jQuery);
