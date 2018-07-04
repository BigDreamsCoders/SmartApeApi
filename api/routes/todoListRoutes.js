'use strict';
module.exports = function(app) {
  var preguntasList = require('../controllers/preguntasController');

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
};
