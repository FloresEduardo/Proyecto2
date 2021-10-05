let TipoOperacion = require('../Tipos/tipo-operacion').TipoOperacion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;
let TipoValor = require('../Tipos/tipo-valor').TipoValor;

function procesarExpresion(expresion, ts)
{
    //if(expresion.error){    return expresion;   }
    //console.log(expresion.tipo);
    switch(expresion.tipo){
        case TipoOperacion.Suma:
            console.log(expresion);
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
            break;
        case TipoValor.Cadena:
            break;
        case TipoValor.Caracter:
            break;
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
                break;
                case TipoDato.Cadena:
                break;
                case TipoDato.Caracter:
                    // Operacion No realizable, error semantico
                break;
                case TipoDato.Decimal:
                break;
                case TipoDato.Numero:
                break;
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                break;
                case TipoDato.Cadena:
                break;
                case TipoDato.Caracter:
                break;
                case TipoDato.Decimal:
                break;
                case TipoDato.Numero:
                break;
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    // Operacion No realizable, error semantico
                break;
                case TipoDato.Cadena:
                break;
                case TipoDato.Caracter:
                break;
                case TipoDato.Decimal:
                break;
                case TipoDato.Numero:
                break;
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.toUpperCase() == "TRUE" ? 1 : 0 ;
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
                break;
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor
                    }
                case TipoDato.Numero:
                break;
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    break;
                case TipoDato.Cadena:
                    break;
                case TipoDato.Caracter:
                    break;
                case TipoDato.Decimal:
                    break;
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + valorDer.valor
                    }
            }
            break;
    }
}

module.exports.procesarExpresion = procesarExpresion;