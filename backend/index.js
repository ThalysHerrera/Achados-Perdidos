const express = require('express');
const cors = require('cors');
const app = express();

const achadosRoutes = require('./routes/achadosRoutes');
const tiposRoutes = require('./routes/tiposRoutes');

app.use(cors());
app.use(express.json());

app.use('/achados', achadosRoutes);
app.use('/tiposObjetos', tiposRoutes);

app.listen(4000, () => {
  console.log('Servidor rodando em http://localhost:4000');
});
