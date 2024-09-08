'use strict'

const express = require('express')
const TaskController = require('../controllers/task_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     Tarea:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         tareNombre:
 *           type: string
 *           example: Nombre de la tarea
 *         tareDescripcion:
 *           type: string
 *           example: Descripcion de la tarea
 *         tarePeso:
 *           type: string
 *           example: peso de la tarea
 *         tareMeta:
 *           type: string
 *           example: meta de la tarea
 *         tareLineaBase:
 *           type: string
 *           example: 10
 *         tareDocumentoLineaBase:
 *           type: string
 *           example: documento de la linea base
 *         tareFechaInicio:
 *           type: string
 *           example: 2024-06-02
 *         tareFechaFin:
 *           type: string
 *           example: 2024-07-02
 *         usuaId:
 *           type: number
 *           example: 1
 *         respId:
 *           type: number
 *           example: 1
 *         tareRecursos:
 *           type: string
 *           example: recursos de la tarea
 *         tareOrden:
 *           type: number
 *           example: 1
 *
 */

/**
 * @openapi
 * /task/{id}:
 *   get:
 *     tags:
 *       - Tarea
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
 *                   $ref: '#/components/schemas/Tarea'
 */
router.get('/task/:id', authenticateJWT, TaskController.taskById)

/**
 * @openapi
 * /task/improvement-action/{id}:
 *   get:
 *     tags:
 *       - Tarea
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la accion de mejora
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
 *                     $ref: '#/components/schemas/Tarea'
 */
router.get('/task/improvement-action/:id', authenticateJWT, TaskController.getTaskByAcmeId)

/**
 * @openapi
 * /task:
 *   get:
 *     tags:
 *       - Tarea
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
 *                     $ref: '#/components/schemas/Tarea'
 */
router.get('/task', authenticateJWT, TaskController.getTaskAll)

/**
 * @openapi
 * /task:
 *   post:
 *     tags:
 *       - Tarea
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tareNombre:
 *                 type: string
 *                 example: "Tarea test"
 *                 description: "Nombre de la tarea"
 *               tareDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la tarea"
 *               tarePeso:
 *                 type: string
 *                 example: "25%"
 *                 description: "Peso de la tarea"
 *               tareMeta:
 *                 type: string
 *                 example: "25%"
 *                 description: "Meta de la tarea"
 *               tareLineaBase:
 *                 type: string
 *                 example: "5"
 *                 description: "linea base de la tarea"
 *               tareDocumentoLineaBase:
 *                 type: string
 *                 example: "www.google.com"
 *                 description: "documento linea base de la tarea"
 *               acmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la accion de mejora"
 *               tareFechaInicio:
 *                 type: string
 *                 example: "2024-06-02"
 *                 description: "fecha inicio de la tarea"
 *               tareFechaFin:
 *                 type: string
 *                 example: "2024-07-02"
 *                 description: "fecha fin de la tarea"
 *               usuaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del usuario"
 *               respId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del cargo"
 *               tareRecursos:
 *                 type: string
 *                 example: "recursos"
 *                 description: "recursos de la tarea"
 *               tareOrden:
 *                 type: number
 *                 example: 1
 *                 description: "Orden de la tarea"
 *             required:
 *               - tareNombre
 *               - tareDescripcion
 *               - tarePeso
 *               - tareMeta
 *               - tareLineaBase
 *               - tareDocumentoLineaBase
 *               - acmeId
 *               - tareFechaInicio
 *               - tareFechaFin
 *               - usuaId
 *               - respId
 *               - tareRecursos
 *               - tareOrden
 *
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarea'
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
router.post('/task', authenticateJWT, TaskController.createTask)

/**
 * @openapi
 * /task/{id}:
 *   put:
 *     tags:
 *       - Tarea
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la tarea
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
 *               tareNombre:
 *                 type: string
 *                 example: "Tarea test"
 *                 description: "Nombre de la tarea"
 *               tareDescripcion:
 *                 type: string
 *                 example: "Descripcion"
 *                 description: "Descripcion de la tarea"
 *               tarePeso:
 *                 type: string
 *                 example: "25%"
 *                 description: "Peso de la tarea"
 *               tareMeta:
 *                 type: string
 *                 example: "25%"
 *                 description: "Meta de la tarea"
 *               tareLineaBase:
 *                 type: string
 *                 example: "5"
 *                 description: "linea base de la tarea"
 *               tareDocumentoLineaBase:
 *                 type: string
 *                 example: "www.google.com"
 *                 description: "documento linea base de la tarea"
 *               acmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la accion de mejora"
 *               tareFechaInicio:
 *                 type: string
 *                 example: "2024-06-02"
 *                 description: "fecha inicio de la tarea"
 *               tareFechaFin:
 *                 type: string
 *                 example: "2024-07-02"
 *                 description: "fecha fin de la tarea"
 *               usuaId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del usuario"
 *               respId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del cargo"
 *               tareRecursos:
 *                 type: string
 *                 example: "recursos"
 *                 description: "recursos de la tarea"
 *               tareOrden:
 *                 type: number
 *                 example: 1
 *                 description: "Orden de la tarea"
 *             required:
 *               - tareNombre
 *               - tareDescripcion
 *               - tarePeso
 *               - tareMeta
 *               - tareLineaBase
 *               - tareDocumentoLineaBase
 *               - acmeId
 *               - tareFechaInicio
 *               - tareFechaFin
 *               - usuaId
 *               - respId
 *               - tareRecursos
 *               - tareOrden
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarea'
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
router.put('/task/:id', authenticateJWT, TaskController.updateTask)


module.exports = router