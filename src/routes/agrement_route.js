'use strict'

const express = require('express')
const AgrementController = require('../controllers/agrement_controller')
const router = express.Router()
const authenticateJWT = require('../middleware/jwt_guard')

/**
 * @swagger
 * components:
 *   schemas:
 *     securitySchemes:
 *       Authorization:
 *         type: "http"
 *         scheme: "bearer"
 *         bearerFormat: "JWT"
 *         value: "Bearer <JWT token here>"
 *
 *     Acuerdo:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         acueNombre:
 *           type: string
 *           example: Acreditacion
 *         acueDescripcion:
 *           type: string
 *           example: test descripcion
 */


/**
 * @openapi
 * /agrement/{id}:
 *   get:
 *     tags:
 *       - Acuerdos
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del acuerdo
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
 *                   $ref: '#/components/schemas/Acuerdo'
 */
router.get('/agrement/:id', authenticateJWT, AgrementController.agrementById)

/**
 * @openapi
 * /agrement:
 *   get:
 *     tags:
 *       - Acuerdos
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
 *                     $ref: '#/components/schemas/Acuerdo'
 */
router.get('/agrement', AgrementController.getAgrementAll)

/**
 * @openapi
 * /agrement:
 *   post:
 *     tags:
 *       - Acuerdos
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
 *               acueNombre:
 *                 type: string
 *                 example: "Acreditacion"
 *                 description: "El nombre del acuerdo"
 *               acueDescripcion:
 *                 type: string
 *                 example: "Descripcion de acuerdo"
 *                 description: "Descripcion de acuerdo"
 *             required:
 *               - acueNombre
 *               - acueDescripcion
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Acuerdo'
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
router.post('/agrement', authenticateJWT, AgrementController.createAgrement)

/**
 * @openapi
 * /agrement/{id}:
 *   put:
 *     tags:
 *       - Acuerdos
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del acuerdo
 *        schema:
 *        type: number
 *     requestBody:
 *       description: Datos necesarios para editar un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               acueNombre:
 *                 type: string
 *                 example: "Acreditacion"
 *                 description: "El nombre del acuerdo"
 *               acueDescripcion:
 *                 type: string
 *                 example: "test"
 *                 description: "Descripcion del acuerdo"
 *             required:
 *               - acueNombre
 *               - acueDescripcion
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Acuerdo'
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
router.put('/agrement/:id', authenticateJWT, AgrementController.updateAgrement)


module.exports = router