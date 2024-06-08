const {Proyecto, PlanMejoramiento} = require('../models/associations_model')

const createProject = async (req, res) => {
    const {proyNombre, plmeId} = req.body;
    try {
        const newProject = await Proyecto.create({
            proyNombre,
            plmeId
        });
        res.status(201).json(newProject);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const projectById = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Proyecto.findByPk(id, {include: PlanMejoramiento});
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({error: 'Project not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getProjectAll = async (req, res) => {
    try {
        const projects = await Proyecto.findAll({include: PlanMejoramiento});
        if (projects) {
            res.json(projects);
        } else {
            res.status(404).json({error: 'Project not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getProjectsByPlmeId = async (req, res) => {
    const id = req.params.id;
    try {
        const projects = await Proyecto.findAll({where: {plmeId: id}});
        if (projects) {
            res.json(projects);
        } else {
            res.status(404).json({error: 'Project not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateProject = async (req, res) => {
    const id = req.params.id;
    const {proyNombre, plmeId} = req.body;
    try {
        const project = await Proyecto.findByPk(id);
        if (project) {
            project.proyNombre = proyNombre;
            project.plmeId = plmeId;
            await project.save();
            res.json(project);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createProject,
    projectById,
    getProjectsByPlmeId,
    getProjectAll,
    updateProject
}