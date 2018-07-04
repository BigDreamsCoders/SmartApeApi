'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Quiz');


  exports.list_all_quiz = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.create_a_quiz = function(req, res) {
    var new_quiz = new Task(req.body);
    new_quiz.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };


  exports.read_a_quiz = function(req, res) {
    Task.findById(req.params.quizId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.delete_a_quiz = function(req, res) {

    Task.remove({
      _id: req.params.quizId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };

  exports.update_a_quiz = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.quizId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.read_a_social = function(req, res) {
    Task.findById(req.params.quizId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task.Elementos_sociales);
    });
  };
