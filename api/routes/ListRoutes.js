'use strict';
module.exports = function(app) {
  var preguntasList = require('../controllers/preguntasController');
  var quizList = require('../controllers/quizController');
  // Rutas

  app.route('/preguntas')
    .get(preguntasList.list_all_pregunta)
    .post(preguntasList.create_a_pregunta);

  app.route('/preguntas/:preguntaId')
    .get(preguntasList.read_a_pregunta)
    .put(preguntasList.update_a_pregunta)
    .delete(preguntasList.delete_a_pregunta);

  app.route('/preguntas/soluciones/:preguntaId')
    .get(preguntasList.read_a_soluciones);

  app.route('/quiz')
    .get(quizList.list_all_quiz)
    .post(quizList.create_a_quiz);

  app.route('/quiz/:quizId')
    .get(quizList.read_a_quiz)
    .put(quizList.update_a_quiz)
    .delete(quizList.delete_a_quiz);

};
