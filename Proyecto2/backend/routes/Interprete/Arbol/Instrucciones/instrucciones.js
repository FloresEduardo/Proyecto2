let TipoInstruccion = require('../Tipos/tipo-instruccion').TipoInstruccion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;
let TipoOperacion = require('../Tipos/tipo-operacion').TipoOperacion;
let procesarExpresion = require('../Operaciones/operar').procesarExpresion;

let Instrucciones = {
    // num + num
    operacionBinaria: (tipo, operandoIzquierdo, operandoDerecho) => {
        return{
            tipo: tipo,
            operandoIzquierdo: operandoIzquierdo,
            operandoDerecho: operandoDerecho,
            error: undefined
        }
    },

    // - numm
    operacionUnaria: (tipo, operandoIzquierdo) => {
        return{
            tipo: tipo,
            operandoIzquierdo: operandoIzquierdo,
            operandoDerecho: undefined
        }
    },

    // num
    nuevoValor: (tipo, valor, linea, columna) => {
        return {
            tipo: tipo,
            valor: valor,
            linea: linea,
            columna: columna
        }
    },

    ternaria: (tipo, condicion, verdadero, falso) => {
        //let resultTernario = cond ? verdadero : falso;
        return{
            tipo: tipo,
            condicion: condicion,
            verdadero: verdadero,
            falso: falso
        }
    },

    declaracion: (tipo, id, expresion) => {
        return {
            tipo: TipoInstruccion.Declaracion,
            tipo_dato: tipo,
            tipo_dato2: 'Variable',
            id: id,         //devuelve un arreglo, por la L_ID, []
            expresion: expresion    //vector, [EXP] [tipo,Casteo]
        }
    },

    operacionCasteo: (tipoCasteo, expresion) => {
        return {
            tipo: TipoOperacion.Casteo,
            tipoCasteo: tipoCasteo,
            expresion: expresion
        }
    },

    declaracion_array1: (tipo, id, tipoVec, expresion) => {
        if(tipo != tipoVec)
        {
            console.log(`Error Semantico, ${tipo} no es compatible con ${tipoVec}`);
            return {};
        }
        return {
            tipo: TipoInstruccion.Declaracion,
            tipo_dato: tipo,
            tipo_dato2: TipoDato.Vector,
            id: id,
            tamanio: expresion
        }
    },

    declaracion_array2: (tipo, id, listaExpresion) => {
        return {
            tipo: TipoInstruccion.Declaracion,
            tipo_dato: tipo,
            tipo_dato2: TipoDato.Lista,
            id: id,
            listaExpresion: listaExpresion
        }
    },

    declaracion_dynamicList: (tipo, id, tipo2) => {
        if( tipo != tipo2)
        {
            console.log(`Error semantico, ${tipo} no es compatible con ${tipo2}`);
            return {};
        }
        return {
            tipo: TipoInstruccion.Declaracion,
            tipo_dato: tipo,
            tipo_dato2: TipoDato.ListaDynamic,
            id: id,
            tamanio: undefined
        }
    },

    imprimir: (expresion) => {
        return {
            tipo: TipoInstruccion.Imprimir,
            expresion: expresion
        }
    },

    sentenciaIf: (expresion, cuerpoIf, cuerpoElse)=> {
        return{
            tipo: TipoInstruccion.If,
            expresion: expresion,
            cuerpoIf: cuerpoIf,
            cuerpoElse: cuerpoElse
        }
    },

    sentenciaWhile: (expresion, cuerpoWhile) => {
        return{
            tipo: TipoInstruccion.While,
            expresion: expresion,
            cuerpoWhile: cuerpoWhile
        }
    }
}


 function casteo(tipo, expresion) {
    let valor = procesarExpresion(expresion, [])
    switch(tipo)
    {
        case TipoDato.Numero:
            switch(expresion.tipo)
            {
                case TipoDato.Decimal:
                    break;
                case TipoDato.Caracter:
                    break;
                default:
                    break;
            }
            break;
        case TipoDato.Decimal:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    break;
                case TipoDato.Caracter:
                    break;
                default:
                    break;
            }
            break;
        case TipoDato.Cadena:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    break;
                case TipoDato.Decimal:
                    break;
                default:
                    break;
            }
            break;
        case TipoDato.Caracter:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    break;
                default:
                    break;
            }
            break;
    }
    return params
 }

module.exports.Instrucciones = Instrucciones;