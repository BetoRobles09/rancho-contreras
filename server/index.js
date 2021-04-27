const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB();

app.use(cors());

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/caballos', require('./routes/caballo'));
// arrancar la app

app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});