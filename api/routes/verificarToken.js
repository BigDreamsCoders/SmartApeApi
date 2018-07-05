var jwt = require('jsonwebtoken');
var config = require('../secret');

function verifyToken(req, res, next) {
  //Linea que lee de token
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // Si todo esta bien, guarda el request para otras rutas
    req.userId = decoded.id;
    next();
  });
}
module.exports = verifyToken;