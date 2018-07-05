'use strict';

var mongoose = require('mongoose'),
  jwt    = require('jsonwebtoken'),
  bcrypt = require('bcryptjs'),
  config = require('../secret'),
  Task = mongoose.model('Usuario');


exports.list_all_usuario = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_usuario = function(req, res) {
  req.body.Password = bcrypt.hashSync(req.body.Password, 8);
  var new_usuario = new Task(req.body);
  new_usuario.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_usuario = function(req, res) {
  Task.findById(req.params.usuarioId, function(err, task) {
    if (err)
      res.send(err);
    var token = req.headers['x-access-token'];
      if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.json(task);
  });
};

exports.update_a_usuario = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.usuarioId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_usuario = function(req, res) {

  Task.remove({
    _id: req.params.usuarioId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.get_login_token = function(req, res) {
  Task.findOne({
    Correo: req.body.Correo
  }, function(err, task) {

    if (err) throw err;

    var passwordIsValid = bcrypt.compareSync(req.body.Password, task.Password);

    if (!task) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (task) {

      // check if password matches
      if (!passwordIsValid) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        var token = jwt.sign({ id: task._id }, config.secret, {
          expiresIn: 86400  // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
};
