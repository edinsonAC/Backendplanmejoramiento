'use strict'

const express = require('express')
const DevelopmentController = require('../controllers/development_plan_controller')
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
 *     PlanDesarrollo:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         pdiNombre:
 *           type: string
 *           example: Plan de desarrollo
 *         pdiDescripcion:
 *           type: string
 *           example: test descripcion
 *         pdiPeriodo:
 *           type: string
 *           example: 2020-2030
 */


/**
 * @openapi
 * /development-plan/{id}:
 *   get:
 *     tags:
 *       - Plan Desarrollo
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del plan
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
 *                   $ref: '#/components/schemas/PlanDesarrollo'
 */
router.get('/development-plan/:id', authenticateJWT, DevelopmentController.developmentPlanById)

/**
 * @openapi
 * /development-plan:
 *   get:
 *     tags:
 *       - Plan Desarrollo
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
 *                     $ref: '#/components/schemas/PlanDesarrollo'
 */
router.get('/development-plan', authenticateJWT, DevelopmentController.getDevelopmentPlanAll)

/**
 * @openapi
 * /development-plan:
 *   post:
 *     tags:
 *       - Plan Desarrollo
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
 *              pdiNombre:
 *                 type: string
 *                 example: "Plan de desarrollo"
 *                 description: "El nombre del plan"
 *              pdiDescripcion:
 *                 type: string
 *                 example: "Descripcion de plan"
 *                 description: "Descripcion de plan"
 *              pdiPeriodo:
 *                 type: string
 *                 example: "2020-2030"
 *                 description: "rango de duracion"
 *             required:
 *               - pdiNombre
 *               - pdiDescripcion
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanDesarrollo'
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
router.post('/development-plan', authenticateJWT, DevelopmentController.createDevelopmentPlan)

/**
 * @openapi
 * /development-plan/{id}:
 *   put:
 *     tags:
 *       - Plan Desarrollo
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del plan
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
 *               pdiNombre:
 *                 type: string
 *                 example: "Plan de desarrollo"
 *                 description: "El nombre del plan"
 *               pdiDescripcion:
 *                 type: string
 *                 example: "test"
 *                 description: "Descripcion del plan"
 *               pdiPeriodo:
 *                 type: string
 *                 example: "2020-2030"
 *                 description: "Descripcion del plan"
 *             required:
 *               - pdiNombre
 *               - pdiDescripcion
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanDesarrollo'
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
router.put('/development-plan/:id', authenticateJWT, DevelopmentController.updateDevelopmentPlan)


module.exports = router