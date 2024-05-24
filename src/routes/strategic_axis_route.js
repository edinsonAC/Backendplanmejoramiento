'use strict'

const express = require('express')
const StrategicAxisController = require('../controllers/strategic_axis_controller')
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
 */

/**
 * @openapi
 * /strategic_axis/{id}:
 *   get:
 *     tags:
 *       - Ejes estrategicos
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
router.get('/strategic_axis/:id', StrategicAxisController.strategicAxisById)

/**
 * @openapi
 * /strategic_axis:
 *   get:
 *     tags:
 *       - Ejes estrategicos
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
router.get('/strategic_axis', StrategicAxisController.getStrategicAxisAll)

/**
 * @openapi
 * /strategic_axis:
 *   post:
 *     tags:
 *       - Ejes estrategicos
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
 *             required:
 *               - ejesNombre
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
router.post('/strategic_axis', StrategicAxisController.createStrategicAxis)

/**
 * @openapi
 * /strategic_axis/{id}:
 *   put:
 *     tags:
 *       - Ejes estrategicos
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
 *             required:
 *               - ejesNombre
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
router.put('/strategic_axis/:id', StrategicAxisController.updateStrategicAxis)

module.exports = router