import { Router } from 'express';
import { PeliculaController } from '../controllers/pelicula.controller';

const router = Router();

const peliculaController = new PeliculaController();

/**
 * @swagger
 * tags:
 *   name: Películas
 *   description: Operaciones relacionadas con películas
 */

/**
 * @swagger
 * /api/peliculas:
 *   post:
 *     summary: Crea una nueva película
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: integer
 *               director:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Película creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post('/', peliculaController.create);

/**
 * @swagger
 * /api/peliculas:
 *   get:
 *     summary: Obtiene la lista de películas
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   director:
 *                     type: string
 *                   genre:
 *                     type: string
 */
router.get('/', peliculaController.getAll);

/**
 * @swagger
 * /api/peliculas/{id}:
 *   get:
 *     summary: Obtiene una película por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la película a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Película encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 year:
 *                   type: integer
 *                 director:
 *                   type: string
 *                 genre:
 *                   type: string
 *       404:
 *         description: Película no encontrada
 */
router.get('/:id', peliculaController.getById);

/**
 * @swagger
 * /api/peliculas/{id}:
 *   put:
 *     summary: Actualiza una película por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la película a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: integer
 *               director:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Película no encontrada
 */
router.put('/:id', peliculaController.update);

/**
 * @swagger
 * /api/peliculas/{id}:
 *   delete:
 *     summary: Elimina una película por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la película a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Película eliminada exitosamente
 *       404:
 *         description: Película no encontrada
 */
router.delete('/:id', peliculaController.delete);

export default router;
