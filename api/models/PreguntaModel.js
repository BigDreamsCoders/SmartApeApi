'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntasSchema = new Schema({
  Premisa: {type:String},
  TipoDePregunta:{type: Number},
  Soluciones: [{
    RespuestaPregunta: { type: String},
    Correcto: { type: String}
  }],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

var customer = new CustomerModel({
    Premisa: 'Ashish',
    TipoDePregunta: 'Suthar',
    company: 'asis',
    Soluciones: [{
      RespuestaPregunta: 'Suthar',
      Correcto: '0'
    },
    {
      RespuestaPregunta: 'Suthar',
      Correcto: '1'
    }
  ]
});


module.exports = mongoose.model('Preguntas', PreguntasSchema);
