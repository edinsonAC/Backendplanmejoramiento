const FactorModel = require('../models/factor_model')

/**
 * @openapi
 * components:
 *   schemas:
 *     Factor:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         factNombre:
 *           type: string
 *           example: Institucional
 */
const createFactor = async (req, res) => {
    const {factNombre, tifaId} = req.body;
    try {
        const newFactor = await FactorModel.create({
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
        const todo = await FactorModel.findByPk(id);
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
        const todo = await FactorModel.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateFactor = async (req, res) => {
    const id = req.params.id;
    const {factNombre, tifaId} = req.body;
    try {
        const fact = await FactorModel.findByPk(id);
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
        const todo = await FactorModel.findByPk(id);
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