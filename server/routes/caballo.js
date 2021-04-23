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
      check('nombre', 'El nombre de la obra es obligatorio').not().isEmpty(),
      check('cliente', 'El cliente es obligatorio').not().isEmpty(),
      check('ubicacion', 'La ubicación es obligatoria').not().isEmpty(),
      check('fechaInicio', 'La fecha de inicio es obligatoria').not().isEmpty(),
      check('fechaFin', 'La fecha de fin es obligatoria').not().isEmpty()
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
