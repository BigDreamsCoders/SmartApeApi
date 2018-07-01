'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Preguntas');

exports.list_all_pregunta = function(req, res) {
  Pregunta.find({}, function(err, pregunta) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.create_a_pregunta = function(req, res) {
  var new_pregunta = new Pregunta(req.body);
  new_pregunta.save(function(err, pregunta) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.read_a_pregunta = function(req, res) {
  Pregunta.findById(req.params.preguntaId, function(err, pregunta) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.update_a_pregunta = function(req, res) {
  Pregunta.findOneAndUpdate({_id: req.params.preguntaId}, req.body, {new: true}, function(err, pregunta) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.delete_a_pregunta = function(req, res) {

  Pregunta.remove({
    _id: req.params.preguntaId
  }, function(err, pregunta) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
