const {PlanDesarrolloInstitucional} = require('../models/associations_model')

const createDevelopmentPlan = async (req, res) => {
    const {pdiNombre, pdiDescripcion, pdiPeriodo} = req.body;
    try {
        const newPlan = await PlanDesarrolloInstitucional.create({
            pdiNombre,
            pdiDescripcion,
            pdiPeriodo
        });
        res.status(201).json(newPlan);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Ocurrio un error registrando el plan de desarrollo'});
    }
};
// Controller method to get a todo by ID
const developmentPlanById = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await PlanDesarrolloInstitucional.findByPk(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({error: 'Plan de desarrollo no se encuentra'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error consultando el plan'});
    }
};


const getDevelopmentPlanAll = async (req, res) => {
    try {
        const todo = await PlanDesarrolloInstitucional.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Ha ocurrido un error consultando los planes de desarrollo'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error consultando los acuerdos'});
    }
};
// Controller method to update a todo by ID
const updateDevelopmentPlan = async (req, res) => {
    const id = req.params.id;
    const {pdiNombre, pdiDescripcion, pdiPeriodo} = req.body;
    try {
        const item = await PlanDesarrolloInstitucional.findByPk(id);
        if (item) {
            item.pdiNombre = pdiNombre;
            item.pdiDescripcion = pdiDescripcion;
            item.pdiPeriodo = pdiPeriodo;
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
    createDevelopmentPlan,
    developmentPlanById,
    updateDevelopmentPlan,
    getDevelopmentPlanAll
}