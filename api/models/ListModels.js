'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Quiz = new Schema({
  Categoria: {type: String},
  Titulo: {type:String},
  Creador: {type:String},
  Estado: {type:Number},
  Descripcion: {type:String},
  Tiempo_limite: {type:String},
  Total_preguntas: {type:Number},
  Preguntas: [String],
  Fecha_creacion: {
    type: Date,
    default: Date.now
  }

});

var Soluciones = new Schema({
  Correcto: { type: String},
  RespuestaPregunta: { type: String}
}) ;

var PreguntasSchema = new Schema({
  Premisa: {type:String},
  TipoDePregunta:{type: Number},
  CollecionSoluciones: [Soluciones],
  Fecha_creacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Preguntas', PreguntasSchema);
module.exports = mongoose.model('Quiz', Quiz);
