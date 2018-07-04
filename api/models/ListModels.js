'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
  Categoria: {type: String},
  Titulo: {type:String},
  Creador: {type:String},
  Estado: {type:Number},
  Descripcion: {type:String},
  Tiempo_limite: {type:String},
  Total_preguntas: {type:Number},
  Preguntas: [String],
  Resueltos: {type:Number,
              default: 0},
  Aprobados: {type:Number,
              default: 0},
  Reprobados: {type:Number,
              default: 0},
  Vistos: {type:Number,
              default: 0},
  Guardados: {type:Number,
              default: 0},
  Favoritos: {type:Number,
              default: 0},
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
module.exports = mongoose.model('Quiz', QuizSchema);
