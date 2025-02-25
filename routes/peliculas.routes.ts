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
 * components:
 *   schemas:
 *     Pelicula:
 *       type: object
 *       properties:
 *         id_pelicula:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: "Avatar"
 *         duracion:
 *           type: integer
 *           example: 180
 *         estado:
 *           type: integer
 *           description: 0 = inactivo, 1 = activo
 *           example: 1
 */

/**
 * @swagger
 * /peliculas:
 *   post:
 *     summary: Crea una nueva película
 *     tags: [Películas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pelicula'
 *     responses:
 *       201:
 *         description: Película creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pelicula'
 *       400:
 *         description: Error de validación
 */
router.post('/', peliculaController.create);

/**
 * @swagger
 * /peliculas:
 *   get:
 *     summary: Obtiene la lista de películas
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pelicula'
 */
router.get('/', peliculaController.getAll);

/**
 * @swagger
 * /peliculas/{id_pelicula}:
 *   get:
 *     summary: Obtiene una película por ID
 *     tags: [Películas]
 *     parameters:
 *       - name: id_pelicula
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
 *               $ref: '#/components/schemas/Pelicula'
 *       404:
 *         description: Película no encontrada
 */
router.get('/:id', peliculaController.getById);

/**
 * @swagger
 * /peliculas/{id_pelicula}:
 *   put:
 *     summary: Actualiza una película por ID
 *     tags: [Películas]
 *     parameters:
 *       - name: id_pelicula
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
 *             $ref: '#/components/schemas/Pelicula'
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pelicula'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Película no encontrada
 */
router.put('/:id', peliculaController.update);

/**
 * @swagger
 * /peliculas/{id_pelicula}:
 *   delete:
 *     summary: Elimina una película por ID
 *     tags: [Películas]
 *     parameters:
 *       - name: id_pelicula
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

/**
 * @swagger
 * /peliculas/fecha-publicacion:
 *   post:
 *     summary: Obtiene las películas publicadas en una fecha específica
 *     tags: [Películas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-25"
 *     responses:
 *       200:
 *         description: Lista de películas publicadas en la fecha especificada y su cantidad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cantidad:
 *                   type: integer
 *                   example: 3
 *                 peliculas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pelicula'
 *       400:
 *         description: Parámetro de fecha faltante o inválido
 */
router.post('/fecha-publicacion', peliculaController.getByFechaPublicacion);
/**
 * @swagger
 * /peliculas/fecha-publicacion:
 *   post:
 *     summary: Obtiene las películas publicadas en una fecha específica
 *     tags: [Películas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-25"
 *     responses:
 *       200:
 *         description: Lista de películas publicadas en la fecha especificada y su cantidad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cantidad:
 *                   type: integer
 *                   example: 3
 *                 peliculas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pelicula'
 *       400:
 *         description: Parámetro de fecha faltante o inválido
 */
router.post('/fecha-publicacion', peliculaController.getByFechaPublicacion);


export default router;
