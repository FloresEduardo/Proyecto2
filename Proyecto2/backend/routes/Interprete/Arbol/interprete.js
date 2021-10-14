let TipoInstruccion = require('./Tipos/tipo-instruccion').TipoInstruccion;
let ejecutarImprimir = require('./Instrucciones/imprimir').ejecutarImprimir;
let ejecutarDeclaracion = require('./Instrucciones/declaracion').ejecutarDeclaracion;
let ejecutarDeclaracionArray = require('./Instrucciones/declaracion').ejecutarDeclaracionArray;
let procesarExpresion = require('./Operaciones/operar').procesarExpresion;
//let ejecutarIf = require('./Instrucciones/sentencia-if').ejecutarIf;
let TS = require('./tabla-simbolos').TS;

function ejecutar(instrucciones, tss){
    let valor;
    let error = '';
    let salida = {tipo: '', valor: '', linea: '', columna: '', error: ''};
    const ts = new TS(tss);
    
    instrucciones.forEach((instruccion) => {
        //console.log(instrucciones);
        switch(instruccion.tipo)
        {
            case TipoInstruccion.Declaracion:
                valor = ejecutarDeclaracion(instruccion, ts);
                //console.log(valor);
                valor.error != undefined ? (salida.error += valor.error) : '';
                //salida.valor += String(valor.valor) + "\n";
                
                console.log(salida);
                break;
            case TipoInstruccion.Imprimir:
                valor = ejecutarImprimir(instruccion, ts);
                valor.error != undefined ? (salida.error += valor.error) : '';
                salida.valor += String(valor.valor) + "\n";
                console.log(salida);
                break;
            case TipoInstruccion.If:
                valor = ejecutarIf(instruccion, ts);
                valor.error != undefined ? (salida.error += valor.error) : '';
                salida.valor += String(valor.valor) + "\n";
                console.log(salida);
                break;
            case TipoInstruccion.While:
                valor = ejecutarWhile(instruccion, ts);
        }
    });
    return salida;
}

function ejecutarIf(instruccion, ts)
{
    let valor = procesarExpresion(instruccion.expresion, ts);
    let salidaL;
    //console.log(salida);
    if(valor.valor)
    {
        salidaL = ejecutar(instruccion.cuerpoIf, ts);
    }
    else
    {
        //console.log(instruccion.cuerpoElse);
        salidaL = ejecutar(instruccion.cuerpoElse, ts);
    }
    return salidaL;
}

function ejecutarWhile(instruccion, ts)
{
    let valor = procesarExpresion(instruccion.expresion, ts);
    while(valor.valor)
    {
        const tsWhile = new TS(ts.simbolos)
    }
}

module.exports.ejecutar = ejecutar;