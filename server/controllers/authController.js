const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if( !errores.isEmpty() ) {
    return res.status(400).json({errores: errores.array() })
  }
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    if(!usuario) {
      return res.status(400).json({msg: 'El usuario no existe'});
    }
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if(!passCorrecto) {
      return res.status(400).json({msg: 'Password Incorrecto' })
    }
    const payload = {
      usuario: {
        id: usuario.id
      }
    };
    jwt.sign(payload, process.env.SECRETA, {
      expiresIn: 21600 // 6 horas
    }, (error, token) => {
      if(error) throw error;
      res.json({ token  });
    });
    } catch (error) {
      console.log(error);
    }
}

// Obtiene que usuario esta autenticado
exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select('-password');
    res.json({usuario});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'Hubo un error al revisar la autenticacion'});
  }
}
