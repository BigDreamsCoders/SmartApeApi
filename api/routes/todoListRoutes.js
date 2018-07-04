'use strict';
module.exports = function(app) {
  var preguntasList = require('../controllers/preguntasController');
  var quizList = require('../controllers/preguntasController');
  // Rutas

  app.route('/preguntas')
    .get(preguntasList.list_all_pregunta)
    .post(preguntasList.create_a_pregunta);

  app.route('/preguntas/:preguntaId')
    .get(preguntasList.read_a_pregunta)
    .put(preguntasList.update_a_pregunta)
    .delete(preguntasList.delete_a_pregunta);

  app.route('/preguntas/soluciones/:preguntaId')
    .get(preguntasList.read_a_soluciones)

  app.route('/quiz')
    .get(preguntasList.list_all_quiz)
    .post(preguntasList.create_a_quiz);

  app.route('/quiz/:quizId')
    .get(preguntasList.read_a_quiz)
    .put(preguntasList.update_a_quiz)
    .delete(preguntasList.delete_a_quiz);

};
