'use strict';
module.exports = function(app) {
  var preguntasList = require('../controllers/preguntasController');
  var quizList = require('../controllers/quizController');
  var usuarioList = require('../controllers/usuarioController');

  // Rutas de preguntas
    app.route('/preguntas')
      .get(preguntasList.list_all_pregunta)
      .post(preguntasList.create_a_pregunta);

    app.route('/preguntas/:preguntaId')
      .get(preguntasList.read_a_pregunta)
      .put(preguntasList.update_a_pregunta)
      .delete(preguntasList.delete_a_pregunta);

    app.route('/preguntas/soluciones/:preguntaId')
      .get(preguntasList.read_a_soluciones);
    // Rutas de quiz
    app.route('/quiz')
      .get(quizList.list_all_quiz)
      .post(quizList.create_a_quiz);

    app.route('/quiz/:quizId')
      .get(quizList.read_a_quiz)
      .put(quizList.update_a_quiz)
      .delete(quizList.delete_a_quiz);

    app.route('/quiz/social/:quizId')
      .get(quizList.read_a_social);

    // Rutas de usuario
    app.route('/usuario')
      .get(usuarioList.list_all_usuario)
      .post(usuarioList.create_a_usuario);

    app.route('/usuario/:usuarioId')
      .get(usuarioList.read_a_usuario)
      .put(usuarioList.update_a_usuario)
      .delete(usuarioList.delete_a_usuario);
};
