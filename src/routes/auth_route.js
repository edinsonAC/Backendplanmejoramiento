'use strict'

const express = require('express')
const AuthController = require('../controllers/auth_controller')
const router = express.Router()


/**
 * @openapi
 * /generate_hash:
 *   post:
 *     tags:
 *       - Hash
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
 *       - Hash
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

module.exports = router