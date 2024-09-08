'use strict'

const express = require('express')
const ExecutionController = require('../controllers/execution_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     Ejecucion:
 *       type: object
 *       properties:
 *         ejecId:
 *           type: number
 *           example: 1
 *         ejecDescripcion:
 *           type: string
 *           example: Descripcion de la tarea
 *         ejecAvance:
 *           type: string
 *           example: avance de la ejecucion
 *         ejecFechaEjecucion:
 *           type: string
 *           example: 2024-06-02
 *         usuaId:
 *           type: number
 *           example: 1
 *         ejecSemestre:
 *           type: number
 *           example: 1
 *         ejecAnio:
 *           type: number
 *           example: 2022
 *
 */

/**
 * @openapi
 * /execution/{id}:
 *   get:
 *     tags:
 *       - Ejecucion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la ejecucion
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
 *                   $ref: '#/components/schemas/Ejecucion'
 */
router.get('/execution/:id', authenticateJWT, ExecutionController.executionById)

/**
 * @openapi
 * /execution/task/{id}:
 *   get:
 *     tags:
 *       - Ejecucion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la tarea
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
 *                     $ref: '#/components/schemas/Ejecucion'
 */
router.get('/execution/task/:id', authenticateJWT, ExecutionController.getExecutionsByTareId)

/**
 * @openapi
 * /execution:
 *   get:
 *     tags:
 *       - Ejecucion
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
 *                     $ref: '#/components/schemas/Ejecucion'
 */
router.get('/execution', authenticateJWT, ExecutionController.getExecutionsAll)

/**
 * @openapi
 * /execution:
 *   post:
 *     tags:
 *       - Ejecucion
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
 *               ejecDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la ejecucion"
 *               ejecAvance:
 *                 type: string
 *                 example: "25%"
 *                 description: "avance de la ejecucion"
 *               tareId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la tarea"
 *               ejecFechaEjecucion:
 *                 type: string
 *                 example: "2024-06-02"
 *                 description: "fecha de la ejecucion"
 *               usuaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del usuario"
 *               ejecSemestre:
 *                 type: number
 *                 example: 1
 *                 description: "semestre del año"
 *               ejecAnio:
 *                 type: number
 *                 example: 2023
 *                 description: "Año"
 *             required:
 *               - ejecDescripcion
 *               - ejecAvance
 *               - tareId
 *               - ejecFechaEjecucion
 *               - ejecSemestre
 *               - ejecAnio
 *               - usuaId
 *
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ejecucion'
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
router.post('/execution', authenticateJWT, ExecutionController.createExecution)

/**
 * @openapi
 * /execution/{id}:
 *   put:
 *     tags:
 *       - Ejecucion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la ejecucion
 *        schema:
 *        type: number
 *     requestBody:
 *       description: Datos necesarios para editar un ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ejecDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la ejecucion"
 *               ejecAvance:
 *                 type: string
 *                 example: "25%"
 *                 description: "Avance de la ejecucion"
 *               tareId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la tarea"
 *               ejecFechaEjecucion:
 *                 type: string
 *                 example: "2024-06-02"
 *                 description: "fecha de la ejecucion"
 *               usuaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del usuario"
 *               ejecSemestre:
 *                 type: number
 *                 example: 1
 *                 description: "semestre de la ejecucion"
 *               ejecAnio:
 *                 type: number
 *                 example: 1
 *                 description: "Año de la ejecucion"
 *             required:
 *               - ejecDescripcion
 *               - ejecAvance
 *               - tareId
 *               - ejecFechaEjecucion
 *               - usuaId
 *               - ejecSemestre
 *               - ejecAnio
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ejecucion'
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
router.put('/execution/:id', ExecutionController.updateExecution)


module.exports = router