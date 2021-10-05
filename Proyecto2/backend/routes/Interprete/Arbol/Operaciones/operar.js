let TipoOperacion = require('../Tipos/tipo-operacion').TipoOperacion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;
let TipoValor = require('../Tipos/tipo-valor').TipoValor;
let errorSemantico = require('../Operaciones/error-semantico').errorSemantico;

function procesarExpresion(expresion, ts)
{
    //if(expresion.error){    return expresion;   }
    //console.log(expresion.tipo);
    switch(expresion.tipo){
        case TipoOperacion.Suma:
            let valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            let valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            let resultado = procesarSuma(valorIzq, valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Resta:
            break;
        case TipoOperacion.Division:
            break;
        case TipoOperacion.Multiplicacion:
            break;
        case TipoValor.Booleano:
            return { tipo: TipoDato.Booleano, valor: expresion.valor}
        case TipoValor.Cadena:
            return { tipo: TipoDato.Cadena, valor: expresion.valor}
        case TipoValor.Caracter:
            return { tipo: TipoDato.Caracter, valor: expresion.valor}
        case TipoValor.Decimal:
            return { tipo: TipoDato.Decimal, valor: expresion.valor}
        case TipoValor.Identificador:
            break;
        case TipoValor.Numero:
            return { tipo: TipoDato.Numero, valor: expresion.valor}

    }
}

function procesarSuma(valorIzq, valorDer){
    // Seccion de casteos
    console.log(valorIzq);
    console.log(valorDer);
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    // Operacion No realizable, error semantico
                    //ErrorSemantico("Error Semantico", "Imposible realizar operacion", undefined, undefined);
                    return{
                        tipo: "Error Semantico",
                        mensaje: "imposible realizar operacion"
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                break;
                case TipoDato.Caracter:
                    // Operacion No realizable, error semantico
                break;
                case TipoDato.Decimal:
                    let _valorIzquierdo2 = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: _valorIzquierdo2 + valorDer.valor
                    }
                case TipoDato.Numero:
                    let _valorIzquierdo = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Numero,
                        valor: _valorIzquierdo + valorDer.valor
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    // Operacion No realizable, error semantico
                break;
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) + valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) + valorDer.valor
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + _valorDerecho
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.valor.toUpperCase();
                    console.log(_valorDerecho);
                    _valorDerecho = _valorDerecho == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + _valorDerecho
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + valorDer.valor
                    }
            }
            break;
    }
}

function getValueByCaracter(caracter)
{
    return caracter.charCodeAt(0);
}

module.exports.procesarExpresion = procesarExpresion;