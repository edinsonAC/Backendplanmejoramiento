'use strict'

const express = require('express')
const ImprovementPlanController = require('../controllers/improvement_plan_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()


/**
 * @openapi
 * components:
 *   schemas:
 *     PlanMejoramiento:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         plmeNombre:
 *           type: string
 *           example: Institucional
 *         pracId:
 *           type: number
 *           example: 1
 *         plmeAnioIncio:
 *           type: number
 *           example: 2022
 *         plmeAnioFin:
 *           type: number
 *           example: 2030
 *         plmeSemestreFin:
 *           type: number
 *           example: 2
 *         plmeSemestreInicio:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /improvement-plan/{id}:
 *   get:
 *     tags:
 *       - Plan Mejoramiento
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
 *                   $ref: '#/components/schemas/PlanMejoramiento'
 */
router.get('/improvement-plan/:id', authenticateJWT, ImprovementPlanController.improvementPlanById)

/**
 * @openapi
 * /improvement-plan/academic-program/{id}:
 *   get:
 *     tags:
 *       - Plan Mejoramiento
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del programa academico
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
 *                     $ref: '#/components/schemas/PlanMejoramiento'
 */
router.get('/improvement-plan/academic-program/:id', authenticateJWT, ImprovementPlanController.getImprovementPlanByPracId)

/**
 * @openapi
 * /improvement-plan:
 *   get:
 *     tags:
 *       - Plan Mejoramiento
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
 *                     $ref: '#/components/schemas/PlanMejoramiento'
 */
router.get('/improvement-plan', authenticateJWT, ImprovementPlanController.getImprovementPlanAll)

/**
 * @openapi
 * /improvement-plan:
 *   post:
 *     tags:
 *       - Plan Mejoramiento
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
 *               plmeNombre:
 *                 type: string
 *                 example: "Prueba Plan"
 *                 description: "El nombre del plan"
 *               pracId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del programa academico"
 *               plmeAnioInicio:
 *                 type: number
 *                 example: 2020
 *                 description: "Año inicial del plan"
 *               plmeAnioFin:
 *                 type: number
 *                 example: 2030
 *                 description: "Año final del plan"
 *             required:
 *               - plmeNombre
 *               - pracId
 *               - plmeSemestreInicio
 *               - plmeSemestreFin
 *               - plmeAnioInicio
 *               - plmeAnioFin
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanMejoramiento'
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
router.post('/improvement-plan', authenticateJWT, ImprovementPlanController.createImprovementPlan)

/**
 * @openapi
 * /improvement-plan/{id}:
 *   put:
 *     tags:
 *       - Plan Mejoramiento
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
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plmeNombre:
 *                 type: string
 *                 example: "Prueba factor"
 *                 description: "El nombre del plan"
 *               pracId:
 *                 type: number
 *                 example: 1
 *                 description: "El id del programa academico"
 *               plmeAnioInicio:
 *                 type: number
 *                 example: 2022
 *                 description: "El año inicial del plan"
 *               plmeAnioFin:
 *                 type: number
 *                 example: 2030
 *                 description: "El año final del plan"
 *               plmeSemestreInicio:
 *                 type: number
 *                 example: 1
 *                 description: "El semestre del año inicial del plan"
 *               plmeSemestreFin:
 *                 type: number
 *                 example: 1
 *                 description: "El semestre del año final del plan"
 *             required:
 *               - plmeNombre
 *               - pracId
 *               - plmeAnioInicio
 *               - plmeAnioFin
 *               - plmeSemestreInicio
 *               - plmeSemestreFin
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanMejoramiento'
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
router.put('/improvement-plan/:id', authenticateJWT, ImprovementPlanController.updateImprovementPlan)


module.exports = router