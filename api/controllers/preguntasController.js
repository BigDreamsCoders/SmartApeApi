'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Pregunta');

exports.list_all_pregunta = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task);
  });
};

exports.create_a_pregunta = function(req, res) {
  var new_pregunta = new Task(req.body);
  new_pregunta.save(function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task);
  });
};

exports.read_a_pregunta = function(req, res) {
  Task.findById(req.params.preguntaId, function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task);
  });
};
exports.read_a_pregunta_quiz = function(req, res) {
  Task.find({ Id_quiz: req.params.referenciaId}, function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task);
  });
};

exports.read_a_soluciones = function(req, res) {
  Task.findById(req.params.preguntaId, function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task.Collecion_soluciones);
  });
};

exports.update_a_pregunta = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.preguntaId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    return res.status(200).send(task);
  });
};

exports.delete_a_pregunta = function(req, res) {

  Task.remove({
    _id: req.params.preguntaId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
