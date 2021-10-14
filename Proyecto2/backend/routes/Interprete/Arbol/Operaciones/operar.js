let TipoOperacion = require('../Tipos/tipo-operacion').TipoOperacion;
let TipoDato = require('../Tipos/tipo-dato').TipoDato;
let TipoValor = require('../Tipos/tipo-valor').TipoValor;

function procesarExpresion(expresion, ts)
{
    //if(expresion.error){    return expresion;   }
    //console.log(expresion.tipo);
    let respuesta = [];
    let valorIzq;
    let valorDer;
    let resultado;
    //console.log(typeof(expresion));

    //expresiones.forEach(expresion => {  //  NUEVO FOR EACH, TEST
        
    
    switch(expresion.tipo){
        case TipoOperacion.Suma:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarSuma(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Resta:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarResta(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Division:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarDivision(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Multiplicacion:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarMultiplicacion(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Potencia:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarPotencia(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Porcentaje:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarPorcentaje(valorIzq, valorDer);
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
            if(condicion.error != undefined || verdadero.error != undefined || falso.error != undefined){
                let temp1 =  condicion.error != undefined ? String(condicion.valor) + ", " : "";
                let temp2 = verdadero.error != undefined ? String(verdadero.valor) + ", " : "";
                let temp3 = falso.error != undefined ? String(falso.valor): ""
                let temp = String(temp1) + String(temp2) + String(temp3) + "\n";
                let tempR = {
                    error: "Error Semantico",
                    valor: temp
                }
                console.log(tempR);
                return tempR;
            }
            resultado = condicion.valor ? verdadero.valor : falso.valor;
            let tipoDato = resultado == verdadero.valor ? verdadero.tipo : falso.tipo;
            let returnR = { 
                tipo: tipoDato, 
                valor: resultado, 
                linea: condicion.linea, 
                columna: condicion.columna }
            return returnR;

        case TipoOperacion.Or:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarOr(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.And:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarAnd(valorIzq, valorDer);
            console.log(resultado);
            return resultado;

        case TipoOperacion.Mayor:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, ">");
            console.log(resultado);
            return resultado;

        case TipoOperacion.MayorIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, ">=");
            console.log(resultado);
            return resultado;

        case TipoOperacion.Menor:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, "<");
            console.log(resultado);
            return resultado;

        case TipoOperacion.MenorIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarRelacional(valorIzq, valorDer, "<=");
            console.log(resultado);
            return resultado;

        case TipoOperacion.IgualIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarIgualDif(valorIzq, valorDer, "==");
            console.log(resultado);
            return resultado;

        case TipoOperacion.NotIgual:
            valorIzq = procesarExpresion(expresion.operandoIzquierdo, ts);
            valorDer = procesarExpresion(expresion.operandoDerecho, ts);
            resultado = procesarIgualDif(valorIzq, valorDer, "!=");
            console.log(resultado);
            return resultado;

        case TipoOperacion.Casteo:
            let valor = casteo(expresion.tipoCasteo, expresion.expresion);
            return { tipo: valor.tipo, valor: valor.valor, linea: expresion.expresion.linea, columna: expresion.expresion.columna}

        case TipoValor.Booleano:
            return { tipo: TipoDato.Booleano, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Cadena:
            return { tipo: TipoDato.Cadena, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Caracter:
            return { tipo: TipoDato.Caracter, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Decimal:
            return { tipo: TipoDato.Decimal, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Numero:
            console.log(TipoDato.Numero);
            console.log(expresion.valor);
            return { tipo: TipoDato.Numero, valor: expresion.valor, linea: expresion.linea, columna: expresion.columna}
        case TipoValor.Identificador:

            break;
    }

    //}); // ------- NUEVO FOR EACH, TEST
    //return respuesta;
}

function procesarSuma(valorIzq, valorDer){
    // Seccion de casteos
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} + ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} + ${TipoDato.Caracter}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Decimal:
                    let _valorIzquierdo2 = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: _valorIzquierdo2 + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    let _valorIzquierdo = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Numero,
                        valor: _valorIzquierdo + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} + ${TipoDato.Booleano}, linea: ${valorIzq.linea}`
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + _valorDerecho,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                        valor: valorIzq.valor + _valorDerecho,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return {
                        tipo: TipoDato.Cadena,
                        valor: String(valorIzq.valor) + String(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor + valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} - ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} - ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} - ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    let _valorIzquierdo2 = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: _valorIzquierdo2 - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    let _valorIzquierdo = valorIzq.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Numero,
                        valor: _valorIzquierdo - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
        break;
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar restas con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} - ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} - ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} - ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    let _valorDerecho = valorDer.valor.toUpperCase() == "TRUE" ? 1 : 0 ;
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - _valorDerecho,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} - ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                        valor: valorIzq.valor - _valorDerecho,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} - ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor - getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor - valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                error: 'Error Semantico',
                valor: `Imposible realizar multiplicaciones con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar multiplicaciones con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} * ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} * ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} * ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} * ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} * ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} * ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} * ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor * getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor * valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                error: 'Error Semantico',
                valor: `Imposible realizar divisiones con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar divisiones con el tipo ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} / ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} / ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} / ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: getValueByCaracter(valorIzq.valor) / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: getValueByCaracter(valorIzq.valor) / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} / ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} / ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} / ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} / ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / getValueByCaracter(valorDer.valor),
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor / valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                error: 'Error Semantico',
                valor: `Imposible realizar potencias con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar potencias con el tipo de dato ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar potencias con el tipo de dato ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ^ ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ^ ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor ** valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor ** valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
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
                error: 'Error Semantico',
                valor: `Imposible realizar modulo con el tipo ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar modulo con el tipo de dato ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            return{
                error: 'Error Semantico',
                valor: `Imposible realizar modulo con el tipo de dato ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} % ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} % ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} % ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} % ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} % ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} % ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return {
                        tipo: TipoDato.Decimal,
                        valor: valorIzq.valor % valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    return {
                        tipo: TipoDato.Numero,
                        valor: valorIzq.valor % valorDer.valor,
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
    }
}

