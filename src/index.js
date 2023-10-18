import express from 'express';
import indexroutes from './routes/verifi.routes.js';
import verifiParametrosroutes from './routes/verifiParametros.routes.js';


const app = express();
const port = 3000;

// Ruta para obtener todos los documentos
app.use(indexroutes);
app.use(verifiParametrosroutes);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
