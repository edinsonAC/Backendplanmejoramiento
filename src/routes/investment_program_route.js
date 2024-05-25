'use strict'

const express = require('express')
const InvestmentProgramController = require('../controllers/investment_program_controller')
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
 * /investment_program/{id}:
 *   get:
 *     tags:
 *       - Programa inversion
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
router.get('/investment_program/:id', InvestmentProgramController.investmentProgramById)

/**
 * @openapi
 * /investment_program:
 *   get:
 *     tags:
 *       - Programa inversion
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
router.get('/investment_program', InvestmentProgramController.getInvestmentProgramAll)

/**
 * @openapi
 * /investment_program:
 *   post:
 *     tags:
 *       - Programa inversion
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
router.post('/investment_program', InvestmentProgramController.createInvestmentProgram)

/**
 * @openapi
 * /investment_program/{id}:
 *   put:
 *     tags:
 *       - Programa inversion
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
router.put('/investment_program/:id', InvestmentProgramController.updateInvestmentProgram)

module.exports = router