function procesarNegativo(valorIzq){
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '-' con dato de tipo: '${TipoDato.Booleano}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '-' con dato de tipo: '${TipoDato.Cadena}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '-' con dato de tipo: '${TipoDato.Caracter}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Decimal:
            return {
                tipo: TipoDato.Decimal,
                valor: valorIzq.valor * -1,
                error: undefined
            }
        case TipoDato.Numero:
            return {
                tipo: TipoDato.Numero,
                valor: valorIzq.valor * -1,
                linea: valorIzq.linea, 
                columna: valorIzq.columna,
                error: undefined
            }
    }
}

function procesarNegacion(valorIzq){
    switch(valorIzq.tipo){
        case TipoDato.Booleano:
            return {
                tipo: valorIzq.tipo,
                valor: !(valorIzq.valor),
                linea: valorIzq.linea, 
                columna: valorIzq.columna,
                error: undefined
            }
        case TipoDato.Cadena:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '!' con dato de tipo: '${TipoDato.Cadena}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Caracter:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '!' con dato de tipo: '${TipoDato.Caracter}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Decimal:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '!' con dato de tipo: '${TipoDato.Decimal}', linea: ${valorIzq.linea} \n`
            }
        case TipoDato.Numero:
            return{
                error: 'Error Semantico',
                valor: `Incompatible '!' con dato de tipo: '${TipoDato.Numero}', linea: ${valorIzq.linea} \n`
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} || ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} || ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} || ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} || ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} || ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} || ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} || ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} || ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} || ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} || ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} || ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} || ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} || ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} || ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} || ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} || ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} || ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} || ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} || ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} || ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} || ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} || ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} || ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} || ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} && ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} && ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} && ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} && ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} && ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} && ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} && ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} && ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} && ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} && ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} && ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} && ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} && ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} && ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} && ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} && ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} && ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} && ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} && ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} && ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} && ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} && ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} && ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} && ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
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
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
    }
}

function procesarIgualDif(valorIzq, valorDer, sig){
    let resultado;
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
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Booleano} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = (valorIzq.valor ? 1 : 0) == valorDer.valor; }
                    else if(sig == "!="){   resultado = (valorIzq.valor ? 1 : 0) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
        break;
        case TipoDato.Cadena:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Caracter:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Caracter}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Decimal:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Decimal}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Numero:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Cadena} ${sig} ${TipoDato.Numero}, linea: ${valorIzq.linea} \n`
                    }
            }
            break;
        case TipoDato.Caracter:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Caracter} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == valorDer.valor; }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = getValueByCaracter(valorIzq.valor) == valorDer.valor; }
                    else if(sig == "!="){   resultado = getValueByCaracter(valorIzq.valor) != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Decimal:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Decimal} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = valorIzq.valor == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = valorIzq.valor != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
        case TipoDato.Numero:
            switch(valorDer.tipo){
                case TipoDato.Booleano:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Booleano}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Cadena:
                    return{
                        error: 'Error Semantico',
                        valor: `Imposible realizar ${TipoDato.Numero} ${sig} ${TipoDato.Cadena}, linea: ${valorIzq.linea} \n`
                    }
                case TipoDato.Caracter:
                    if(sig == "=="){ resultado = valorIzq.valor == getValueByCaracter(valorDer.valor); }
                    else if(sig == "!="){   resultado = valorIzq.valor != getValueByCaracter(valorDer.valor);  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Decimal:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
                case TipoDato.Numero:
                    if(sig == "=="){ resultado = valorIzq.valor == valorDer.valor; }
                    else if(sig == "!="){   resultado = valorIzq.valor != valorDer.valor;  }
                    return{
                        tipo: TipoDato.Booleano, 
                        valor: resultado, 
                        linea: valorIzq.linea, 
                        columna: valorIzq.columna,
                        error: undefined
                    }
            }
            break;
    }
}


function casteo(tipo, expresion) {
    let valor;
    switch(tipo)
    {
        case TipoDato.Numero:
            switch(expresion.tipo)
            {
                case TipoDato.Decimal:
                    valor = parseInt(expresion.valor);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Numero;
                    return expresion;
                case TipoDato.Caracter:
                    valor = getValueByCaracter(expresion.valor);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Numero;
                    return expresion;
                default:
                    break;
            }
            break;
        case TipoDato.Decimal:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    valor = expresion.valor.toFixed(1);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Decimal;
                    return expresion;
                case TipoDato.Caracter:
                    valor = (getValueByCaracter(expresion.valor)).toFixed(1);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Decimal;
                    return expresion;
                default:
                    break;
            }
            break;
        case TipoDato.Cadena:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    valor = String(expresion.valor);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Cadena;
                    return expresion;
                case TipoDato.Decimal:
                    valor = String(expresion.valor.toFixed(1));
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Cadena;
                    return expresion;
                case TipoDato.Booleano:
                    valor = String(expresion.valor);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Cadena;
                    return expresion;
                default:
                    break;
            }
            break;
        case TipoDato.Caracter:
            switch(expresion.tipo)
            {
                case TipoDato.Numero:
                    valor = String.fromCharCode(expresion.valor);
                    expresion.valor = valor;
                    expresion.tipo = TipoDato.Caracter;
                    return expresion;
                default:
                    break;
            }
            break;
    }
    return '';
}


function getValueByCaracter(caracter)
{
    return caracter.charCodeAt(0);
}

module.exports.procesarExpresion = procesarExpresion;
module.exports.casteo = casteo;