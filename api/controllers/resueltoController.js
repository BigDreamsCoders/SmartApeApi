'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Resuelto');

exports.list_all_resuelto = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_resuelto = function(req, res) {
  var new_pregunta = new Task(req.body);
  new_pregunta.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_resuelto = function(req, res) {
  Task.findById(req.params.preguntaId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_resuelto = function(req, res) {
  Task.findById(req.params.preguntaId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task.Collecion_soluciones);
  });
};

exports.update_a_resuelto = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.preguntaId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_resuelto = function(req, res) {

  Task.remove({
    _id: req.params.preguntaId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
