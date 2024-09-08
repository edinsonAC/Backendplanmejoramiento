'use strict'

const express = require('express')
const UsuarioController = require('../controllers/user_controller')
const router = express.Router()
const authenticateJWT = require('../middleware/jwt_guard')


/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         usuaId:
 *           type: number
 *           example: 1
 *         usuaNombre:
 *           type: string
 *           example: Anderson
 *         usuaApellido:
 *           type: string
 *           example: Navarro
 *         pracId:
 *           type: number
 *           example: 1
 */


/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *       - Usuario
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
 *                     $ref: '#/components/schemas/Usuario'
 */
router.get('/user',authenticateJWT, UsuarioController.getUserAll)

/**
 * @openapi
 * /user/improvement-plan:
 *   get:
 *     tags:
 *       - Usuario
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
 *                     $ref: '#/components/schemas/Usuario'
 */
router.get('/user/improvement-plan/:id',authenticateJWT, UsuarioController.getUserByPlmeId)

module.exports = router