let TipoOperacion = require('../Tipos/tipo-operacion').TipoOperacion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;
let TipoValor = require('../Tipos/tipo-valor').TipoValor;
let errorSemantico = require('../Operaciones/error-semantico').errorSemantico;

function procesarExpresion(expresion, ts)
{
    //if(expresion.error){    return expresion;   }
    //console.log(expresion.tipo);
    let valorIzq;
    let valorDer;
    let resultado;
    switch(expresion.tipo){
        case TipoOperacion.Suma:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarSuma(valorIzq, valorDer);
            return resultado;
        case TipoOperacion.Resta:
            console.log(expresion.operandoIzquierdo);
            console.log(expresion.operandoDerecho);
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarResta(valorIzq, valorDer);
            console.log(valorIzq);
            console.log(valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Division:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarDivision(valorIzq, valorDer);
            console.log(valorIzq);
            console.log(valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Multiplicacion:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarMultiplicacion(valorIzq, valorDer);
            console.log(valorIzq);
            console.log(valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Potencia:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarPotencia(valorIzq, valorDer);
            console.log(valorIzq);
            console.log(valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Porcentaje:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarPotencia(valorIzq, valorDer);
            console.log(valorIzq);
            console.log(valorDer);
            console.log(resultado);
            return resultado;
        case TipoOperacion.UnarioNegativo:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            resultado = procesarNegativo(expresion.operandoIzquierdo);
            console.log(resultado);
            return resultado;
        case TipoOperacion.NegacionUaria:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            resultado = procesarNegacion(expresion.operandoIzquierdo);
            console.log(resultado);
            return resultado;
        case TipoOperacion.Ternario:
            let condicion = procesarExpresion(expresion.condicion, ts);
            let verdadero = procesarExpresion(expresion.verdadero, ts);
            let falso = procesarExpresion(expresion.falso, ts);
            resultado = condicion.valor ? verdadero.valor : falso.valor;
            return { tipo: TipoDato.Booleano, valor: resultado, linea: condicion.linea, columna: condicion.columna}
        case TipoOperacion.Or:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarOr(valorIzq, valorDer);
            return resultado;
        case TipoOperacion.And:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarAnd(valorIzq, valorDer);
            return resultado;
        case TipoOperacion.Mayor:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, ">");
            return resultado;
        case TipoOperacion.MayorIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, ">=");
            return resultado;
        case TipoOperacion.Menor:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, "<");
            return resultado;
        case TipoOperacion.MenorIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, "<=");
            return resultado;
        case TipoOperacion.IgualIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarIgualDif(valorIzq, valorDer, "==");
            return resultado;
        case TipoOperacion.NotIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarIgualDif(valorIzq, valorDer, "!=");
            return resultado;
        case TipoValor.Booleano:
            return { tipo: TipoDato.Booleano, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Cadena:
            return { tipo: TipoDato.Cadena, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Caracter:
            return { tipo: TipoDato.Caracter, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Decimal:
            return { tipo: TipoDato.Decimal, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Identificador:
            break;
        case TipoValor.Numero:
            return { tipo: TipoDato.Numero, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}

    }
}

function procesarSuma(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} + ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor)
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} + ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
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
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} + ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
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

function procesarResta(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} - ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} - ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} - ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    let _valorIzquierdo2 = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: _valorIzquierdo2 - valorDer.valor
                    }
                case TipoDato.Numero:
                    let _valorIzquierdo = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Numero,
                        valor: _valorIzquierdo - valorDer.valor
                    }
            }
        break;
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, imposible realizar restas con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} - ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} - ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} - ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) - valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) - valorDer.valor
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - _valorDerecho
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} - ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor
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
                        valor: valorIzq.valor - _valorDerecho
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} - ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor - getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor - valorDer.valor
                    }
            }
            break;
    }
}

function procesarMultiplicacion(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                valor: `Error Semantico, imposible realizar multiplicaciones con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, imposible realizar multiplicaciones con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} * ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} * ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} * ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) * valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) * valorDer.valor
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} * ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} * ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} * ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} * ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor * getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor * valorDer.valor
                    }
            }
            break;
    }
}

function procesarDivision(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                valor: `Error Semantico, imposible realizar divisiones con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, imposible realizar divisiones con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} / ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} / ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} / ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) / valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) / valorDer.valor
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} / ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} / ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} / ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} / ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / getValueByCaracter(valorDer.valor)
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor
                    }
            }
            break;
    }
}

function procesarPotencia(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                valor: `Error Semantico, imposible realizar potencias con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, imposible realizar potencias con el tipo de dato ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            return{
                valor: `Error Semantico, imposible realizar potencias con el tipo de dato ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor ** valorDer.valor
                    }
            }
            break;
    }
}

function procesarPorcentaje(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                valor: `Error Semantico, imposible realizar modulo con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, imposible realizar modulo con el tipo de dato ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            return{
                valor: `Error Semantico, imposible realizar modulo con el tipo de dato ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
            }
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} % ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} % ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} % ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} % ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} % ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} % ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor % valorDer.valor
                    }
            }
            break;
    }
}

function procesarNegativo(valorIzq){
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                valor: `Error Semantico, incompatible '-' con dato de tipo: '${TipoDato.Booleano}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, incompatible '-' con dato de tipo: '${TipoDato.Cadena}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            return{
                valor: `Error Semantico, incompatible '-' con dato de tipo: '${TipoDato.Caracter}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Decimal:
            return {
                tipo: TipoDato.Decimal,
                valor: valorIzq.valor * -1
            }
        case TipoDato.Numero:
            return {
                tipo: TipoDato.Numero,
                valor: valorIzq.valor * -1
            }
    }
}

