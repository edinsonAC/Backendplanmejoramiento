const Responsable = require('../models/responsible_model')

const createResponsible = async (req, res) => {
    const {respNombre} = req.body;
    try {
        const newRes = await Responsable.create({
            respNombre
        });
        res.status(201).json(newRes);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const responsibleById = async (req, res) => {
    const id = req.params.id;
    try {
        const resp = await Responsable.findByPk(id);
        if (resp) {
            res.json(resp);
        } else {
            res.status(404).json({error: 'Responsable not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getResponsibleAll = async (req, res) => {
    try {
        const responsible = await Responsable.findAll();
        if (responsible) {
            res.json(responsible);
        } else {
            res.status(404).json({error: 'Responsible not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateResponsible = async (req, res) => {
    const id = req.params.id;
    const {respNombre} = req.body;
    try {
        const todo = await Responsable.findByPk(id);
        if (todo) {
            todo.respNombre = respNombre;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Responsible not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteResponsible = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Responsable.findByPk(id);
        if (todo) {
            await todo.destroy();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Responsible not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createResponsible,
    responsibleById,
    updateResponsible,
    getResponsibleAll
}