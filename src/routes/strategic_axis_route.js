'use strict'

const express = require('express')
const StrategicAxisController = require('../controllers/strategic_axis_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()

/**
 * @openapi
 * components:
 *   schemas:
 *     EjeEstrategico:
 *       type: object
 *       properties:
 *         ejesId:
 *           type: number
 *           example: 1
 *         ejesNombre:
 *           type: string
 *           example: Eje ejemplo
 *         pdiId:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /strategic-axis/{id}:
 *   get:
 *     tags:
 *       - Ejes estrategicos
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del eje estrategico
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
 *                   $ref: '#/components/schemas/EjeEstrategico'
 */
router.get('/strategic-axis/:id', authenticateJWT, StrategicAxisController.strategicAxisById)

/**
 * @openapi
 * /strategic-axis:
 *   get:
 *     tags:
 *       - Ejes estrategicos
 *     security:
 *       - Authorization: []
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
 *                     $ref: '#/components/schemas/EjeEstrategico'
 */
router.get('/strategic-axis', authenticateJWT, StrategicAxisController.getStrategicAxisAll)

/**
 * @openapi
 * /strategic-axis:
 *   post:
 *     tags:
 *       - Ejes estrategicos
 *     security:
 *       - Authorization: []
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ejesNombre:
 *                 type: string
 *                 example: "Prueba eje"
 *                 description: "El nombre del eje"
 *               pdiId:
 *                 type: string
 *                 example: 1
 *                 description: "El id del plan de desarrollo"
 *             required:
 *               - ejesNombre
 *               - pdiId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EjeEstrategico'
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
router.post('/strategic-axis', authenticateJWT, StrategicAxisController.createStrategicAxis)

/**
 * @openapi
 * /strategic-axis/{id}:
 *   put:
 *     tags:
 *       - Ejes estrategicos
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del eje
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
 *               ejesNombre:
 *                 type: string
 *                 example: "Prueba eje"
 *                 description: "El nombre del eje"
 *               pdiId:
 *                 type: string
 *                 example: "Prueba eje"
 *                 description: "El nombre del eje"
 *             required:
 *               - ejesNombre
 *               - pdiId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EjeEstrategico'
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
router.put('/strategic-axis/:id', authenticateJWT, StrategicAxisController.updateStrategicAxis)

/**
 * @openapi
 * /strategic-axis/development-plan/{id}:
 *   get:
 *     tags:
 *       - Ejes estrategicos
 *     security:
 *       - Authorization: []
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
 *                     $ref: '#/components/schemas/EjeEstrategico'
 */
router.get('/strategic-axis/development-plan/:id', authenticateJWT, StrategicAxisController.getStrategicAxisByPDI)




module.exports = router