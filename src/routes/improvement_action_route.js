'use strict'

const express = require('express')
const ImprovementActionController = require('../controllers/improvement_action_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     AccionMejora:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         acmeDescripcion:
 *           type: string
 *           example: Descripcion de la accion
 *         acmePeso:
 *           type: number
 *           example: 22
 *         procId:
 *           type: number
 *           example: 1
 *         factId:
 *           type: number
 *           example: 1
 *         prinId:
 *           type: number
 *           example: 1
 *         plmeId:
 *           type: number
 *           example: 1
 *         tisiId:
 *           type: number
 *           example: 1
 *
 */

/**
 * @openapi
 * /improvement-action/{id}:
 *   get:
 *     tags:
 *       - Accion Mejora
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la accion
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
 *                   $ref: '#/components/schemas/AccionMejora'
 */
router.get('/improvement-action/:id', authenticateJWT, ImprovementActionController.improvementActionById)

/**
 * @openapi
 * /improvement-action/improvement-plan/{id}:
 *   get:
 *     tags:
 *       - Accion Mejora
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del plan mejoramiento
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
 *                     $ref: '#/components/schemas/AccionMejora'
 */
router.get('/improvement-action/improvement-plan/:id', authenticateJWT, ImprovementActionController.getImprovementActionByPlmeId)

/**
 * @openapi
 * /improvement-action:
 *   get:
 *     tags:
 *       - Accion Mejora
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
 *                     $ref: '#/components/schemas/AccionMejora'
 */
router.get('/improvement-action', authenticateJWT, ImprovementActionController.getImprovementActionAll)

/**
 * @openapi
 * /improvement-action:
 *   post:
 *     tags:
 *       - Accion Mejora
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
 *               acmeDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la accion de mejora"
 *               acmePeso:
 *                 type: number
 *                 example: 25
 *                 description: "Peso de la accion"
 *               procId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del proceso"
 *               factId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del factor"
 *               prinId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del programa de inversion"
 *               plmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del plan de mejoramiento"
 *               tisiId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo de situacion"
 *             required:
 *               - acmeDescripcion
 *               - procId
 *               - factId
 *               - prinId
 *               - plmeId
 *               - tisiId
 *
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccionMejora'
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
router.post('/improvement-action', authenticateJWT, ImprovementActionController.createImprovementAction)

/**
 * @openapi
 * /improvement-action/{id}:
 *   put:
 *     tags:
 *       - Accion Mejora
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la accion de mejora
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
 *               acmeDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la accion de mejora"
 *               acmePeso:
 *                 type: number
 *                 example: 25
 *                 description: "Peso de la accion de mejora"
 *               procId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del proceso"
 *               factId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del factor"
 *               prinId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del programa de inversion"
 *               plmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del plan de mejoramiento"
 *               tisiId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del tipo de situacion"
 *             required:
 *               - acmeDescripcion
 *               - procId
 *               - factId
 *               - prinId
 *               - plmeId
 *               - tisiId
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccionMejora'
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
router.put('/improvement-action/:id', authenticateJWT, ImprovementActionController.updateImprovementAction)

/**
 * @openapi
 * /improvement-action/improvement-plan/{id}/factor/{factor}:
 *   get:
 *     tags:
 *       - Accion Mejora
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del plan mejoramiento
 *        schema:
 *        type: number
 *      - name: factor
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
 *                     $ref: '#/components/schemas/AccionMejora'
 */
router.get('/improvement-action/improvement-plan/:id/factor/:factor', authenticateJWT, ImprovementActionController.getImprovementActionByPlmeIdAndFactId)

module.exports = router