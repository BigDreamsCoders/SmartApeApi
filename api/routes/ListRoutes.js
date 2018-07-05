'use strict';
module.exports = function(app) {
  var preguntaList = require('../controllers/preguntasController');
  var quizList = require('../controllers/quizController');
  var usuarioList = require('../controllers/usuarioController');
  var tipoList = require('../controllers/tipoController')
  var VerifyToken = require('./verificarToken');
  /*- PREGUNTAS -*/
  // Rutas de general
  app.route('/preguntas')
    .get(preguntaList.list_all_pregunta)
    .post(preguntaList.create_a_pregunta);
  // Rutas para realizar modificaciones de una pregunta
  app.route('/preguntas/:preguntaId')
    .get(preguntaList.read_a_pregunta)
    .put(preguntaList.update_a_pregunta)
    .delete(preguntaList.delete_a_pregunta);

  app.route('/preguntas/soluciones/:preguntaId')
    .get(preguntaList.read_a_soluciones);
  /*- QUIZ -*/
  // Rutas de quiz
  app.route('/quiz')
    .get(quizList.list_all_quiz)
    .post(quizList.create_a_quiz);
  // Rutas para realizar modificaciones en un quiz
  app.route('/quiz/:quizId')
    .get(quizList.read_a_quiz)
    .put(quizList.update_a_quiz)
    .delete(quizList.delete_a_quiz);

  app.route('/quiz/social/:quizId')
    .get(quizList.read_a_social);
  /*- USUARIO -*/
  // Rutas de usuario
  app.route('/usuario')
    .get(usuarioList.list_all_usuario)
    .post(usuarioList.create_a_usuario);

  app.route('/usuario/me')
    .get(VerifyToken, usuarioList.read_a_usuario_me)
    .put(VerifyToken, usuarioList.update_a_usuario_me);

  // Acciones que realiza el usuario con respecto a los quiz
  app.route('/usuario/favoritos')
    .post(VerifyToken, usuarioList.add_favorito)
    .delete(VerifyToken, usuarioList.delete_favorito);

  app.route('/usuario/guardados')
    .post(VerifyToken, usuarioList.add_guardado)
    .delete(VerifyToken, usuarioList.delete_guardado);

  app.route('/usuario/created')
    .post(VerifyToken, usuarioList.add_created)
    .delete(VerifyToken, usuarioList.delete_created);

  // Acciones para editar otros usuarios
  app.route('/usuario/:usuarioId')
    .get(VerifyToken, usuarioList.read_a_usuario)
    .put(VerifyToken, usuarioList.update_a_usuario)
    .delete(VerifyToken, usuarioList.delete_a_usuario);

  // Ruta para obtener el token
  app.route('/usuario/login')
    .post(usuarioList.get_login_token);

  /*- TIPOS -*/
  app.route('/tipo')
    .get(tipoList.list_all_tipo)
    .post(tipoList.create_a_tipo);
};
