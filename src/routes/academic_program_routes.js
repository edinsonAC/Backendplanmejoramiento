'use strict'

const express = require('express')
const AcademicProgramController = require('../controllers/academic_program_controller')
const router = express.Router()


/**
 * @openapi
 * /academic_program_by_id:
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
router.get('/academic_program/:id', AcademicProgramController.academicProgramById)
router.get('/academic_program', AcademicProgramController.getAcademicProgramAll)
router.post('/academic_program', AcademicProgramController.createAcademicProgram)
router.put('/academic_program/:id', AcademicProgramController.updateAcademicProgram)
router.delete('/academic_program/:id', AcademicProgramController.deleteAcademicProgram)


module.exports = router