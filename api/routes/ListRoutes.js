'use strict';
module.exports = function(app) {
  var preguntaList = require('../controllers/preguntasController');
  var quizList = require('../controllers/quizController');
  var usuarioList = require('../controllers/usuarioController');
  var tipoList = require('../controllers/tipoController');
  var resueltoList = require('../controllers/resueltoController');
  var VerifyToken = require('./verificarToken');
  /*- PREGUNTAS -*/
  // Rutas de general
  app.route('/preguntas')
    .get(VerifyToken, preguntaList.list_all_pregunta)
    .post(VerifyToken, preguntaList.create_a_pregunta);
  // Rutas para realizar modificaciones de una pregunta
  app.route('/preguntas/:preguntaId')
    .get(VerifyToken, preguntaList.read_a_pregunta)
    .put(VerifyToken, preguntaList.update_a_pregunta)
    .delete(VerifyToken, preguntaList.delete_a_pregunta);

  app.route('/preguntas/soluciones/:preguntaId')
    .get(preguntaList.read_a_soluciones);
  /*- QUIZ -*/
  // Rutas de quiz
  app.route('/quiz')
    .get(VerifyToken, quizList.list_all_quiz)
    .post(VerifyToken, quizList.create_a_quiz);
  // Rutas para realizar modificaciones en un quiz
  app.route('/quiz/:quizId')
    .get(VerifyToken, quizList.read_a_quiz)
    .put(VerifyToken, quizList.update_a_quiz)
    .delete(VerifyToken, quizList.delete_a_quiz);

  app.route('/quiz/social/:quizId')
    .get(VerifyToken, quizList.read_a_social);

  app.route('/quiz/categoria/:categoria')
    .get(VerifyToken, quizList.read_a_categoria);
  /*- USUARIO -*/
  // Rutas de usuario
  app.route('/usuario')
    .get(VerifyToken, usuarioList.list_all_usuario)
    .post(VerifyToken, usuarioList.create_a_usuario);

  app.route('/usuario/me')
    .get(VerifyToken, usuarioList.read_a_usuario_me)
    .put(VerifyToken, usuarioList.update_a_usuario_me);

  // Acciones que realiza el usuario con respecto a los quiz
  app.route('/usuario/favoritos')
    .post(usuarioList.add_favorito)
    .delete(usuarioList.delete_favorito);

  app.route('/usuario/guardados')
    .post(usuarioList.add_guardado)
    .delete(usuarioList.delete_guardado);

  app.route('/usuario/created')
    .post(usuarioList.add_created)
    .delete(usuarioList.delete_created);

  // Acciones para editar otros usuarios
  app.route('/usuario/:usuarioId')
    .get(VerifyToken, usuarioList.read_a_usuario)
    .put(VerifyToken, usuarioList.update_a_usuario)
    .delete(VerifyToken, usuarioList.delete_a_usuario);

  // Ruta para obtener el token Corre: dato Password: dato
  app.route('/usuario/login')
    .post(usuarioList.get_login_token);

  /*- TIPOS -*/
  app.route('/tipo')
    .get(VerifyToken, tipoList.list_all_tipo)
    .post(VerifyToken, tipoList.create_a_tipo);
  app.route('/tipo/:tipoId')
    .delete(VerifyToken, tipoList.delete_a_tipo);
  // Retorna las categorias
  app.route('/tipo/:tipoIdioma')
    .get(VerifyToken, tipoList.read_a_tipo);
  /*- RESUELTO -*/
  app.route('/resuelto')
    .get(VerifyToken, resueltoList.list_all_resuelto)
    .post(VerifyToken, resueltoList.create_a_resuelto);
  // Rutas para realizar modificaciones en un resuelto
  app.route('/resuelto/:resueltoId')
    .get(VerifyToken, resueltoList.read_a_resuelto)
    .put(VerifyToken, resueltoList.update_a_resuelto)
    .delete(VerifyToken, resueltoList.delete_a_resuelto);
};
