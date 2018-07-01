'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var preguntasList = require('../controllers/preguntasController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/preguntas')
    .get(preguntasList.list_all_tasks)
    .post(preguntasList.create_a_task);

  app.route('/preguntas/:preguntaId')
    .get(preguntasList.read_a_task)
    .put(preguntasList.update_a_task)
    .delete(preguntasList.delete_a_task);
};
