const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(express.json());

// Configuración de CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rutas de tu aplicación
const activosRouter = require('./router/activos');
const ubicacionesRouter = require('./router/ubicaciones');
const responsablesRouter = require('./router/responsables');
app.use('/activos', activosRouter);
app.use('/ubicaciones', ubicacionesRouter);
app.use('/responsables', responsablesRouter);

const port = 3000;

const options = {
    key: fs.readFileSync('certs/private.key'),
    cert: fs.readFileSync('certs/certificate.crt')
};

https.createServer(options, app).listen(port, () => {
    console.log(`Servidor escuchando en https://localhost:${port}`);
});
