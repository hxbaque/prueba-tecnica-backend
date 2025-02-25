import { Router } from "express";
import salaCineRoutes from './salaCine.routes';
import peliculasRoutes from './peliculas.routes';
import peliculaSalaCineRoutes from './peliculaSalaCine.routes';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Salas de Cine
 *     description: Operaciones relacionadas con salas de cine
 */
router.use('/salas-cine', salaCineRoutes);

/**
 * @swagger
 * tags:
 *   - name: Películas
 *     description: Operaciones relacionadas con películas
 */
router.use('/peliculas', peliculasRoutes);

/**
 * @swagger
 * tags:
 *   - name: Películas en Salas de Cine
 *     description: Operaciones relacionadas con la asociación de películas y salas de cine
 */
router.use('/peliculas-salas-cine', peliculaSalaCineRoutes);

export default router;
