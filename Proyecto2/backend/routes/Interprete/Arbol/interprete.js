let TipoInstruccion = require('./Tipos/tipo-instruccion').TipoInstruccion;
let ejecutarImprimir = require('./Instrucciones/imprimir').ejecutarImprimir;



function ejecutar(instrucciones){
    let salida = '';
    let ts = [];
    //console.log("entro a ejecutar");
    //console.log(instrucciones);
    
    instrucciones.forEach((instruccion) => {
        
        switch(instruccion.tipo)
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