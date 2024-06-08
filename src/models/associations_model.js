const TipoFactor = require("./factor_type_model");
const Factor = require("./factor_model");
const EjeEstrategico = require("./strategic_axis_model");
const LineaEstrategica = require("./strategic_line_model");
const ProgramaInversion = require("./investment_program_model");
const ProgramaAcademico = require("./academic_program_model");
const TipoUsuario = require("./user_type_model");
const Usuario = require("./user_model");

const PlanMejoramiento = require("./improvement_plan_model")
const Proyecto = require("./project_model")

ProgramaAcademico.hasMany(Usuario, {foreignKey: 'pracId'});
Usuario.belongsTo(ProgramaAcademico, {foreignKey: 'pracId'});

TipoUsuario.hasMany(Usuario, {foreignKey: 'tiusId'});
Usuario.belongsTo(TipoUsuario, {foreignKey: 'tiusId'});

TipoFactor.hasMany(Factor, {foreignKey: 'tifaId'});
Factor.belongsTo(TipoFactor, {foreignKey: 'tifaId'});

EjeEstrategico.hasMany(LineaEstrategica, {foreignKey: 'ejesId'});
LineaEstrategica.belongsTo(EjeEstrategico, {foreignKey: 'ejesId'});

LineaEstrategica.hasMany(ProgramaInversion, {foreignKey: 'liesId'});
ProgramaInversion.belongsTo(LineaEstrategica, {foreignKey: 'liesId'});

ProgramaAcademico.hasMany(PlanMejoramiento, {foreignKey: 'pracId'});
PlanMejoramiento.belongsTo(ProgramaAcademico, {foreignKey: 'pracId'});

PlanMejoramiento.hasMany(Proyecto, {foreignKey: 'plmeId'});
Proyecto.belongsTo(PlanMejoramiento, {foreignKey: 'plmeId'});


module.exports = {
    Factor,
    TipoFactor,
    EjeEstrategico,
    LineaEstrategica,
    ProgramaInversion,
    ProgramaAcademico,
    Usuario,
    TipoUsuario,
    PlanMejoramiento,
    Proyecto
};