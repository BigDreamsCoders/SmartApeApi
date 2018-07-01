'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntasSchema = new Schema({
  texto: {type:String},
  TipoDePregunta:{type: Number},
  Created_date: {
    type: Date,
    default: Date.now
  },
  Soluciones:[{
    TextoPregunta: { type: String},
    Correcto: { type: Boolean}
  }]
});

module.exports = mongoose.model('Preguntas', PreguntasSchema);
