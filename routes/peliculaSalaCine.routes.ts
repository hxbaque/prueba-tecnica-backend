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
 * /api/peliculas-salas:
 *   post:
 *     summary: Crea una nueva relación entre película y sala de cine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fechaPublicacion:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               idSalaCine:
 *                 type: integer
 *               idPelicula:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Relación creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post("/", peliculaSalaCineController.create);

/**
 * @swagger
 * /api/peliculas-salas:
 *   get:
 *     summary: Obtiene la lista de relaciones entre películas y salas de cine
 *     responses:
 *       200:
 *         description: Lista de relaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   fechaPublicacion:
 *                     type: string
 *                     format: date-time
 *                   fechaFin:
 *                     type: string
 *                     format: date-time
 *                   idSalaCine:
 *                     type: integer
 *                   idPelicula:
 *                     type: integer
 *                   estado:
 *                     type: integer
 */
router.get("/", peliculaSalaCineController.getAll);

/**
 * @swagger
 * /api/peliculas-salas/{id}:
 *   get:
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
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 fechaPublicacion:
 *                   type: string
 *                   format: date-time
 *                 fechaFin:
 *                   type: string
 *                   format: date-time
 *                 idSalaCine:
 *                   type: integer
 *                 idPelicula:
 *                   type: integer
 *                 estado:
 *                   type: integer
 *       404:
 *         description: Relación no encontrada
 */
router.get("/:id", peliculaSalaCineController.getById);

/**
 * @swagger
 * /api/peliculas-salas/{id}:
 *   put:
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
 *             type: object
 *             properties:
 *               fechaPublicacion:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               idSalaCine:
 *                 type: integer
 *               idPelicula:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Relación actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Relación no encontrada
 */
router.put("/:id", peliculaSalaCineController.update);

/**
 * @swagger
 * /api/peliculas-salas/{id}:
 *   delete:
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
 * /api/peliculas-salas/find/{name}/{idSala}:
 *   get:
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
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   fechaPublicacion:
 *                     type: string
 *                     format: date-time
 *                   fechaFin:
 *                     type: string
 *                     format: date-time
 *                   idSalaCine:
 *                     type: integer
 *                   idPelicula:
 *                     type: integer
 *                   estado:
 *                     type: integer
 *       404:
 *         description: No se encontraron relaciones
 */
router.get("/find/:name/:idSala", peliculaSalaCineController.findByNameAndSala);

/**
 * @swagger
 * /api/peliculas-salas/count/{date}:
 *   get:
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
 */
router.get("/count/:date", peliculaSalaCineController.countByDate);

export default router;
