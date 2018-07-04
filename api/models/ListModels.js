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
  Elementos_sociales: {type:SocialSchema},
  Preguntas: [String],
  Fecha_creacion: {
    type: Date,
    default: Date.now
  }
});

var SocialSchema = new Schema({
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
              default: 0}
});

var SolucionesSchema = new Schema({
  Correcto: { type: String},
  Respuesta_pregunta: { type: String}
}) ;

var PreguntasSchema = new Schema({
  Premisa: {type:String},
  Tipo_pregunta:{type: Number},
  Collecion_soluciones: [SolucionesSchema],
  Fecha_creacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Preguntas', PreguntasSchema);
module.exports = mongoose.model('Quiz', QuizSchema);
