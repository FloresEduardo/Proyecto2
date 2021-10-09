let procesarExpresion = require('../Operaciones/operar').procesarExpresion;

function ejecutarImprimir(instruccion, ts)
{
    let valor = procesarExpresion(instruccion.expresion, ts);
    valor.valor + '\n';
    let salida = valor;
    //console.log(salida);
    return salida;
}
module.exports.ejecutarImprimir = ejecutarImprimir;