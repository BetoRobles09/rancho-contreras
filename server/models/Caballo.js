const mongoose = require('mongoose');

const CaballoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  capa: {
    type: String,
    required: true
  },
  padre: {
    type: String,
    required: true
  },
  madre: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  imageURL: {
    type: String
  },
  creador: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario' 
  },
  creado: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Obra = mongoose.model('caballo', CaballoSchema);