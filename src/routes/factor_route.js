'use strict'

const express = require('express')
const FactorController = require('../controllers/factor_controller')
const router = express.Router()


/**
 * @openapi
 * /factor/{id}:
 *   get:
 *     tags:
 *       - Factores
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del factor
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
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/factor/:id', FactorController.factorById)

/**
 * @openapi
 * /factor:
 *   get:
 *     tags:
 *       - Factores
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
 *                     type: object
 */
router.get('/factor', FactorController.getFactorAll)

/**
 * @openapi
 * /factor:
 *   post:
 *     tags:
 *       - Factores
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               factNombre:
 *                 type: string
 *                 example: "Prueba Factor"
 *                 description: "El nombre del factor"
 *               tifaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo factor"
 *             required:
 *               - factNombre
 *               - tifaId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 factNombre:
 *                   type: string
 *                   example: "Prueba Factor"
 *                 tifaId:
 *                   type: number
 *                   example: 1
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
router.post('/factor', FactorController.createFactor)

/**
 * @openapi
 * /factor/{id}:
 *   put:
 *     tags:
 *       - Factores
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del factor
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
 *               factNombre:
 *                 type: string
 *                 example: "Prueba factor"
 *                 description: "El nombre del factor"
 *               tifaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo factor"
 *             required:
 *               - factNombre
 *               - tifaId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 factNombre:
 *                   type: string
 *                   example: "Prueba Factor"
 *                 tifaId:
 *                   type: number
 *                   example: 1
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
router.put('/factor/:id', FactorController.updateFactor)


module.exports = router