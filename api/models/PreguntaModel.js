'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntasSchema = new Schema({
  Premisa: {type:String},
  TipoDePregunta:{type: Number},
  Soluciones: [new Schema(
    RespuestaPregunta: { type: String},
    Correcto: { type: String})
  ],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Preguntas', PreguntasSchema);
