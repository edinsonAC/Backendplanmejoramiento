const AdminModel = require("../models/admin_model");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const ID_CLIENT_GOOGLE = process.env.ID_CLIENT_GOOGLE;
const SECRET_JWT = process.env.SECRET_JWT;
const saltRounds = 12;

const verify = async (req, res) => {
    const {tiusId, token} = req.body;

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
}


const loginAdmin = async (req, res) => {
    const {usuario, password} = req.body;
    try {

        const userBd = await AdminModel.findOne({where: {admiUsuario: usuario}});

        if (userBd) {
            bcrypt.compare(password, userBd.admiClave, function (err, result) {
                // result == true
                console.log(" ------ - - - - -cual es el result", result)
                if (result) {
                    const payload = {
                        user: userBd.admiUsuario,
                        tius: 0
                    };
                    token = jwt.sign(payload, SECRET_JWT, {
                        expiresIn: 7200
                    });
                    return res.status(200).json({token: 'Bearer ' + token});
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

module.exports = {
    generateHash,
    loginAdmin
}