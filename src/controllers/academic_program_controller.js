const ProgramaAcademicoModel = require('../models/academic_program_model')

/**
 * @openapi
 * components:
 *   schemas:
 *     ProgramaAcademico:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         pracNombre:
 *           type: string
 *           example: Ingenieria de Sistemas
 *         pracCodigo:
 *           type: string
 *           example: 115
 */
const createAcademicProgram = async (req, res) => {
    const {pracNombre, pracCodigo} = req.body;
    try {
        const newTodo = await ProgramaAcademicoModel.create({
            pracNombre,
            pracCodigo
        });
        res.status(201).json(newTodo);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const academicProgramById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await ProgramaAcademicoModel.findByPk(id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Todo not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

// Controller method to get a todo by ID
const getAcademicProgramAll = async (req, res) => {
    try {
        const todo = await ProgramaAcademicoModel.findAll();
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Todo not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateAcademicProgram = async (req, res) => {
    const id = req.params.id;
    const {pracNombre, pracCodigo} = req.body;
    try {
        const todo = await ProgramaAcademicoModel.findByPk(id);
        if (todo) {
            todo.pracNombre = pracNombre;
            todo.pracCodigo = pracCodigo;
            await todo.save();
            res.json(todo);
        } else {
            res.status(404).json({error: 'Todo not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteAcademicProgram = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await ProgramaAcademicoModel.findByPk(id);
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
    createAcademicProgram,
    academicProgramById,
    updateAcademicProgram,
    getAcademicProgramAll,
    deleteAcademicProgram
}