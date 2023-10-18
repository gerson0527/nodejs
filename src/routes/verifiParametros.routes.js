import { Router } from 'express';
import  { pool } from '../db.js';

const router = Router();
router.get('/parametros', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM parametros');
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener parametros:', error);
      res.status(500).json({ error: 'Error al obtener parametros' });
    }
  });
  export default router;