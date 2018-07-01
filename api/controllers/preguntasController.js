'use strict';


var mongoose = require('mongoose'),
  Pregunta = mongoose.model('Preguntas');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.create_a_task = function(req, res) {
  var new_pregunta = new Pregunta(req.body);
  new_task.save(function(err, pregunta) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.preguntaId, function(err, task) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.preguntaId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(pregunta);
  });
};


exports.delete_a_task = function(req, res) {

  Task.remove({
    _id: req.params.preguntaId
  }, function(err, pregunta) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
