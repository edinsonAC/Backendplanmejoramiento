const TipoSituacion = require('../models/situation_type_model')

const createSituationType = async (req, res) => {
    const {tisiNombre} = req.body;
    try {
        const newSituation = await TipoSituacion.create({
            tisiNombre
        });
        res.status(201).json(newSituation);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const situationTypeById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TipoSituacion.findByPk(id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo Situation not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getSituationTypeAll = async (req, res) => {
    try {
        const todo = await TipoSituacion.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo situation not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateSituationType = async (req, res) => {
    const id = req.params.id;
    const {tisiNombre} = req.body;
    try {
        const todo = await TipoSituacion.findByPk(id);
        if (todo) {
            todo.tisiNombre = tisiNombre;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Situation not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteSituationType = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TipoSituacion.findByPk(id);
        if (todo) {
            await todo.destroy();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo situation not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createSituationType,
    situationTypeById,
    updateSituationType,
    getSituationTypeAll,
    deleteSituationType
}