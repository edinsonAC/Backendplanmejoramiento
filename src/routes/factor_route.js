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
 *        id:
 *           type: number
 *           example: 1
 *        factNombre:
 *           type: string
 *           example: Institucional
 *        factDescripcion:
 *           type: string
 *           example: descripcion
 *        tifaId:
 *           type: number
 *           example: 1
 *        acueId:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /factor/{id}:
 *   get:
 *     tags:
 *       - Factores
 *     security:
 *       - Authorization: []
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
 *                     $ref: '#/components/schemas/Factor'
 */
router.get('/factor', authenticateJWT, FactorController.getFactorAll)

/**
 * @openapi
 * /factor:
 *   post:
 *     tags:
 *       - Factores
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
 *               factNombre:
 *                 type: string
 *                 example: "Prueba Factor"
 *                 description: "El nombre del factor"
 *               factDescripion:
 *                 type: string
 *                 example: "Descripcion Factor"
 *                 description: "La descripcion del factor"
 *               tifaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo factor"
 *               acueId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del acuerdo"
 *             required:
 *               - factNombre
 *               - tifaId
 *               - factDescripcion
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
 *     security:
 *       - Authorization: []
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
 *               factDescripcion:
 *                 type: string
 *                 example: "Prueba factor descripcion"
 *                 description: "la descripcion del factor"
 *               tifaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo factor"
 *               acueId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del acuerdo"
 *             required:
 *               - factNombre
 *               - tifaId
 *               - acueId
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