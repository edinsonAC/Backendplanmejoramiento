const AdminModel = require("../models/admin_model");
const {Usuario} = require("../models/associations_model");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const ID_CLIENT_GOOGLE = process.env.ID_CLIENT_GOOGLE;
const SECRET_JWT = process.env.SECRET_JWT;
const saltRounds = 12;

const login = async (req, res) => {

    try {
        const {tiusId, token, pracId} = req.body;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: ID_CLIENT_GOOGLE,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If the request specified a Google Workspace domain:
        // const domain = payload['hd'];
        const info = jwt.decode(token)
        const domain = info.hd;

        if (domain !== 'ufps.edu.co') {
            return res.status(400).json({error: 'El dominio del correo no pertenece a la universidad.'});
        }

        const user = await Usuario.findOne({where: {usuaCorreo: info.email}})

        if (user) {

            if (user.tiusId != tiusId) {
                return res.status(400).json({error: 'El usuario no pertenece a ese rol.'});
            }

            if (user.pracId != pracId) {
                return res.status(400).json({error: 'El usuario no pertenece a ese programa academico.'});
            }

            const {given_name, family_name, picture} = info;
            user.usuaNombre = given_name
            user.usuaApellido = family_name
            user.usuaFoto = picture
            await user.save()

            const payload = {
                user: user.usuaId,
                tius: user.tiusId
            };
            const token = generateJwt(payload)
            return res.status(200).json({token: 'Bearer ' + token, usuario: user});
        } else {
            info.tiusId = tiusId
            info.pracId = pracId
            let us = await createUser(info)
            const payload = {
                user: us.usuaId,
                tius: us.tiusId
            };
            const token = generateJwt(payload)
            return res.status(201).json({token: 'Bearer ' + token, usuario: us});
        }


    } catch (e) {
        console.log(" >>>>>>>>> ERROR ", e)
        res.status(500).json({error: 'Internal Server Error'});
    }
}


const loginAdmin = async (req, res) => {
    const {usuario, password} = req.body;
    try {

        const userBd = await AdminModel.findOne({where: {admiUsuario: usuario}});

        if (userBd) {
            bcrypt.compare(password, userBd.admiClave, function (err, result) {
                // result == true
                if (result) {
                    const payload = {
                        user: userBd.admiUsuario,
                        tius: 0
                    };
                    const token = generateJwt(payload)
                    return res.status(200).json({usuario: userBd, token: 'Bearer ' + token});
                } else {
                    res.status(401).json({error: 'Credentials incorrect'});
                }
            });
        } else {
            res.status(404).json({error: 'Admin Not Found'});
        }
    } catch (error) {
        console.log(">>>>>>>>> ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const generateHash = async (req, res) => {
    const {password} = req.body;
    try {

        let change = await bcrypt.hash(password, saltRounds)

        if (change) {
            return res.status(200).json({hash: change});
        }

        res.status(500).json({error: 'Internal Server Error'});
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const createUser = async (usuario) => {
    const {given_name, family_name, email, picture, tiusId, pracId} = usuario;
    const user = {
        usuaNombre: given_name,
        usuaApellido: family_name,
        usuaCorreo: email,
        usuaFoto: picture,
        tiusId: tiusId,
        pracId: pracId
    }
    try {
        const newUser = await Usuario.create(user);

        return newUser
    } catch (error) {
        throw Error("No se ha podido registrar el usuario.")
    }
};

const generateJwt = (payload) => {
    try {
        const token = jwt.sign(payload, SECRET_JWT, {
            expiresIn: 7200
        });

        return token
    } catch (e) {
        throw Error("Se ha producido un error creando el token")
    }
}

module.exports = {
    generateHash,
    loginAdmin,
    login
}