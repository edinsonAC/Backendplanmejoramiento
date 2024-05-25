const {EjeEstrategico, LineaEstrategica} = require('../models/associations_model')

const createStrategicLine = async (req, res) => {
    const {liesNombre, ejesId, liesObjetivos} = req.body;
    try {
        const newLinea = await LineaEstrategica.create({
            liesNombre,
            liesObjetivos,
            ejesId
        });
        res.status(201).json(newLinea);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const strategicLineById = async (req, res) => {
    const id = req.params.id;
    try {
        const linea = await LineaEstrategica.findByPk(id, {include: EjeEstrategico});
        if (linea) {
            res.json(linea);
        } else {
            res.status(404).json({error: 'Linea not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getStrategicLineAll = async (req, res) => {
    try {
        const lineas = await LineaEstrategica.findAll({include: EjeEstrategico});
        if (lineas) {
            res.json(lineas);
        } else {
            res.status(404).json({error: 'Linea not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateStrategicLine = async (req, res) => {
    const id = req.params.id;
    const {liesNombre, liesObjetivos, ejesId} = req.body;
    try {
        const line = await LineaEstrategica.findByPk(id);
        if (line) {
            line.liesNombre = liesNombre;
            line.liesObjetivos = liesObjetivos;
            line.ejesId = ejesId;
            await line.save();
            res.json(line);
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
        const item = await LineaEstrategica.findByPk(id);
        if (item) {
            await item.destroy();
            res.json(item);
        } else {
            res.status(404).json({error: 'Tipo Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createStrategicLine,
    strategicLineById,
    updateStrategicLine,
    getStrategicLineAll
}