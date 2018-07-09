'use strict';

var mongoose = require('mongoose'),
  jwt    = require('jsonwebtoken'),
  bcrypt = require('bcryptjs'),
  config = require('../secret'),
  Task = mongoose.model('Usuario'),
  HelperTask = mongoose.model('Quiz');

// Retorna todos los usuarios
exports.list_all_usuario = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.status(200).send(task);
  });
};

// Crea un usuario
exports.create_a_usuario = function(req, res) {
  req.body.Password = bcrypt.hashSync(req.body.Password, 8);
  var new_usuario = new Task(req.body);
  new_usuario.save(function(err, task) {
    if (err)
      res.send(err);
    res.status(200).send(task);
  });
};

// Request referentes a token
exports.read_a_usuario_me = function(req, res, next) {
  Task.findById(req.userId, { password: 0 }, function (err, task) {
    if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the user.' });
    if (!task) return res.status(404).send({ success: false, message: 'No user found' });
    res.status(200).send(task);
  });
};

exports.update_a_usuario_me = function(req, res, next) {
    Task.findOneAndUpdate({_id: req.userId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.status(200).send(task);
    });
};

//Elementos que se editan con el id
exports.read_a_usuario = function(req, res) {
  Task.findById(req.params.usuarioId, function(err, task) {
    if (err)
      res.send(err);
    res.status(200).send(task);
  });
};

exports.update_a_usuario = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.usuarioId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.status(200).send(task);
  });
};

exports.delete_a_usuario = function(req, res) {

  Task.remove({
    _id: req.params.usuarioId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.status(200).send({success: true, message: 'Task successfully deleted' });
  });
};
// FAVORITOS
exports.add_favorito = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$push: {Collecion_favoritos: req.params.quizId}},
    function (err, task) {
      if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the quiz.' });
      if (!task) return res.status(404).send({ success: false, message: 'No user found' });
    return res.status(200).send({ success: true, message: 'favorite added' });
  });
};
exports.delete_favorito = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$pullAll: { Collecion_favoritos: [req.params.quizId]}},
    function (err, task) {
    if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the quiz.' });
    if (!task) return res.status(404).send({ success: false, message: 'No quiz found' });
    return res.status(200).send({ success: true, message: 'favorite removed' });
  });
};
exports.read_a_usuario_me_favoritos = function(req, res) {
  Task.findById({_id: req.userId}, function(err, task) {
    if (err)
      res.send(err);
    HelperTask.find({_id: task.Collecion_favoritos}, function(err, arreglo) {
      res.status(200).send(arreglo);
    });
  });
};
// GUARDADOS
exports.add_guardado = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$push: {Collecion_guardados: req.params.quizId}},
     function (err, task) {
       if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the quiz.' });
       if (!task) return res.status(404).send({ success: false, message: 'No quiz found' });
    return res.status(200).send({ success: true, message: 'Saved' });
  });
};

exports.delete_guardado = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$pullAll: { Collecion_guardados: [req.params.quizId]}},
    function (err, task) {
    if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the quiz.' });
    if (!task) return res.status(404).send({ success: false, message: 'No quiz found' });
    return res.status(200).send({ success: true, message: 'Save removed' });
  });
};
exports.read_a_usuario_me_guardados = function(req, res) {
  Task.findById({_id: req.userId}, function(err, task) {
    if (err)
      res.send(err);
    HelperTask.find({_id: task.Collecion_guardados}, function(err, arreglo) {
      res.status(200).send(arreglo);
    });
  });
};
// CREADOS
exports.add_creados = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$push: {Collecion_quizzes: req.params.quizId}},
    function (err, task) {
      if (err) return res.status(500).send(err/*{ success: false, message: 'There was a problem finding the quiz.' }*/);
      if (!task) return res.status(404).send({ success: false, message: 'No quiz found' });
    return res.status(200).send({ success: true, message: 'Added' });
  });
};

exports.delete_creados = function(req, res, next) {
  Task.findOneAndUpdate({_id: req.userId}, {$pullAll: { Collecion_quizzes: [req.params.quizId]}},
    function (err, task) {
    if (err) return res.status(500).send({ success: false, message: 'There was a problem finding the quiz.' });
    if (!task) return res.status(404).send({ success: false, message: 'No quiz found' });
    return res.status(200).send({ success: true, message: 'Deleted' });
  });
};
exports.read_a_usuario_me_creados = function(req, res) {
  Task.findById({_id: req.userId}, function(err, task) {
    if (err)
      res.send(err);
    HelperTask.find({_id: task.Collecion_quizzes}, function(err, arreglo) {
      res.status(200).send(arreglo);
    });
  });
};
//Obtener token por medio del login
exports.get_login_token = function(req, res) {
  Task.findOne({
    Correo: req.body.Correo
  }, function(err, task) {
    if (err) throw err;
    if (!task) {
      return res.status(500).send({ success: false, message: 'Authentication failed. User not found.' });
    } else if (task) {

      // Verficia si la contra coincide
      var passwordIsValid = bcrypt.compareSync(req.body.Password, task.Password);
      if (!passwordIsValid) {
        return res.status(500).send({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // Se crea un token con el id del usuario
        var token = jwt.sign({ id: task._id }, config.secret, {
          expiresIn: 86400  // expires in 24 hours
        });

        // retorna la informacion del token
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
};
