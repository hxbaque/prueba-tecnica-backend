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
 * components:
 *   schemas:
 *     SalaCine:
 *       type: object
 *       properties:
 *         id_sala:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: "Sala 1"
 *         estado:
 *           type: integer
 *           description: 0 = inactivo, 1 = activo
 *           example: 1
 */

/**
 * @swagger
 * /salas-cine:
 *   post:
 *     summary: Crea una nueva sala de cine
 *     tags: [Salas de Cine]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalaCine'
 *     responses:
 *       201:
 *         description: Sala de cine creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalaCine'
 *       400:
 *         description: Error de validación
 */
router.post('/', salaCineController.create);

/**
 * @swagger
 * /salas-cine:
 *   get:
 *     summary: Obtiene la lista de salas de cine
 *     tags: [Salas de Cine]
 *     responses:
 *       200:
 *         description: Lista de salas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SalaCine'
 */
router.get('/', salaCineController.getAll);

/**
 * @swagger
 * /salas-cine/{id_sala}:
 *   get:
 *     summary: Obtiene una sala de cine por ID
 *     tags: [Salas de Cine]
 *     parameters:
 *       - name: id_sala
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
 *               $ref: '#/components/schemas/SalaCine'
 *       404:
 *         description: Sala no encontrada
 */
router.get('/:id', salaCineController.getById);

/**
 * @swagger
 * /salas-cine/{id_sala}:
 *   put:
 *     summary: Actualiza una sala de cine por ID
 *     tags: [Salas de Cine]
 *     parameters:
 *       - name: id_sala
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
 *             $ref: '#/components/schemas/SalaCine'
 *     responses:
 *       200:
 *         description: Sala actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SalaCine'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Sala no encontrada
 */
router.put('/:id', salaCineController.update);

/**
 * @swagger
 * /salas-cine/{id_sala}:
 *   delete:
 *     summary: Elimina una sala de cine por ID
 *     tags: [Salas de Cine]
 *     parameters:
 *       - name: id_sala
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
 * /salas-cine/check-availability/{nombre_sala}:
 *   get:
 *     summary: Verifica la disponibilidad de una sala de cine
 *     tags: [Salas de Cine]
 *     parameters:
 *       - name: nombre_sala
 *         in: path
 *         required: true
 *         description: nombre de la sala a verificar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Disponibilidad de la sala
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                      example: "Sala disponible"
 *       404:
 *         description: Sala no encontrada
 */
router.get('/check-availability/:nombre', salaCineController.checkAvailability);

export default router;
