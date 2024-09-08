const {Ejecucion, Tarea, Usuario} = require('../models/associations_model')

const createExecution = async (req, res) => {
    const {ejecDescripcion, tareId, ejecAvance, ejecFechaEjecucion, ejecSemestre, ejecAnio, usuaId} = req.body;
    try {
        const newExecution = await Ejecucion.create({
            ejecDescripcion, tareId, ejecAvance, ejecFechaEjecucion, ejecSemestre, ejecAnio, usuaId
        });
        res.status(201).json(newExecution);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Ha ocurrido un error registrando la ejecucion'});
    }
};
// Controller method to get a todo by ID
const executionById = async (req, res) => {
    const id = req.params.id;
    try {
        const eje = await Ejecucion.findByPk(id);
        if (eje) {
            res.json(eje);
        } else {
            res.status(404).json({error: 'Execution not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error consultando la ejecucion.'});
    }
};


const getExecutionsAll = async (req, res) => {
    try {
        const exes = await Ejecucion.findAll({include: Tarea});

        if (exes) {
            res.json(exes);
        } else {
            res.status(404).json({error: 'Executions not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error consultando las ejecuciones'});
    }
};

const getExecutionsByTareId = async (req, res) => {
    const id = req.params.id;
    try {
        const exes = await Ejecucion.findAll({where: {tareId: id}, include: [Tarea, Usuario]});

        if (exes) {
            res.json(exes);
        } else {
            res.status(404).json({error: 'Executions not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error consultando las ejecuciones'});
    }
};


// Controller method to update a todo by ID
const updateExecution = async (req, res) => {
    const id = req.params.id;
    const {ejecDescripcion, tareId, ejecAvance, ejecFechaEjecucion, ejecSemestre, ejecAnio, usuaId} = req.body;
    try {
        const exe = await Ejecucion.findByPk(id);
        if (exe) {
            exe.ejecDescripcion = ejecDescripcion
            exe.tareId = tareId
            exe.ejecAvance = ejecAvance
            exe.ejecFechaEjecucion = ejecFechaEjecucion
            exe.ejecSemestre = ejecSemestre
            exe.ejecAnio = ejecAnio
            exe.usuaId = usuaId
            await exe.save();
            res.json(exe);
        } else {
            res.status(404).json({error: 'Ejecucion not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error actualizando la ejecucion'});
    }
};

module.exports = {
    createExecution,
    executionById,
    updateExecution,
    getExecutionsAll,
    getExecutionsByTareId
}