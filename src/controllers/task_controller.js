const {
    AccionMejora,
    Responsable,
    Usuario,
    Tarea
} = require('../models/associations_model')

const createTask = async (req, res) => {
    const {
        tareNombre,
        tareDescripcion,
        tarePeso,
        tareMeta,
        tareLineaBase,
        tareDocumentoLineaBase,
        acmeId,
        tareFechaInicio,
        tareFechaFin,
        usuaId,
        respId,
        tareRecursos,
        tareMetaPorcentual,
    } = req.body;
    try {

        const tasks = await Tarea.findAll({where: {acmeId: acmeId}});
        let tareOrden = 0
        if (tasks) {
            tareOrden = tasks.length + 1
        }

        const newTask = await Tarea.create({
            tareNombre,
            tareDescripcion,
            tarePeso,
            tareMeta,
            tareLineaBase,
            tareDocumentoLineaBase,
            acmeId,
            tareFechaInicio,
            tareFechaFin,
            usuaId,
            respId,
            tareRecursos,
            tareOrden,
            tareMetaPorcentual
        });
        res.status(201).json(newTask);
    } catch (error) {
        console.log("error ? ", error)
        res.status(500).json({error: 'Se ha producido un error creando la tarea.'});
    }
};
// Controller method to get a todo by ID
const taskById = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Tarea.findByPk(id, {
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({error: 'Task not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getTaskAll = async (req, res) => {
    try {
        const tasks = await Tarea.findAll({
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({error: 'No se han encontrado tareas relacionadas.'});
        }
    } catch (error) {
        res.status(500).json({error: 'Se ha producido un error buscando las tareas.'});
    }
};

const getTaskByAcmeId = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await Tarea.findAll({
            where: {acmeId: id},
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({error: 'No se han encontrado tareas relacionadas.'});
        }
    } catch (error) {
        res.status(500).json({error: 'Se ha producido un error buscando las tareas.'});
    }
};
// Controller method to update a todo by ID
const updateTask = async (req, res) => {
    const id = req.params.id;
    const {
        tareNombre,
        tareDescripcion,
        tarePeso,
        tareMeta,
        tareLineaBase,
        tareDocumentoLineaBase,
        acmeId,
        tareFechaInicio,
        tareFechaFin,
        usuaId,
        respId,
        tareRecursos,
        tareOrden,
        tareMetaPorcentual
    } = req.body;
    try {
        const task = await Tarea.findByPk(id);
        if (task) {
            task.tareNombre = tareNombre;
            task.tareDescripcion = tareDescripcion;
            task.tarePeso = tarePeso;
            task.tareMeta = tareMeta;
            task.tareLineaBase = tareLineaBase;
            task.tareDocumentoLineaBase = tareDocumentoLineaBase;
            task.acmeId = acmeId;
            task.tareFechaInicio = tareFechaInicio;
            task.tareFechaFin = tareFechaFin;
            task.usuaId = usuaId;
            task.respId = respId;
            task.tareRecursos = tareRecursos;
            task.tareOrden = tareOrden;
            task.tareMetaPorcentual = tareMetaPorcentual
            await task.save();
            res.json(task);
        } else {
            res.status(404).json({error: 'Tarea not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ha ocurrido un error actualizando la tarea'});
    }
};

module.exports = {
    createTask,
    taskById,
    getTaskAll,
    getTaskByAcmeId,
    updateTask
}