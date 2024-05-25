'use strict'

const express = require('express')
const AcademicProgramController = require('../controllers/academic_program_controller')
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
 *     ProgramaAcademico:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         pracNombre:
 *           type: string
 *           example: Ingenieria de Sistemasss
 *         pracCodigo:
 *           type: string
 *           example: 115
 */


/**
 * @openapi
 * /academic_program/{id}:
 *   get:
 *     tags:
 *       - Programas academicos
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
 *                   $ref: '#/components/schemas/ProgramaAcademico'
 */
router.get('/academic_program/:id', authenticateJWT, AcademicProgramController.academicProgramById)

/**
 * @openapi
 * /academic_program:
 *   get:
 *     tags:
 *       - Programas academicos
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
 *                     $ref: '#/components/schemas/ProgramaAcademico'
 */
router.get('/academic_program', authenticateJWT, AcademicProgramController.getAcademicProgramAll)

/**
 * @openapi
 * /academic_program/:
 *   post:
 *     tags:
 *       - Programas academicos
 *     requestBody:
 *       description: Datos necesarios para crear un nuevo ítem
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pracNombre:
 *                 type: string
 *                 example: "Ingenieria de Sistemas"
 *                 description: "El nombre del programa academico"
 *               pracCodigo:
 *                 type: string
 *                 example: "115"
 *                 description: "El código del programa academico"
 *             required:
 *               - pracNombre
 *               - pracCodigo
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgramaAcademico'
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
router.post('/academic_program', authenticateJWT, AcademicProgramController.createAcademicProgram)

/**
 * @openapi
 * /academic_program/{id}:
 *   put:
 *     tags:
 *       - Programas academicos
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID del programa academico
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
 *               pracNombre:
 *                 type: string
 *                 example: "Ingenieria de Sistemas"
 *                 description: "El nombre del programa academico"
 *               pracCodigo:
 *                 type: string
 *                 example: "115"
 *                 description: "El código del programa academico"
 *             required:
 *               - pracNombre
 *               - pracCodigo
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgramaAcademico'
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
router.put('/academic_program/:id', authenticateJWT, AcademicProgramController.updateAcademicProgram)
router.delete('/academic_program/:id', authenticateJWT, AcademicProgramController.deleteAcademicProgram)


module.exports = router