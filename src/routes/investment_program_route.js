'use strict'

const express = require('express')
const InvestmentProgramController = require('../controllers/investment_program_controller')
const authenticateJWT = require('../middleware/jwt_guard')
const router = express.Router()

/**
 * @openapi
 * components:
 *   schemas:
 *     ProgramaInversion:
 *       type: object
 *       properties:
 *         prinId:
 *           type: number
 *           example: 1
 *         prinNombre:
 *           type: string
 *           example: programa inversion ejemplo
 *         liesId:
 *           type: number
 *           example: 1
 */

/**
 * @openapi
 * /investment-program/{id}:
 *   get:
 *     tags:
 *       - Programa inversion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del programa de inversion
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
 *                   $ref: '#/components/schemas/ProgramaInversion'
 */
router.get('/investment-program/:id', authenticateJWT, InvestmentProgramController.investmentProgramById)

/**
 * @openapi
 * /investment-program:
 *   get:
 *     tags:
 *       - Programa inversion
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
 *                     $ref: '#/components/schemas/ProgramaInversion'
 */
router.get('/investment-program', authenticateJWT, InvestmentProgramController.getInvestmentProgramAll)

/**
 * @openapi
 * /investment-program:
 *   post:
 *     tags:
 *       - Programa inversion
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
 *               prinNombre:
 *                 type: string
 *                 example: "Prueba programa inversion"
 *                 description: "El nombre del rograma inversion"
 *               liesId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la linea estrategica"
 *             required:
 *               - prinNombre
 *               - liesId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgramaInversion'
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
router.post('/investment-program', authenticateJWT, InvestmentProgramController.createInvestmentProgram)

/**
 * @openapi
 * /investment-program/{id}:
 *   put:
 *     tags:
 *       - Programa inversion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del programa inversion
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
 *               prinNombre:
 *                 type: string
 *                 example: "Prueba Programa inversion"
 *                 description: "El nombre del programa"
 *               liesId:
 *                 type: number
 *                 example: 1
 *                 description: "El id de la linea estrategica"
 *             required:
 *               - prinNombre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgramaInversion'
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
router.put('/investment-program/:id', authenticateJWT, InvestmentProgramController.updateInvestmentProgram)

/**
 * @openapi
 * /investment-program/strategic-line/{id}:
 *   get:
 *     tags:
 *       - Programa inversion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID de la linea estrategica
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
 *                     $ref: '#/components/schemas/ProgramaInversion'
 */
router.get('/investment-program/strategic-line/:id', authenticateJWT, InvestmentProgramController.getInvestmenProgramAllByLiesId)

/**
 * @openapi
 * /investment-program/improvement-plan/{id}:
 *   get:
 *     tags:
 *       - Programa inversion
 *     security:
 *       - Authorization: []
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del plan de mejoramiento
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
 *                     $ref: '#/components/schemas/ProgramaInversion'
 */
router.get('/investment-program/improvement-plan/:id', authenticateJWT, InvestmentProgramController.getInvestmenProgramAllByPlmeId)


module.exports = router