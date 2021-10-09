let procesarExpresion = require('../Operaciones/operar').procesarExpresion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;

function ejecutarDeclaracion(instruccion, ts)
{
    let salida;
    let respuestaTS;
    if(instruccion.expresion != undefined)
    {
        let valor = procesarExpresion(instruccion.expresion, ts);
        if(instruccion.id.length > 1)
        {
            instruccion.id.forEach(id => {
                salida = ts.agregar(instruccion.tipo_dato, id, valor);
            });
        }else{  
            salida = ts.agregar(instruccion.tipo_dato, instruccion.id, valor);    
        } 
    }else{
        let valor;
        switch(instruccion.tipo_dato)
        {
            case TipoDato.Booleano:
                valor = {
                    tipo: TipoDato.Booleano,
                    valor: true
                }
                break;
            case TipoDato.Cadena:
                valor = {
                    tipo: TipoDato.Cadena,
                    valor: ""
                }
                break;
            case TipoDato.Caracter:
                valor = {
                    tipo: TipoDato.Caracter,
                    valor: '0'
                }
                break;
            case TipoDato.Decimal:
                valor = {
                    tipo: TipoDato.Decimal,
                    valor: 0.0
                }
                break;
            case TipoDato.Numero:
                    valor = {
                        tipo: TipoDato.Numero,
                        valor: 0
                    }
                    break;
        }
        if(instruccion.id.length > 1)
        {
            instruccion.id.forEach(id => {
                salida = ts.agregar(instruccion.tipo_dato, id, valor);
            });
        }else{  
            salida = ts.agregar(instruccion.tipo_dato, instruccion.id, valor);    
        }
    }
    return salida;
}
module.exports.ejecutarDeclaracion = ejecutarDeclaracion;