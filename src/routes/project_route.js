'use strict'

const express = require('express')
const ProjectController = require('../controllers/project_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     Proyecto:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         proyNombre:
 *           type: string
 *           example: proyecto
 *         plmeId:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /project/{id}:
 *   get:
 *     tags:
 *       - Proyecto
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del proyecto
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
 *                   $ref: '#/components/schemas/Proyecto'
 */
router.get('/project/:id', authenticateJWT, ProjectController.projectById)

/**
 * @openapi
 * /project/improvement-plan/{id}:
 *   get:
 *     tags:
 *       - Proyecto
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
 *                     $ref: '#/components/schemas/Proyecto'
 */
router.get('/project/improvement-plan/:id', authenticateJWT, ProjectController.getProjectsByPlmeId)

/**
 * @openapi
 * /project:
 *   get:
 *     tags:
 *       - Proyecto
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
 *                     $ref: '#/components/schemas/Proyecto'
 */
router.get('/project', authenticateJWT, ProjectController.getProjectAll)

/**
 * @openapi
 * /project:
 *   post:
 *     tags:
 *       - Proyecto
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               proyNombre:
 *                 type: string
 *                 example: "Prueba proyecto"
 *                 description: "El nombre del proyecto"
 *               plmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del plan de mejoramiento"
 *             required:
 *               - proyNombre
 *               - plmeId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
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
router.post('/project', authenticateJWT, ProjectController.createProject)

/**
 * @openapi
 * /project/{id}:
 *   put:
 *     tags:
 *       - Proyecto
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del proyecto
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
 *               proyNombre:
 *                 type: string
 *                 example: "Prueba proyecto"
 *                 description: "El nombre del proyecto"
 *               plmeId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del plan de mejoramiento"
 *             required:
 *               - proyNombre
 *               - plmeId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
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
router.put('/project/:id', authenticateJWT, ProjectController.updateProject)

module.exports = router