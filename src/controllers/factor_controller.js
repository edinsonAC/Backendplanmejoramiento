const {Factor, TipoFactor, Acuerdo} = require('../models/associations_model')

const createFactor = async (req, res) => {
    const {factNombre, tifaId, factDescripcion, acueId} = req.body;
    try {
        const newFactor = await Factor.create({
            factNombre,
            factDescripcion,
            tifaId,
            acueId
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
        const todo = await Factor.findByPk(id, {include: [TipoFactor, Acuerdo]});
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Ha ocurrido un error consultando el factor'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error consultando el factor'});
    }
};


const getFactorAll = async (req, res) => {
    try {
        const factors = await Factor.findAll({include: [TipoFactor, Acuerdo]});
        if (factors) {
            res.json(factors);
        } else {
            res.status(404).json({error: 'Factor no se encuentra'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error consultando los factores'});
    }
};
// Controller method to update a todo by ID
const updateFactor = async (req, res) => {
    const id = req.params.id;
    const {factNombre, tifaId, factDescripcion, acueId} = req.body;
    try {
        const fact = await Factor.findByPk(id);
        if (fact) {
            fact.factNombre = factNombre;
            fact.factDescripcion = factDescripcion;
            fact.tifaId = tifaId;
            fact.acueId = acueId;
            await fact.save();
            res.json(fact);
        } else {
            res.status(404).json({error: 'Factor no se encuentra'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error actalizando el factor'});
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