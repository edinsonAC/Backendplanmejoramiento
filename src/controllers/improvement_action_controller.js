const {
    AccionMejora,
    PlanMejoramiento,
    ProgramaInversion,
    Factor,
    TipoSituacion,
    Proceso
} = require('../models/associations_model')

const createImprovementAction = async (req, res) => {
    const {acmeDescripcion, procId, factId, tisiId, prinId, plmeId} = req.body;
    try {
        const newAction = await AccionMejora.create({
            acmeDescripcion,
            procId,
            factId,
            tisiId,
            prinId,
            plmeId
        });
        res.status(201).json(newAction);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const improvementActionById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await AccionMejora.findByPk(id, {
            include: [
                Proceso,
                Factor,
                TipoSituacion,
                ProgramaInversion,
                PlanMejoramiento
            ]
        });
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Action not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getImprovementActionAll = async (req, res) => {
    try {
        const actions = await AccionMejora.findAll({
            include: [
                Proceso,
                Factor,
                TipoSituacion,
                ProgramaInversion,
                PlanMejoramiento
            ]
        });
        if (actions) {
            res.json(actions);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getImprovementActionByPlmeId = async (req, res) => {
    const id = req.params.id;
    try {
        const actions = await AccionMejora.findAll({
            where: {plmeId: id},
            include: [
                Proceso,
                Factor,
                TipoSituacion,
                ProgramaInversion,
                PlanMejoramiento
            ]
        });
        if (actions) {
            res.json(actions);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateImprovementAction = async (req, res) => {
    const id = req.params.id;
    const {acmeDescripcion, procId, factId, tisiId, prinId, plmeId} = req.body;
    try {
        const action = await AccionMejora.findByPk(id);
        if (action) {
            action.acmeDescripcion = acmeDescripcion;
            action.procId = procId;
            action.factId = factId;
            action.tisiId = tisiId;
            action.prinId = prinId;
            action.plmeId = plmeId;
            await action.save();
            res.json(action);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createImprovementAction,
    improvementActionById,
    getImprovementActionAll,
    getImprovementActionByPlmeId,
    updateImprovementAction
}