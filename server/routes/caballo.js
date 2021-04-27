const express = require('express');
const router = express.Router();
const caballoController = require('../controllers/caballoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea caballos
// api/caballos
router.post('/',
	auth,
		[
      check('nombre', 'El nombre del caballo obligatorio').not().isEmpty(),
      check('raza', 'La raza es obligatoria').not().isEmpty(),
      check('capa', 'La capa es obligatoria').not().isEmpty(),
      check('madre', 'La madre del caballo es obligatoria').not().isEmpty(),
      check('padre', 'El padre del caballo es obligatoria').not().isEmpty(),
      check('fechaNacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty()
    ],
    caballoController.crearCaballo
);
// Obtener todos las obras
router.get('/', 
  auth,
  caballoController.obtenerCaballos
)
// Actualizar obra via ID
router.put('/:id', 
  auth,
		[
      check('nombre', 'El nombre de la obra es obligatorio').not().isEmpty(),
      check('raza', 'La raza del caballo es obligatoria').not().isEmpty(),
      check('capa', 'La capa del caballo es obligatoria').not().isEmpty(),
      check('padre', 'El nombre del padre es obligatorio').not().isEmpty(),
      check('madre', 'El nombre de la madre es obligatorio').not().isEmpty(),
      check('fechaNacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty()
    ],
    caballoController.actualizarCaballo
);
// Eliminar una obra
router.delete('/:id', 
  auth,
  caballoController.eliminarCaballo
);

module.exports = router;
