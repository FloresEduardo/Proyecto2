let TipoInstruccion = require('./Tipos/tipo-instruccion').TipoInstruccion;
let ejecutarImprimir = require('./Instrucciones/imprimir').ejecutarImprimir;

let salida = '';
let ts = [];

function ejecutar(instrucciones){
    instrucciones.forEach(instruccion => {
        switch(instrucciones.tipo)
        {
            case TipoInstruccion.Declaracion:
                break;
            case TipoInstruccion.Imprimir:
                salida += ejecutarImprimir(instruccion, ts)
                break;
        }
    });
    return salida;
}

module.exports.ejecutar = ejecutar;