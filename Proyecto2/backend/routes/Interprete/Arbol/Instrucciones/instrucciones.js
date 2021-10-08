let TipoInstruccion = require('../Tipos/tipo-instruccion').TipoInstruccion;

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
            id: id,
            expresion: expresion
        }
    },

    imprimir: (expresion) => {
        return {
            tipo: TipoInstruccion.Imprimir,
            expresion: expresion
        }
    }
}

module.exports.Instrucciones = Instrucciones;