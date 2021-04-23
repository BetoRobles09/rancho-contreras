const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});