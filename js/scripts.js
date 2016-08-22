function ToDo (task, task2, task3, list) {
  this.list = list;
  this.task = task;
  this.task2 = task2;
  this.task3 = task3;

  }
  ToDo.prototype.allTasks = function () {
  return this.list;

}
  $(document).ready(function() {
    $('form#toDo').submit(function(event) {
      $('p').on('click', function () {
        $(this).remove();
      });
      event.preventDefault();

      var inputtedList = $('input#toDo1').val();
      var inputtedTasks = $('input#tasks').val();
      var inputtedTasks2 = $('input#tasks2').val();
      var inputtedTasks3 = $('input#tasks3').val();

      var newList = new ToDo(inputtedTasks, inputtedTasks2, inputtedTasks3, inputtedList);

      $('ul#list').append("<li><span class = 'lists'>" + newList.allTasks() + "</span></li>");

      $('.lists').last().click(function(){
      $('#show-list').show();
      $('#show-list h2').text(newList.list);
      $('.work').text(newList.task);
      $('.work2').text(newList.task2);
      $('.work3').text(newList.task3);






        $('input#toDo1').val("");
        $('input#tasks').val("");



      });
    });
  });
