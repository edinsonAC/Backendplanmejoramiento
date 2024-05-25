'use strict'

const express = require('express')
const AuthController = require('../controllers/auth_controller')
const router = express.Router()

/**
 * @openapi
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
 *           example: Edinson
 *         usuaApellido:
 *           type: string
 *           example: Antolinez
 *         usuaCorreo:
 *           type: string
 *           example: edinsonarvey@ufps.edu.co
 *         usuaFoto:
 *           type: string
 *           example: https://lh3.googleusercontent.com/a/ACg8ocIj1zhAbBYkxmX-PplhodgzOER5mrThnYGKDWPx6d5a_wLBh3aX=s96-c
 *         tiusId:
 *           type: number
 *           example: 1
 *         pracId:
 *           type: number
 *           example: 1
 */


/**
 * @openapi
 * /generate_hash:
 *   post:
 *     tags:
 *       - Autenticacion
 *     requestBody:
 *       description: Datos necesarios para generar un hash
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: "ufpsadmin2024"
 *                 description: "La clave en text plano"
 *             required:
 *               - password
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hash:
 *                   type: string
 *                   example: "$2b$12$D4tFbr60obN/VGkpyh14/eEgvusSRyjAkgK/0JXaudH7An8ofI1I6"
 *                   description: "Texto encriptado"
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
router.post('/generate_hash', AuthController.generateHash)

/**
 * @openapi
 * /login_admin:
 *   post:
 *     tags:
 *       - Autenticacion
 *     requestBody:
 *       description: Datos necesarios ingresar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "admin"
 *                 description: "usuario del admin"
 *               password:
 *                 type: string
 *                 example: "ufpsadmin2024"
 *                 description: "La clave del admin"
 *             required:
 *               - usuario
 *               - password
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJ0aK1oJdiFQf6yflAyfMEXPUDmXA/VGkpyh14/eEgvusSRyjAkgK/0JXaudH7An8ofI1I6"
 *                   description: "Texto encriptado"
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Clave incorrecta"
 *       404:
 *         description: Usuario incorrecto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se encontroó el admin"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
router.post('/login_admin', AuthController.loginAdmin)

/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - Autenticacion
 *     requestBody:
 *       description: Datos necesarios ingresar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3MTk2NzgzNTFhNWZhZWRjMmU3MDI3NGJiZWE2MmRhMmE4YzRhMTIiLCJ0eXAiOiJKV1QifQ.eyJ"
 *                 description: "Token del usuario logueado con google"
 *               tiusId:
 *                 type: number
 *                 example: 1
 *                 description: "Tipo de usuario"
 *               pracId:
 *                 type: number
 *                 example: 1
 *                 description: "Id del programa acacemico"
 *             required:
 *               - token
 *               - tiusId
 *               - pracId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJ0aK1oJdiFQf6yflAyfMEXPUDmXA/VGkpyh14/eEgvusSRyjAkgK/0JXaudH7An8ofI1I6"
 *                   description: "Texto encriptado"
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJ0aK1oJdiFQf6yflAyfMEXPUDmXA/VGkpyh14/eEgvusSRyjAkgK/0JXaudH7An8ofI1I6"
 *                   description: "Texto encriptado"
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
router.post('/login', AuthController.login)

module.exports = router