function procesarNegacion(valorIzq){
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return {
                tipo: valorIzq.tipo,
                valor: !(valorIzq.valor)
            }
        case TipoDato.Cadena:
            return{
                valor: `Error Semantico, incompatible '!' con dato de tipo: '${TipoDato.Cadena}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Caracter:
            return{
                valor: `Error Semantico, incompatible '!' con dato de tipo: '${TipoDato.Caracter}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Decimal:
            return{
                valor: `Error Semantico, incompatible '!' con dato de tipo: '${TipoDato.Decimal}', linea: ${valorIzq.linea}`
            }
        case TipoDato.Numero:
            return{
                valor: `Error Semantico, incompatible '!' con dato de tipo: '${TipoDato.Numero}', linea: ${valorIzq.linea}`
            }
    }
}

function procesarOr(valorIzq, valorDer){
    let resultado;
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    resultado = valorIzq.valor || valorDer.valor;
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} || ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} || ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} || ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} || ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} || ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} || ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} || ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} || ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} || ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} || ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} || ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} || ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} || ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} || ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} || ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} || ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} || ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} || ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} || ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} || ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} || ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} || ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} || ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} || ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
    }
}

function procesarAnd(valorIzq, valorDer){
    let resultado;
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    resultado = valorIzq.valor && valorDer.valor;
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} && ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} && ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} && ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} && ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} && ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} && ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} && ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} && ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} && ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} && ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} && ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} && ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} && ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} && ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} && ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} && ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} && ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} && ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} && ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} && ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} && ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} && ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} && ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} && ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
    }
}

function procesarRelacional(valorIzq, valorDer, sig){
    let resultado;
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == ">"){ resultado = getValueByCaracter(valorIzq.valor) > getValueByCaracter(valorDer.valor); }
                    else if(sig == "<"){   resultado = getValueByCaracter(valorIzq.valor) < getValueByCaracter(valorDer.valor);  }
                    else if(sig == ">="){   resultado = getValueByCaracter(valorIzq.valor) >= getValueByCaracter(valorDer.valor);  }
                    else if(sig == "<="){   resultado = getValueByCaracter(valorIzq.valor) <= getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == ">"){ resultado = getValueByCaracter(valorIzq.valor) > valorDer.valor; }
                    else if(sig == "<"){   resultado = getValueByCaracter(valorIzq.valor) < valorDer.valor;  }
                    else if(sig == ">="){   resultado = getValueByCaracter(valorIzq.valor) >= valorDer.valor;  }
                    else if(sig == "<="){   resultado = getValueByCaracter(valorIzq.valor) <= valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == ">"){ resultado = getValueByCaracter(valorIzq.valor) > valorDer.valor; }
                    else if(sig == "<"){   resultado = getValueByCaracter(valorIzq.valor) < valorDer.valor;  }
                    else if(sig == ">="){   resultado = getValueByCaracter(valorIzq.valor) >= valorDer.valor;  }
                    else if(sig == "<="){   resultado = getValueByCaracter(valorIzq.valor) <= valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == ">"){ resultado = valorIzq.valor > getValueByCaracter(valorDer.valor); }
                    else if(sig == "<"){   resultado = valorIzq.valor < getValueByCaracter(valorDer.valor);  }
                    else if(sig == ">="){   resultado = valorIzq.valor >= getValueByCaracter(valorDer.valor);  }
                    else if(sig == "<="){   resultado = valorIzq.valor <= getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == ">"){ resultado = valorIzq.valor > valorDer.valor; }
                    else if(sig == "<"){   resultado = valorIzq.valor < valorDer.valor;  }
                    else if(sig == ">="){   resultado = valorIzq.valor >= valorDer.valor;  }
                    else if(sig == "<="){   resultado = valorIzq.valor <= valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == ">"){ resultado = valorIzq.valor > valorDer.valor; }
                    else if(sig == "<"){   resultado = valorIzq.valor < valorDer.valor;  }
                    else if(sig == ">="){   resultado = valorIzq.valor >= valorDer.valor;  }
                    else if(sig == "<="){   resultado = valorIzq.valor <= valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == ">"){ resultado = valorIzq > getValueByCaracter(valorDer); }
                    else if(sig == "<"){   resultado = valorIzq < getValueByCaracter(valorDer);  }
                    else if(sig == ">="){   resultado = valorIzq >= getValueByCaracter(valorDer);  }
                    else if(sig == "<="){   resultado = valorIzq <= getValueByCaracter(valorDer);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == ">"){ resultado = valorIzq > valorDer; }
                    else if(sig == "<"){   resultado = valorIzq < valorDer;  }
                    else if(sig == ">="){   resultado = valorIzq >= valorDer;  }
                    else if(sig == "<="){   resultado = valorIzq <= valorDer;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == ">"){ resultado = valorIzq > valorDer; }
                    else if(sig == "<"){   resultado = valorIzq < valorDer;  }
                    else if(sig == ">="){   resultado = valorIzq >= valorDer;  }
                    else if(sig == "<="){   resultado = valorIzq <= valorDer;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
            break;
    }
}

function procesarIgualDif(valorIzq, valorDer, sig){
    let resultado;
    console.log(valorIzq);
    console.log(valorDer);
    console.log(sig);
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = (valorIzq.valor ? 1 : 0) == valorDer.valor; }
                    else if(sig == "!="){   resultado = (valorIzq.valor ? 1 : 0) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Caracter:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Numero:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea}`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == valorDer.valor; }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == valorDer.valor; }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = valorIzq.valor == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = valorIzq.valor != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return{
                        valor: `Error Semantico, imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = valorIzq.valor == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = valorIzq.valor != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna
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