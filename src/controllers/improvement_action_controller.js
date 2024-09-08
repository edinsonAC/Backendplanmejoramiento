const {
    AccionMejora, PlanMejoramiento, ProgramaInversion, Factor, TipoSituacion, LineaEstrategica, EjeEstrategico
} = require('../models/associations_model')

const createImprovementAction = async (req, res) => {
    const {acmeDescripcion, acmePeso, factId, tisiId, prinId, plmeId} = req.body;
    try {
        let peso = 0;
        const actions = await AccionMejora.findAll({
            where: {plmeId: plmeId, factId: factId},
        });

        if (actions) {
            actions.forEach(act => peso += act.acmePeso)
        }

        let faltante = 100 - peso;
        if (acmePeso > faltante) {
            return res.status(400)
                .json({
                    error: 'El peso total del plan de mejoramiento supera el 100%, la acción no debe superar el ' + faltante + '%'
                });
        }

        const newAction = await AccionMejora.create({
            acmeDescripcion, acmePeso, factId, tisiId, prinId, plmeId
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
            include: [Factor, TipoSituacion, PlanMejoramiento, {
                model: ProgramaInversion, as: 'programaInversion', include: [{
                    model: LineaEstrategica, as: 'lineaEstrategica'
                }]
            },]
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
            include: [Factor, TipoSituacion, ProgramaInversion, PlanMejoramiento]
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
            where: {plmeId: id}, include: [Factor, TipoSituacion, ProgramaInversion, PlanMejoramiento]
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
    const {acmeDescripcion, acmePeso, factId, tisiId, prinId, plmeId} = req.body;
    try {
        let peso = 0;
        const actions = await AccionMejora.findAll({
            where: {plmeId: plmeId, factId: factId},
        });

        if (actions) {
            let filtered = actions.filter(e => e.acmeId != id && e.factId == factId)
            filtered.forEach(act => peso += act.acmePeso)
        }

        let faltante = 100 - peso;
        if (acmePeso > faltante) {
            return res.status(400)
                .json({
                    error: 'El peso total del plan de mejoramiento supera el 100%, la acción no debe superar el ' + faltante + '%'
                });
        }

        const action = await AccionMejora.findByPk(id);
        if (action) {
            action.acmeDescripcion = acmeDescripcion;
            action.factId = factId;
            action.tisiId = tisiId;
            action.prinId = prinId;
            action.plmeId = plmeId;
            action.acmePeso = acmePeso;
            await action.save();
            res.json(action);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getImprovementActionByPlmeIdAndFactId = async (req, res) => {
    const id = req.params.id;
    const factor = req.params.factor;
    try {
        const actions = await AccionMejora.findAll({
            where: {plmeId: id, factId: factor}, include: [Factor, TipoSituacion, ProgramaInversion, PlanMejoramiento]
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

module.exports = {
    createImprovementAction,
    improvementActionById,
    getImprovementActionAll,
    getImprovementActionByPlmeId,
    updateImprovementAction,
    getImprovementActionByPlmeIdAndFactId
}