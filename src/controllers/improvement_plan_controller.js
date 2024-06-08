const {PlanMejoramiento, ProgramaAcademico} = require('../models/associations_model')

const createImprovementPlan = async (req, res) => {
    const {plmeNombre, pracId} = req.body;
    try {
        const newPlan = await PlanMejoramiento.create({
            plmeNombre,
            pracId
        });
        res.status(201).json(newPlan);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const improvementPlanById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await PlanMejoramiento.findByPk(id, {include: ProgramaAcademico});
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Plan not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getImprovementPlanAll = async (req, res) => {
    try {
        const planes = await PlanMejoramiento.findAll({include: ProgramaAcademico});
        if (planes) {
            res.json(planes);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getImprovementPlanByPracId = async (req, res) => {
    const id = req.params.id;
    try {
        const planes = await PlanMejoramiento.findAll({where: {pracId: id}});
        if (planes) {
            res.json(planes);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateImprovementPlan = async (req, res) => {
    const id = req.params.id;
    const {plmeNombre, pracId} = req.body;
    try {
        const plan = await PlanMejoramiento.findByPk(id);
        if (plan) {
            plan.plmeNombre = plmeNombre;
            plan.pracId = pracId;
            await plan.save();
            res.json(plan);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createImprovementPlan,
    improvementPlanById,
    getImprovementPlanAll,
    getImprovementPlanByPracId,
    updateImprovementPlan
}