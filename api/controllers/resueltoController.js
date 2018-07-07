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
  var new_resuelto = new Task(req.body);
  new_resuelto.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_resuelto = function(req, res) {
  Task.findById(req.params.resueltoId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_resuelto = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.resueltoId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_resuelto = function(req, res) {

  Task.remove({
    _id: req.params.resueltoId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.list_all_resuelto_user = function(req, res, next) {
  Task.find({ IdUsuario: (req.userId, { password: 0 })}, function (err, task) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!task) return res.status(404).send("No user found.");
    res.status(200).send(task);
  });
};
