'use strict'

const express = require('express')
const ResponsibleController = require('../controllers/responsible_controller')
const router = express.Router()
const authenticateJWT = require('../middleware/jwt_guard')

/**
 * @swagger
 * components:
 *   schemas:
 *     Responsable:
 *       type: object
 *       properties:
 *         respId:
 *           type: number
 *           example: 1
 *         respNombre:
 *           type: string
 *           example: Responsable test
 */

/**
 * @openapi
 * /responsible/{id}:
 *   get:
 *     tags:
 *       - Responsables
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de responsable
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
 *                   $ref: '#/components/schemas/Responsable'
 */
router.get('/responsible/:id', authenticateJWT, ResponsibleController.responsibleById)

/**
 * @openapi
 * /responsible:
 *   get:
 *     tags:
 *       - Responsables
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
 *                     $ref: '#/components/schemas/Responsable'
 */
router.get('/responsible', authenticateJWT, ResponsibleController.getResponsibleAll)

/**
 * @openapi
 * /responsible:
 *   post:
 *     tags:
 *       - Responsables
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               respNombre:
 *                 type: string
 *                 example: "Responsable prueba"
 *                 description: "El nombre del responsable"
 *             required:
 *               - respNombre
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Responsable'
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
router.post('/responsible', authenticateJWT, ResponsibleController.createResponsible)

/**
 * @openapi
 * /responsible/{id}:
 *   put:
 *     tags:
 *       - Responsables
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del responsable
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
 *               respNombre:
 *                 type: string
 *                 example: "Responsable test"
 *                 description: "El nombre del responsable"
 *             required:
 *               - respNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Responsable'
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
router.put('/responsible/:id', authenticateJWT, ResponsibleController.updateResponsible)


module.exports = router