'use strict'

const express = require('express')
const ProcessController = require('../controllers/process_controller')
const router = express.Router()
const authenticateJWT = require('../middleware/jwt_guard')

/**
 * @swagger
 * components:
 *   schemas:
 *     Proceso:
 *       type: object
 *       properties:
 *         procId:
 *           type: number
 *           example: 1
 *         procNombre:
 *           type: string
 *           example: Proceso test
 */


/**
 * @openapi
 * /process/{id}:
 *   get:
 *     tags:
 *       - Procesos
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del proceso
 *        schema:
 *        type: number
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: '#/components/schemas/Proceso'
 */
router.get('/process/:id', authenticateJWT, ProcessController.processById)

/**
 * @openapi
 * /process:
 *   get:
 *     tags:
 *       - Procesos
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Proceso'
 */
router.get('/process', authenticateJWT, ProcessController.getProcessAll)

/**
 * @openapi
 * /process:
 *   post:
 *     tags:
 *       - Procesos
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               procNombre:
 *                 type: string
 *                 example: "proceso prueba"
 *                 description: "El nombre del proceso"
 *             required:
 *               - procNombre
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proceso'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al crear el ítem"
 */
router.post('/process', authenticateJWT, ProcessController.createProcess)

/**
 * @openapi
 * /process/{id}:
 *   put:
 *     tags:
 *       - Procesos
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del proceso
 *        schema:
 *        type: number
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               procNombre:
 *                 type: string
 *                 example: "proceso test"
 *                 description: "El nombre del proceso"
 *             required:
 *               - procNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proceso'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al editar el ítem"
 */
router.put('/process/:id', authenticateJWT, ProcessController.updateProcess)


module.exports = router