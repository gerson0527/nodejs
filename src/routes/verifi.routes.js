import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();
router.get('/documentos', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM documentos');
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener documentos:', error);
      res.status(500).json({ error: 'Error al obtener documentos' });
    }
  });

  router.get('/verify-document/:param1-:param2-:param3-:param4-:param5', (req, res) => {
    // Procesa los parámetros y obtén los datos de la base de datos
    const param1 = req.params.param1;
    const param2 = req.params.param2;
    const param3 = req.params.param3;
    const param4 = req.params.param4;
    const param5 = req.params.param5;
  
    // Realiza una consulta a tu base de datos para obtener los datos
    const query = 'SELECT * FROM documentos WHERE ruta_archivo = ?';
  
    connection.query(query, [param1],[param2],[param3],[param4],[param5],(err, rows) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error al consultar la base de datos' });
      } else {
        if (rows.length > 0) {
          const data = rows[0]; // Supongo que obtienes un solo resultado
          res.json(data); // Enviar una respuesta JSON con los datos
        } else {
          res.status(404).json({ error: 'Documento no encontrado' });
        }
      }
    });
    });

  router.post('/verify-document/:param1-:param2-:param3-:param4-:param5', async (req, res) => {
    try {
        // Obtén los valores de los parámetros de la URL
        const { param1, param2, param3, param4, param5 } = req.params;
    
        // Realiza una consulta a la base de datos para buscar documentos
        const [documents] = await pool.query(
          'SELECT * FROM parametros WHERE param1 = ? AND param2 = ? AND param3 = ? AND param4 = ? AND param5 = ?',
          [param1, param2, param3, param4, param5]
        );
    
        // Comprueba si se encontraron documentos
        if (documents.length > 0) {
          // Si se encontraron documentos, envía la respuesta como JSON
          res.json(documents[0]);
        } else {
          // Si no se encontraron documentos, envía un mensaje de error
          res.status(404).json({ error: 'No se encontraron documentos con los parámetros proporcionados.' });
        }
      } catch (error) {
        console.error('Error al buscar documentos:', error);
        res.status(500).json({ error: 'Error en el servidor.' });
      }
  });
  export default router;