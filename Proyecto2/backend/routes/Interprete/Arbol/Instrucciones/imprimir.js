let procesarExpresion = require('../Operaciones/operar').procesarExpresion;

function ejecutarImprimir(instruccion, ts)
{
    let valor = procesarExpresion(instruccion.expresion, ts);
    let salida = valor.valor + '\n';
    console.log(salida);
    return salida;
}
module.exports.ejecutarImprimir = ejecutarImprimir;