'use strict'

const express = require('express')
const StrategicLineController = require('../controllers/strategic_line_controller')
const router = express.Router()

/**
 * @openapi
 * components:
 *   schemas:
 *     LineaEstrategica:
 *       type: object
 *       properties:
 *         liesId:
 *           type: number
 *           example: 1
 *         liesNombre:
 *           type: string
 *           example: linea ejemplo
 *         liesObjetivos:
 *           type: string
 *           example: linea ejemplo objetivo
 *         ejesId:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /strategic_line/{id}:
 *   get:
 *     tags:
 *       - Lineas estrategicas
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la lina estrategica
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
 *                   $ref: '#/components/schemas/LineaEstrategica'
 */
router.get('/strategic_line/:id', StrategicLineController.strategicLineById)

/**
 * @openapi
 * /strategic_line:
 *   get:
 *     tags:
 *       - Lineas estrategicas
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
 *                     $ref: '#/components/schemas/LineaEstrategica'
 */
router.get('/strategic_line', StrategicLineController.getStrategicLineAll)

/**
 * @openapi
 * /strategic_line:
 *   post:
 *     tags:
 *       - Lineas estrategicas
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               liesNombre:
 *                 type: string
 *                 example: "Prueba linea"
 *                 description: "El nombre de la linea"
 *               liesObjetivos:
 *                 type: string
 *                 example: "Prueba linea objetivo"
 *                 description: "El objetivo de la linea"
 *               ejesId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del eje estrategico"
 *             required:
 *               - liesNombre
 *               - ejesId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LineaEstrategica'
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
router.post('/strategic_line', StrategicLineController.createStrategicLine)

/**
 * @openapi
 * /strategic_line/{id}:
 *   put:
 *     tags:
 *       - Lineas estrategicas
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la linea estrategica
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
 *               liesNombre:
 *                 type: string
 *                 example: "Prueba linea"
 *                 description: "El nombre de la linea"
 *               liesObjetivos:
 *                 type: string
 *                 example: "Objetivos linea"
 *                 description: "El nombre de la linea"
 *               ejesId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del eje"
 *             required:
 *               - liesNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LineaEstrategica'
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
router.put('/strategic_line/:id', StrategicLineController.updateStrategicLine)

module.exports = router