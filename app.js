const express = require('express');
const app = express();
app.use(express.json());

const activosRouter = require('./router/activos');
const ubicacionesRouter = require('./router/ubicaciones');
const responsablesRouter = require('./router/responsables');

app.use('/activos', activosRouter);
app.use('/ubicaciones', ubicacionesRouter);
app.use('/responsables', responsablesRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
