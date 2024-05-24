const {EjeEstrategico} = require('../models/associations_model')

const createStrategicAxis = async (req, res) => {
    const {ejesNombre} = req.body;
    try {
        const newEjeEstrategico = await EjeEstrategico.create({
            ejesNombre
        });
        res.status(201).json(newEjeEstrategico);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const strategicAxisById = async (req, res) => {
    const id = req.params.id;
    try {
        const eje = await EjeEstrategico.findByPk(id);
        if (eje) {
            res.json(eje);
        } else {
            res.status(404).json({error: 'Eje not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getStrategicAxisAll = async (req, res) => {
    try {
        const ejes = await EjeEstrategico.findAll();
        if (ejes) {
            res.json(ejes);
        } else {
            res.status(404).json({error: 'Ejes not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// Controller method to update a todo by ID
const updateStrategicAxis = async (req, res) => {
    const id = req.params.id;
    const {ejesNombre} = req.body;
    try {
        const eje = await EjeEstrategico.findByPk(id);
        if (eje) {
            eje.ejesNombre = ejesNombre;
            await eje.save();
            res.json(eje);
        } else {
            res.status(404).json({error: 'Eje not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteStrategicAxis = async (req, res) => {
    const id = req.params.id;
    try {
        const eje = await EjeEstrategico.findByPk(id);
        if (eje) {
            await eje.destroy();
            res.json(eje);
        } else {
            res.status(404).json({error: 'Tipo Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createStrategicAxis,
    strategicAxisById,
    updateStrategicAxis,
    getStrategicAxisAll,
}