'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Soluciones = new Schema({
  Correcto: { type: String},
  RespuestaPregunta: { type: String}
}) ;

var PreguntasSchema = new Schema({
  Premisa: {type:String},
  TipoDePregunta:{type: Number},
  CollecionSoluciones: [Soluciones],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Preguntas', PreguntasSchema);
