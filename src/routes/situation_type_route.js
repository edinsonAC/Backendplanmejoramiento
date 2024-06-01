'use strict'

const express = require('express')
const SituationTypeController = require('../controllers/situation_type_controller')
const router = express.Router()
const authenticateJWT = require('../middleware/jwt_guard')

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoSituacion:
 *       type: object
 *       properties:
 *         tisiId:
 *           type: number
 *           example: 1
 *         tisiNombre:
 *           type: string
 *           example: Situacion test
 */


/**
 * @openapi
 * /situation_type/{id}:
 *   get:
 *     tags:
 *       - Tipo situacion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de tipo situacion
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
 *                   $ref: '#/components/schemas/TipoSituacion'
 */
router.get('/situation_type/:id', authenticateJWT, SituationTypeController.situationTypeById)

/**
 * @openapi
 * /situation_type:
 *   get:
 *     tags:
 *       - Tipo situacion
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
 *                     $ref: '#/components/schemas/TipoSituacion'
 */
router.get('/situation_type', authenticateJWT, SituationTypeController.getSituationTypeAll)

/**
 * @openapi
 * /situation_type:
 *   post:
 *     tags:
 *       - Tipo situacion
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tisiNombre:
 *                 type: string
 *                 example: "Situacion prueba"
 *                 description: "El nombre de la situacion"
 *             required:
 *               - tisiNombre
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoSituacion'
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
router.post('/situation_type', authenticateJWT, SituationTypeController.createSituationType)

/**
 * @openapi
 * /situation_type/{id}:
 *   put:
 *     tags:
 *       - Tipo situacion
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de tipo situacion
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
 *               tisiNombre:
 *                 type: string
 *                 example: "situacion test"
 *                 description: "El nombre de la situacion"
 *             required:
 *               - tisiNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoSituacion'
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
router.put('/situation_type/:id', authenticateJWT, SituationTypeController.updateSituationType)


module.exports = router