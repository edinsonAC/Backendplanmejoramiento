'use strict'

const express = require('express')
const TipoUsuarioController = require('../controllers/user_type_controller')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoUsuario:
 *       type: object
 *       properties:
 *         tiusId:
 *           type: number
 *           example: 1
 *         tiusNombre:
 *           type: string
 *           example: Director de programa
 */


/**
 * @openapi
 * /user_type:
 *   get:
 *     tags:
 *       - Tipo usuario
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
 *                     $ref: '#/components/schemas/TipoUsuario'
 */
router.get('/user_type', TipoUsuarioController.getUserTypeAll)


module.exports = router