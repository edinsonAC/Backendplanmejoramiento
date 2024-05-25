'use strict'

const express = require('express')
const FactorController = require('../controllers/factor_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     Factor:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         factNombre:
 *           type: string
 *           example: Institucional
 */

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
 *                   $ref: '#/components/schemas/Factor'
 */
router.get('/factor/:id', authenticateJWT, FactorController.factorById)

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
 *                     $ref: '#/components/schemas/Factor'
 */
router.get('/factor', authenticateJWT, FactorController.getFactorAll)

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
 *               $ref: '#/components/schemas/Factor'
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
router.post('/factor', authenticateJWT, FactorController.createFactor)

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
 *               $ref: '#/components/schemas/Factor'
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
router.put('/factor/:id', authenticateJWT, FactorController.updateFactor)


module.exports = router