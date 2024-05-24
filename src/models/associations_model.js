const TipoFactor = require("./factor_type_model");
const Factor = require("./factor_model");
const EjeEstrategico = require("./strategic_axis_model");
const LineaEstrategica = require("./strategic_line_model");
const ProgramaInversion = require("./investment_program_model");

TipoFactor.hasMany(Factor, { foreignKey: 'tifaId' });
Factor.belongsTo(TipoFactor, { foreignKey: 'tifaId' });

EjeEstrategico.hasMany(LineaEstrategica, { foreignKey: 'ejesId' });
LineaEstrategica.belongsTo(EjeEstrategico, { foreignKey: 'ejesId' });

LineaEstrategica.hasMany(ProgramaInversion, { foreignKey: 'liesId' });
ProgramaInversion.belongsTo(LineaEstrategica, { foreignKey: 'liesId' });


module.exports = {
    Factor,
    TipoFactor,
    EjeEstrategico,
    LineaEstrategica,
    ProgramaInversion
};