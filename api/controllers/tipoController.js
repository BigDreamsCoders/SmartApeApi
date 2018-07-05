'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tipo');

  exports.list_all_tipo = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.create_a_tipo = function(req, res) {
    var new_tipo = new Task(req.body);
    new_tipo.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.delete_a_tipo = function(req, res) {

    Task.remove({
      _id: req.params.tipoId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };

  exports.read_a_tipo = function(req, res) {
      Task.find({}, { "Lenguaje": req.params.Lenguaje }).exec(function(err, task) {
      if (err)
        res.send(err);
      res.json(task.Titulo);
    });
  };
