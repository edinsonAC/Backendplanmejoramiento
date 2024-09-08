const {
    ProgramaInversion,
    LineaEstrategica,
    EjeEstrategico,
    PlanDesarrolloInstitucional,
    PlanMejoramiento
} = require('../models/associations_model')

const createInvestmentProgram = async (req, res) => {
    const {prinNombre, liesId} = req.body;
    try {
        const newProgram = await ProgramaInversion.create({
            prinNombre,
            liesId
        });
        res.status(201).json(newProgram);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const investmentProgramById = async (req, res) => {
    const id = req.params.id;
    try {
        const program = await ProgramaInversion.findByPk(id, {
            include: [{
                model: LineaEstrategica,
                as: 'lineaEstrategica',
                include: [{
                    model: EjeEstrategico,
                    as: 'ejeEstrategico',
                    include: [{
                        model: PlanDesarrolloInstitucional,
                        as: 'planDesarrolloInstitucional'
                    }]
                }]
            }]
        });
        if (program) {
            res.json(program);
        } else {
            res.status(404).json({error: 'Progam not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getInvestmentProgramAll = async (req, res) => {
    try {
        const programs = await ProgramaInversion.findAll({
            include: [{
                model: LineaEstrategica,
                as: 'lineaEstrategica',
                include: [{
                    model: EjeEstrategico,
                    as: 'ejeEstrategico'
                }]
            }]
        });
        if (programs) {
            res.json(programs);
        } else {
            res.status(404).json({error: 'Programs not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getInvestmenProgramAllByLiesId = async (req, res) => {
    try {
        const id = req.params.id;
        const programs = await ProgramaInversion.findAll({
            where: {liesId: id},
            include: [
                LineaEstrategica
            ]
        });
        if (programs) {
            res.json(programs);
        } else {
            res.status(404).json({error: 'No se encuentra el programa'});
        }
    } catch (error) {
        res.status(500).json({error: 'Se ha producido un error listando los programas'});
    }
};

const getInvestmenProgramAllByPlmeId = async (req, res) => {
    try {
        const id = req.params.id;
        const plme = await PlanMejoramiento.findByPk(id)
        let pdi = 0
        if (plme) {
            pdi = plme.pdiId
        }

        const programs = await ProgramaInversion.findAll({
            include: [
                {
                    model: LineaEstrategica,
                    required: true,
                    include: [
                        {
                            model: EjeEstrategico,
                            required: true,
                            where: {pdiId: pdi}
                        }
                    ]
                }
            ]
        })
        if (programs) {
            res.json(programs);
        } else {
            res.status(404).json({error: 'No se encuentra el programa'});
        }
    } catch (error) {
        console.log("?? ", error)
        res.status(500).json({error: 'Se ha producido un error listando los programas'});
    }
};

// Controller method to update a todo by ID
const updateInvestmentProgram = async (req, res) => {
    const id = req.params.id;
    const {prinNombre, liesId} = req.body;
    try {
        const program = await ProgramaInversion.findByPk(id);
        if (program) {
            program.prinNombre = prinNombre;
            program.liesId = liesId;
            await program.save();
            res.json(program);
        } else {
            res.status(404).json({error: 'Programa not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to delete a todo by ID
const deleteA = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await ProgramaInversion.findByPk(id);
        if (item) {
            await item.destroy();
            res.json(item);
        } else {
            res.status(404).json({error: 'ProgramaInversion not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createInvestmentProgram,
    investmentProgramById,
    updateInvestmentProgram,
    getInvestmentProgramAll,
    getInvestmenProgramAllByLiesId,
    getInvestmenProgramAllByPlmeId,
}