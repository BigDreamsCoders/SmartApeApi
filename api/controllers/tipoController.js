'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tipo');

  exports.list_all_tipo = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      return res.status(200).send(task);
    });
  };

  exports.create_a_tipo = function(req, res) {
    var new_tipo = new Task(req.body);
    new_tipo.save(function(err, task) {
      if (err)
        res.send(err);
      return res.status(200).send(task);
    });
  };

  exports.delete_a_tipo = function(req, res) {

    Task.remove({
      _id: req.params.tipoId
    }, function(err, task) {
      if (err)
        res.send(err);
      return res.status(200).send({success: true, message: 'Task successfully deleted' });
    });
  };

  exports.read_a_tipo = function(req, res) {
      Task.findOne({ Lenguaje: req.params.tipoIdioma}, function (err, task) {
        if (err)
          res.send(err);
        return res.status(200).send(task.Titulo);
    });
  };
