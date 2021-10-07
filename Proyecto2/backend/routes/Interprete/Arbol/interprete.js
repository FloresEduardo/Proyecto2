let TipoInstruccion = require('./Tipos/tipo-instruccion').TipoInstruccion;
let ejecutarImprimir = require('./Instrucciones/imprimir').ejecutarImprimir;
let ejecutarDeclaracion = require('./Instrucciones/declaracion').ejecutarDeclaracion;
let procesarExpresion = require('./Operaciones/operar').procesarExpresion;
let TS = require('./tabla-simbolos').TS;

function ejecutar(instrucciones, tss){
    let salida = '';
    const ts = new TS(tss);
    
    instrucciones.forEach((instruccion) => {
        
        switch(instruccion.tipo)
        {
            case TipoInstruccion.Declaracion:
                salida += ejecutarDeclaracion(instruccion, ts);
                break;
            case TipoInstruccion.Imprimir:
                salida += ejecutarImprimir(instruccion, ts)
                break;
        }
    });
    return salida;
}

module.exports.ejecutar = ejecutar;