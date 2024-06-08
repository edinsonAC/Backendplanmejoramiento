const {Proceso} = require('../models/associations_model')

const createProcess = async (req, res) => {
    const {procNombre} = req.body;
    try {
        const newProc = await Proceso.create({
            procNombre
        });
        res.status(201).json(newProc);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const processById = async (req, res) => {
    const id = req.params.id;
    try {
        const pro = await Proceso.findByPk(id);
        if (pro) {
            res.json(pro);
        } else {
            res.status(404).json({error: 'Process not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getProcessAll = async (req, res) => {
    try {
        const todo = await Proceso.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Process not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateProcess = async (req, res) => {
    const id = req.params.id;
    const {procNombre} = req.body;
    try {
        const todo = await Proceso.findByPk(id);
        if (todo) {
            todo.procNombre = procNombre;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Process not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteProcess = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Proceso.findByPk(id);
        if (todo) {
            await todo.destroy();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Todo not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createProcess,
    processById,
    updateProcess,
    getProcessAll,
}