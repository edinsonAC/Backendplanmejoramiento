const {
    EjeEstrategico,
    LineaEstrategica,
    ProgramaInversion,
    PlanDesarrolloInstitucional
} = require('../models/associations_model')

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
        res.status(500).json({error: 'Se ha producido un error creando la linea.'});
    }
};
// Controller method to get a todo by ID
const strategicLineById = async (req, res) => {
    const id = req.params.id;
    try {
        const linea = await LineaEstrategica.findByPk(id, {
            include: [{
                model: EjeEstrategico,
                as: 'ejeEstrategico',
                include: [{
                    model: PlanDesarrolloInstitucional,
                    as: 'planDesarrolloInstitucional'
                }]
            }]
        });
        if (linea) {
            res.json(linea);
        } else {
            res.status(404).json({error: 'Linea not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Se ha producido error buscando la linea estrategica'});
    }
};

const getStrategicLineAll = async (req, res) => {
    try {
        const lineas = await LineaEstrategica.findAll({
            include: [{
                model: EjeEstrategico,
                as: 'ejeEstrategico',
                include: [{
                    model: PlanDesarrolloInstitucional,
                    as: 'planDesarrolloInstitucional'
                }]
            }]
        });
        if (lineas) {
            res.json(lineas);
        } else {
            res.status(404).json({error: 'Linea not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Se ha producido un error listando las lineas estrategicas'});
    }
};

const getStrategicLineAllByEjesId = async (req, res) => {
    try {
        const id = req.params.id;
        const lineas = await LineaEstrategica.findAll({
            where: {ejesId: id},
            include: [{
                model: EjeEstrategico,
                as: 'ejeEstrategico',
                include: [{
                    model: PlanDesarrolloInstitucional,
                    as: 'planDesarrolloInstitucional'
                }]
            }]
        });

        if (lineas) {
            res.json(lineas);
        } else {
            res.status(404).json({error: 'No se encuentr la linea'});
        }
    } catch (error) {
        console.log("errr ", error)
        res.status(500).json({error: 'Se ha producido un error listando las lineas estrategicas'});
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
            res.status(404).json({error: 'Linea not found'});
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
            res.status(404).json({error: 'Linea not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createStrategicLine,
    strategicLineById,
    updateStrategicLine,
    getStrategicLineAll,
    getStrategicLineAllByEjesId
}