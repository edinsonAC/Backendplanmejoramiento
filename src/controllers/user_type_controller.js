const TipoUsuario = require("../models/user_type_model");


const getUserTypeAll = async (req, res) => {
    try {
        const tipos = await TipoUsuario.findAll();
        if (tipos) {
            res.json(tipos);
        } else {
            res.status(404).json({error: 'Tipo de usuario not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


module.exports = {
    getUserTypeAll
}