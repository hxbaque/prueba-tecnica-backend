import { Router } from "express";
import { PeliculaSalaCineController } from "../controllers/peliculasalacines.controller";

const router = Router();
const peliculaSalaCineController = new PeliculaSalaCineController();

/**
 * @swagger
 * tags:
 *   name: Películas en Salas de Cine
 *   description: Operaciones relacionadas con la asociación de películas y salas de cine
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PeliculaSalaCine:
 *       type: object
 *       properties:
 *         id_pelicula_sala:
 *           type: integer
 *           example: 1
 *         fecha_publicacion:
 *           type: string
 *           format: date-time
 *           example: "2025-02-25T00:00:00Z"
 *         fecha_fin:
 *           type: string
 *           format: date-time
 *           example: "2025-03-25T00:00:00Z"
 *         id_sala_cine:
 *           type: integer
 *           example: 1
 *         id_pelicula:
 *           type: integer
 *           example: 1
 *         estado:
 *           type: integer
 *           description: 0 = inactivo, 1 = activo
 *           example: 1
 */

/**
 * @swagger
 * /peliculas-salas-cine
 *   post:
 *     tags: [Películas en Salas de Cine]
 *     summary: Crea una nueva relación entre película y sala de cine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PeliculaSalaCine'
 *     responses:
 *       201:
 *         description: Relación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PeliculaSalaCine'
 *       400:
 *         description: Error de validación
 */
router.post("/", peliculaSalaCineController.create);

/**
 * @swagger
 * /peliculas-salas-cine:
 *   get:
 *     tags: [Películas en Salas de Cine]
 *     summary: Obtiene la lista de relaciones entre películas y salas de cine
 *     responses:
 *       200:
 *         description: Lista de relaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PeliculaSalaCine'
 */
router.get("/", peliculaSalaCineController.getAll);
/**
 * @swagger
 * /peliculas-salas-cine/{id}:
 *   get:
 *     tags: [Películas en Salas de Cine]
 *     summary: Obtiene una relación por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la relación a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Relación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PeliculaSalaCine'
 *       404:
 *         description: Relación no encontrada
 */
router.get("/:id", peliculaSalaCineController.getById);

/**
 * @swagger
 * /peliculas-salas-cine/{id}:
 *   put:
 *     tags: [Películas en Salas de Cine]
 *     summary: Actualiza una relación por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la relación a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PeliculaSalaCine'
 *     responses:
 *       200:
 *         description: Relación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PeliculaSalaCine'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Relación no encontrada
 */
router.put("/:id", peliculaSalaCineController.update);

/**
 * @swagger
 * /peliculas-salas-cine/{id}:
 *   delete:
 *     tags: [Películas en Salas de Cine]
 *     summary: Elimina una relación por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la relación a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Relación eliminada exitosamente
 *       404:
 *         description: Relación no encontrada
 */
router.delete("/:id", peliculaSalaCineController.delete);

/**
 * @swagger
 * /peliculas-salas-cine/find/{name}/{idSala}:
 *   get:
 *     tags: [Películas en Salas de Cine]
 *     summary: Busca relaciones por nombre de película y ID de sala
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Nombre de la película a buscar
 *         schema:
 *           type: string
 *       - name: idSala
 *         in: path
 *         required: true
 *         description: ID de la sala de cine
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de relaciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PeliculaSalaCine'
 *       404:
 *         description: No se encontraron relaciones
 */
router.get("/find/:name/:idSala", peliculaSalaCineController.findByNameAndSala);

/**
 * @swagger
 * /peliculas-salas-cine/count/{date}:
 *   get:
 *     tags: [Películas en Salas de Cine]
 *     summary: Cuenta relaciones por fecha
 *     parameters:
 *       - name: date
 *         in: path
 *         required: true
 *         description: Fecha para contar relaciones
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Número de relaciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 5
 */
router.get("/count/:date", peliculaSalaCineController.countByDate);

export default router;
