const {TipoFactor} = require('../models/associations_model')

const createFactorType = async (req, res) => {
    const {tifaNombre} = req.body;
    try {
        const newTipoFactor = await TipoFactor.create({
            tifaNombre
        });
        res.status(201).json(newTipoFactor);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const factorTypeById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TipoFactor.findByPk(id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getFactorTypeAll = async (req, res) => {
    try {
        const todo = await TipoFactor.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateFactorType = async (req, res) => {
    const id = req.params.id;
    const {tifaNombre} = req.body;
    try {
        const todo = await TipoFactor.findByPk(id);
        if (todo) {
            todo.tifaNombre = tifaNombre;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteAcademicProgram = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await TipoFactor.findByPk(id);
        if (todo) {
            await todo.destroy();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Tipo Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createFactorType,
    factorTypeById,
    updateFactorType,
    getFactorTypeAll,
    deleteAcademicProgram
}