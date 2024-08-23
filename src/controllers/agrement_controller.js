const {Acuerdo} = require('../models/associations_model')

const createAgrement = async (req, res) => {
    const {acueNombre, acueDescripcion} = req.body;
    try {
        const newAgrement = await Acuerdo.create({
            acueNombre,
            acueDescripcion
        });
        res.status(201).json(newAgrement);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Ocurrio un error registrando el acuerdo'});
    }
};
// Controller method to get a todo by ID
const agrementById = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Acuerdo.findByPk(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({error: 'agrement not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error consultando el acuerdo'});
    }
};


const getAgrementAll = async (req, res) => {
    try {
        const todo = await Acuerdo.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'No se encuentran los acuerdos'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error consultando los acuerdos'});
    }
};
// Controller method to update a todo by ID
const updateAgrement = async (req, res) => {
    const id = req.params.id;
    const {acueNombre, acueDescripcion} = req.body;
    try {
        const item = await Acuerdo.findByPk(id);
        if (item) {
            item.acueNombre = acueNombre;
            item.acueDescripcion = acueDescripcion;
            await item.save();
            res.json(item);
        } else {
            res.status(404).json({error: 'Acuerdo no encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error editando el acuerdo'});
    }
};


module.exports = {
    createAgrement,
    agrementById,
    updateAgrement,
    getAgrementAll
}