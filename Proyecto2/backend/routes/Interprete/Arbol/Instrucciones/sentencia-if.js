let procesarExpresion = require('../Operaciones/operar').procesarExpresion;
let ejecutar = require('../interprete').ejecutar;

function ejecutarIf(instruccion, ts)
{
    let valor = procesarExpresion(instruccion.expresion, ts);
    valor.valor + '\n';
    let salida = valor;
    //console.log(salida);
    if(valor.valor == true)
    {
        salida = ejecutar([instruccion.cuerpoIf], ts);
    }
    else
    {
        console.log([instruccion.cuerpoElse]);
        salida = ejecutar([instruccion.cuerpoElse], ts);
    }
    return salida;
}
module.exports.ejecutarIf = ejecutarIf;