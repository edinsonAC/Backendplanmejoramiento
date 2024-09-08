const {Usuario, PlanMejoramiento} = require("../models/associations_model");


const getUserAll = async (req, res) => {
    try {
        const users = await Usuario.findAll();
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({error: 'Usuario not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error listando los usuarios'});
    }
};

const getUserByPlmeId = async (req, res) => {
    try {
        const id = req.params.id;
        const plme = await PlanMejoramiento.findByPk(id)
        let acad = 0
        if (plme) {
            acad = plme.pracId
        }
        const users = await Usuario.findAll({where: {pracId: acad}});
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({error: 'Usuario not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error listando los usuarios'});
    }
};


module.exports = {
    getUserAll,
    getUserByPlmeId
}