const {Factor, TipoFactor} = require('../models/associations_model')

const createFactor = async (req, res) => {
    const {factNombre, tifaId} = req.body;
    try {
        const newFactor = await Factor.create({
            factNombre,
            tifaId
        });
        res.status(201).json(newFactor);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const factorById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Factor.findByPk(id, {include: TipoFactor});
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getFactorAll = async (req, res) => {
    try {
        const factors = await Factor.findAll({include: TipoFactor});
        if (factors) {
            res.json(factors);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateFactor = async (req, res) => {
    const id = req.params.id;
    const {factNombre, tifaId} = req.body;
    try {
        const fact = await Factor.findByPk(id);
        if (fact) {
            fact.factNombre = factNombre;
            fact.tifaId = tifaId;
            await fact.save();
            res.json(fact);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteA = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Factor.findByPk(id);
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
    createFactor,
    factorById,
    updateFactor,
    getFactorAll
}