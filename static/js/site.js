$(document).ready(function(){
   $('.progress-bar').each(function(){
      var val = parseInt($(this).attr('aria-valuenow'));
      var max = parseInt($(this).attr('aria-valuemax'));
      var prog = Math.round((val / max) * 100);
      $(this).css('width', prog + '%');
      $(this).text(prog + '%');
   });

   updateWellColours();

   $('.incbtn').on('click', function(){
      var bar = $(this).parent().find('.progress-bar');
      var val = parseInt(bar.attr('aria-valuenow')) + 1;
      var max = parseInt(bar.attr('aria-valuemax'));
      var prog = Math.round((val / max) * 100)
      if(val <= max){
         bar.attr('aria-valuenow', val);
         bar.css('width', prog + '%');
         bar.text(prog + '%');
         var taskname = $(this).parent().find('h3').text();
         $.ajax("incProgress", { data: { "taskname" : taskname }});
      } else {
         bar.attr('aria-valuenow', max);
         bar.css('width', '100%');
         bar.text('100%');
      }
      updateWellColours();
   });
   $('.resetbtn').on('click', function(){
      var bar = $(this).parent().find('.progress-bar');
      var taskname = $(this).parent().find('h3').text();
      bar.attr('aria-valuenow', 0);
      bar.css('width', '0%');
      bar.text('0%');
      updateWellColours();
      $.ajax("resetProgress", { data: { "taskname" : taskname }});
   });
   $('.deletebtn').on('click', function(){
      var parentdiv = $(this).parent();
      var taskname = parentdiv.find('h3').text();
      $.ajax("deleteTask", { data: { "taskname" : taskname }});
      parentdiv.fadeOut(300, function() { $(this).remove(); });
   });
   $('.addtaskbtn').on('click', function(){
      var taskname = $('#taskname').val();
      var taskdesc = $('#taskdesc').val();
      var taskfreq = $('#taskfreq').val();
      $.ajax("addTask", { 
         data: {
            "taskname" : taskname, 
            "taskdesc" : taskdesc,
            "taskfreq" : taskfreq
         }
      });
   });
});

function updateWellColours(){
   $('.well').each(function(){
      var bar = $(this).find('.progress-bar');
      var val = parseInt(bar.attr('aria-valuenow'));
      var max = parseInt(bar.attr('aria-valuemax'));
      var prog = Math.round((val / max) * 100);
      if(prog < 33){
         $(this).css('background-color', '#ff7f7d');
      } else if(prog < 67){
         $(this).css('background-color', '#ffd06b');
      } else {
         $(this).css('background-color', '#a6ffb4');
      }
   });
}
