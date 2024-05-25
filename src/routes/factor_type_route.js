'use strict'

const express = require('express')
const FactorTypeController = require('../controllers/factor_type_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()

/**
 * @openapi
 * components:
 *   schemas:
 *     TipoFactor:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         tifaNombre:
 *           type: string
 *           example: Institucional
 */

/**
 * @openapi
 * /factor_type/{id}:
 *   get:
 *     tags:
 *       - Tipo factores
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del tipo factor
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
 *                   $ref: '#/components/schemas/TipoFactor'
 */
router.get('/factor_type/:id', authenticateJWT, FactorTypeController.factorTypeById)

/**
 * @openapi
 * /factor_type:
 *   get:
 *     tags:
 *       - Tipo factores
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
 *                     $ref: '#/components/schemas/TipoFactor'
 */
router.get('/factor_type', authenticateJWT, FactorTypeController.getFactorTypeAll)

/**
 * @openapi
 * /factor_type/:
 *   post:
 *     tags:
 *       - Tipo factores
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tifaNombre:
 *                 type: string
 *                 example: "Institucional"
 *                 description: "El nombre del tipo factor"
 *             required:
 *               - tifaNombre
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoFactor'
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
router.post('/factor_type', authenticateJWT, FactorTypeController.createFactorType)

/**
 * @openapi
 * /factor_type/{id}:
 *   put:
 *     tags:
 *       - Tipo factores
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del tipo factor
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
 *               tifaNombre:
 *                 type: string
 *                 example: "Institucional"
 *                 description: "El nombre del tipo de factor"
 *             required:
 *               - tifaNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoFactor'
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
router.put('/factor_type/:id', authenticateJWT, FactorTypeController.updateFactorType)


router.delete('/factor_type/:id', authenticateJWT, FactorTypeController.deleteAcademicProgram)

module.exports = router