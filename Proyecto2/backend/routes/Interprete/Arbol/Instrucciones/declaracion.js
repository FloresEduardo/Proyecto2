let procesarExpresion = require('../Operaciones/operar').procesarExpresion;
let casteo = require('../Operaciones/operar').casteo;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;

function ejecutarDeclaracion(instruccion, ts)
{
    let salida;
    let respuestaTS;
    if(instruccion.tipo_dato2 == 'Variable') // id es un arreglo []
    {
        if(instruccion.expresion != undefined)
        {
            let valor = procesarExpresion(instruccion.expresion, ts);
            instruccion.id.forEach(id => {
                //valor = instruccion.expresion.length > 1 ? casteo(instruccion.expresion, valor) : valor;
                salida = ts.agregar(instruccion.tipo_dato2, instruccion.tipo_dato, id, valor);
            });
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
                instruccion.id.forEach(id => {
                    salida = ts.agregar(instruccion.tipo_dato2, instruccion.tipo_dato, id, valor);
                });
        }
        return salida;
    }
    else    // esto es para Arrayx, Vectores y Listas
    {
        instruccion.id.forEach(id => {
            let vector=[];
            if(instruccion.tipo_dato2 == TipoDato.Vector)
            {
                console.log(instruccion.tamanio[0].valor);
                switch(instruccion.tipo_dato)
                {
                    
                    case TipoDato.Booleano:
                        for(let i=0; i<instruccion.tamanio[0].valor; i++)
                        {
                            vector.push(false);
                        }
                        break;
                    case TipoDato.Cadena:
                        for(let i=0; i<instruccion.tamanio[0].valor; i++)
                        {
                            vector.push("");
                        }
                        break;
                    case TipoDato.Caracter:
                        for(let i=0; i<instruccion.tamanio[0].valor; i++)
                        {
                            vector.push('0');
                        }
                        break;
                    case TipoDato.Decimal:
                        for(let i=0; i<instruccion.tamanio[0].valor; i++)
                        {
                            vector.push(0.0);
                        }
                        break;
                    case TipoDato.Numero:
                        for(let i=0; i<instruccion.tamanio[0].valor; i++)
                        {
                            vector.push(0);
                        }
                        break;
                }
            }
            else if(instruccion.tipo_dato2 == TipoDato.Lista)
             {
                let valor;
                instruccion.listaExpresion.forEach(expresion => {
                    valor = procesarExpresion(expresion[0], ts);
                    valor.tipo == instruccion.tipo_dato ? vector.push(valor) : '';
                });
            }
            // aqui va agregar
            salida = ts.agregar(instruccion.tipo_dato2, instruccion.tipo_dato, id, vector);
        }); 
        return salida;
    }
}

module.exports.ejecutarDeclaracion = ejecutarDeclaracion;