import { Router } from 'express';
import { SalaCineController } from '../controllers/salaCine.controller';

const router = Router();
const salaCineController = new SalaCineController();

/**
 * @swagger
 * tags:
 *   name: Salas de Cine
 *   description: Operaciones relacionadas con salas de cine
 */

/**
 * @swagger
 * /api/salas:
 *   post:
 *     summary: Crea una nueva sala de cine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               capacidad:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sala de cine creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post('/', salaCineController.create);

/**
 * @swagger
 * /api/salas:
 *   get:
 *     summary: Obtiene la lista de salas de cine
 *     responses:
 *       200:
 *         description: Lista de salas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_sala:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   capacidad:
 *                     type: integer
 *                   estado:
 *                     type: integer
 */
router.get('/', salaCineController.getAll);

/**
 * @swagger
 * /api/salas/{id}:
 *   get:
 *     summary: Obtiene una sala de cine por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sala encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_sala:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 capacidad:
 *                   type: integer
 *                 estado:
 *                   type: integer
 *       404:
 *         description: Sala no encontrada
 */
router.get('/:id', salaCineController.getById);

/**
 * @swagger
 * /api/salas/{id}:
 *   put:
 *     summary: Actualiza una sala de cine por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               capacidad:
 *                 type: integer
 *               estado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sala actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Sala no encontrada
 */
router.put('/:id', salaCineController.update);

/**
 * @swagger
 * /api/salas/{id}:
 *   delete:
 *     summary: Elimina una sala de cine por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Sala eliminada exitosamente
 *       404:
 *         description: Sala no encontrada
 */
router.delete('/:id', salaCineController.delete);

/**
 * @swagger
 * /api/salas/{id}/check-availability:
 *   get:
 *     summary: Verifica la disponibilidad de una sala de cine
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a verificar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Disponibilidad de la sala
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 disponible:
 *                   type: boolean
 *       404:
 *         description: Sala no encontrada
 */
router.get('/check-availability/:nombre', salaCineController.checkAvailability);

export default router;
