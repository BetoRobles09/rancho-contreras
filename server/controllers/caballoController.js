const Caballo = require('../models/Caballo');
const { validationResult } = require('express-validator');

exports.crearCaballo = async (req, res) => {
  const errores = validationResult(req);
  if(!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }
  try {
    const caballo = new Caballo(req.body);
    caballo.creador = req.usuario.id;
    caballo.save();
    res.json(caballo);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al crear el registro');
  }
}

exports.obtenerCaballos = async (req, res) => {
  try {
    const caballos = await Caballo.find({}).sort({creado: -1});
    res.json({caballos});
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al obtener los registros');
  }
}

exports.actualizarCaballo = async (req, res) => {
  const errores = validationResult(req);
	if( !errores.isEmpty() ) {
		return res.status(400).json({errores: errores.array() })
	}

  const { nombre } = req.body;
  const nuevoCaballo = {};
  if(nombre) {
    nuevoCaballo.nombre = nombre;
  }
  try {
    let caballo = await Caballo.findById(req.params.id);
    if(!caballo) {
      return res.status(404).json({msg: 'Registro no encontrado'})
    }
    if(caballo.creador.toString() !== req.usuario.id ) {
			return res.status(401).json({msg: 'No Autorizado'});
		}
    caballo = await Caballo.findByIdAndUpdate({ _id: req.params.id }, { $set : nuevoCaballo}, { new: true });
		res.json({caballo});
  } catch (error) {
    console.log(error);
		res.status(500).send('Error al actualizar');
  }
}

exports.eliminarCaballo = async (req, res) => {
  try {
    let caballo = await Caballo.findById(req.params.id);
    if(!caballo) {
      return res.status(404).json({msg: 'Registro no encontrado'})
    }
    if(caballo.creador.toString() !== req.usuario.id ) {
			return res.status(401).json({msg: 'No Autorizado'});
		}
    await Caballo.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'Registro eliminado'})
  } catch (error) {
    console.log(error);
		res.status(500).send('Error al eliminar')
  }
}
