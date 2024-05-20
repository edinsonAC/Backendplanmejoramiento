'use strict'

const express = require('express')
const AcademicProgramController = require('../controllers/academic_program_controller')
const router = express.Router()


/**
 * @openapi
 * /academic_program/{id}:
 *   get:
 *     tags:
 *       - Programas academicos
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
 *                     type: object
 */
router.get('/academic_program/:id', AcademicProgramController.academicProgramById)

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
 *                     type: object
 */
router.get('/academic_program', AcademicProgramController.getAcademicProgramAll)

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
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 pracNombre:
 *                   type: string
 *                   example: "Ingenieria de Sistemas"
 *                 pracCodigo:
 *                   type: string
 *                   example: "115"
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
router.post('/academic_program', AcademicProgramController.createAcademicProgram)
router.put('/academic_program/:id', AcademicProgramController.updateAcademicProgram)
router.delete('/academic_program/:id', AcademicProgramController.deleteAcademicProgram)


module.exports = router