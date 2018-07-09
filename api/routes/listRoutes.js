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
  app.route('/quiz/administrar/:quizId')
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

    app.route('/usuario/crear')
      .post(usuarioList.create_a_usuario);

  app.route('/usuario/me')
    .get(VerifyToken, usuarioList.read_a_usuario_me)
    .put(VerifyToken, usuarioList.update_a_usuario_me);

  app.route('/usuario/me/favoritos')
    .get(VerifyToken, usuarioList.read_a_usuario_me_favoritos);
  app.route('/usuario/me/guardados')
    .get(VerifyToken, usuarioList.read_a_usuario_me_guardados);
  app.route('/usuario/me/creados')
    .get(VerifyToken, usuarioList.read_a_usuario_me_creados);
  // Acciones que realiza el usuario con respecto a los quiz
  app.route('/usuario/favoritos/:quizId')
    .post(VerifyToken, usuarioList.add_favorito)
    .delete(VerifyToken, usuarioList.delete_favorito);

  app.route('/usuario/guardados/:quizId')
    .post(VerifyToken, usuarioList.add_guardado)
    .delete(VerifyToken, usuarioList.delete_guardado);

  app.route('/usuario/creados/:quizId')
    .post(VerifyToken,usuarioList.add_creados)
    .delete(VerifyToken,usuarioList.delete_creados);

  // Acciones para editar otros usuarios
  app.route('/usuario/administrar/:usuarioId')
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
  app.route('/tipo/borrar/:tipoId')
    .delete(VerifyToken, tipoList.delete_a_tipo);
  // Retorna las categorias
  app.route('/tipo/lista/:tipoIdioma')
    .get(VerifyToken, tipoList.read_a_tipo);
  /*- RESUELTO -*/
  app.route('/resuelto')
    .get(VerifyToken, resueltoList.list_all_resuelto)
    .post(VerifyToken, resueltoList.create_a_resuelto);
  // Rutas para realizar modificaciones en un resuelto
  app.route('/resuelto/especifico/:resueltoId')
    .get(VerifyToken, resueltoList.read_a_resuelto)
    .put(VerifyToken, resueltoList.update_a_resuelto)
    .delete(VerifyToken, resueltoList.delete_a_resuelto);
  // Para modificar un resuelto personal
  app.route('/resuelto/usuario')
    .get(VerifyToken, resueltoList.list_all_resuelto_user);

  app.get('*', function(req, res) {
      res.render('pages/index');
  });
  app.get('/elementos', function(req, res) {
      res.render('pages/elementos');
  });

};
