'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var PreguntasSchema = new Schema({
  texto: String,
  TipoDePregunta: Number,
  Created_date: {
    type: Date,
    default: Date.now
  },
  Soluciones:[{
    TextoPregunta: String,
    Correcto: Boolean
  }]
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Preguntas', PreguntasSchema);
