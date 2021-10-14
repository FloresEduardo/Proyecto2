const { TipoDato } = require('./Tipos/tipo-dato');

class TS 
{
    constructor(simbolos)
    {
        this._simbolos = simbolos;
    }

    agregar(tipo_simbolo, tipo, id, valor)
    {
        let salida = {error: '', valor: ''};
        if(tipo_simbolo == 'Variable')
        {
            salida = this.agregarVariable(tipo_simbolo, tipo, id, valor);
        }
        else
        {
            salida = this.agregarArray(tipo_simbolo, tipo, id, valor);
        }
        console.log(this._simbolos);
        console.log(this._simbolos[0].valor);
        console.log(salida);
        return salida;
    }

    agregarVariable(tipo_simbolo, tipo, id, valor)
    {
        let salida = {error: '', valor: ''};
        var simbolo = this._simbolos.filter((simbolo) => simbolo.id.toUpperCase() == id.toUpperCase());
        if(simbolo.length)
        {
            // La variable ya existe
            salida.error = 'Error Semantico'
            salida.valor = `La variable '${id}'' ya existe \n`
            return salida;
        }
        else{
            // Casteo Implicito
            if(tipo == valor.tipo)
            {
                this._simbolos.push({
                    tipo_simbolo: tipo_simbolo,
                    tipo: tipo,
                    id: id,
                    valor: valor.valor,
                    tamanio: undefined
                });
                salida.error = undefined
                console.log(`Variable '${id} = ${valor.valor}' agregada exitosamente a TS \n`);
                return salida;
            }
            else{
                // Seccion de casteos
                switch(tipo)
                {
                    case TipoDato.Numero:       // Int x = 'a'; -> Int x = 97;
                        if(valor.tipo == TipoDato.Caracter)
                        {
                            let valorAscii = valor.valor.charCodeAt(0);
                            this._simbolos.push({
                                tipo: TipoDato.Numero,
                                id: id,
                                valor: valorAscii
                            });
                            salida.error = undefined;
                            console.log(`Variable '${id} = ${valorAscii}' agregada exitosamente a TS \n`);
                            return salida;
                        }else{
                            salida.error= 'Error Semantico';
                            salida.valor= `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                            return salida;
                        }
                    case TipoDato.Caracter:     // char x = 97; -> char x = 'a';
                        if(valor.tipo == TipoDato.Numero)
                        {
                            let valorChar = String.fromCharCode(valor.valor);
                            this._simbolos.push({
                                tipo_simbolo: tipo_simbolo,
                                tipo: tipo,
                                id: id,
                                valor: valorChar,
                                tamanio: undefined
                            });
                            salida.error = undefined;
                            console.log(`Variable '${id} = ${valorChar}' agregada exitosamente a TS \n`);
                            return salida;
                        }else{
                            salida.error = 'Error Semantico';
                            salida.valor = `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                            return salida;
                        }
                    default:
                        salida.error = 'Error Semantico';
                        salida.valor = `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                        return salida;
                        //break;
                }
            }
        }
    }

    agregarArray(tipo_simbolo, tipo, id, vector)
    {
        let salida = {error: '', valor: ''};
        var simbolo = this._simbolos.filter((simbolo) => simbolo.id.toUpperCase() == id.toUpperCase());
        if(simbolo.length)
        {
            // La variable ya existe
            salida.error = 'Error Semantico'
            salida.valor = `La variable '${id}'' ya existe \n`
            return salida;
        }
        else{
                this._simbolos.push({
                    tipo_simbolo: tipo_simbolo,
                    tipo: tipo,
                    id: id,
                    valor: vector,
                    tamanio: vector.length
                });
                salida.error = undefined
                console.log(`Variable '${id} = ${vector}' agregada exitosamente a TS \n`);
                return salida;
        }
    }

    actualizar(id, valor)
    {
        let salida = {error: '', valor: ''};
        //var simbolo = this._simbolos.filter((simbolo) => simbolo.id.toUpperCase() == id.toUpperCase());
        for(let i=0; i<this._simbolos.length; i++)
        {
            if(this._simbolos[i].id.toUpperCase() == id.toUpperCase())
            {
                if(this._simbolos[i].tipo == valor.tipo)
                {
                    this._simbolos[i].valor = valor.valor;

                    salida.error = undefined;
                    console.log(`Variable '${this._simbolos[i].id}' se actualizo correctamente, nuevo valor ${this._simbolos[i].id} = ${this._simbolos[i].valor} \n`);
                    return salida;
                }
                else
                {
                    switch(this._simbolos[i].tipo)
                    {
                        case TipoDato.Numero:       // Int x = 'a'; -> Int x = 97;
                            if(valor.tipo == TipoDato.Caracter)
                            {
                                let valorAscii = valor.valor.charCodeAt(0);
                                this._simbolos[i].valor = valorAscii;

                                salida.error = undefined;
                                console.log(`Variable '${this._simbolos[i].id}' se actualizao correctamente, nuevo valor '${this._simbolos[i].id} = ${this._simbolos[i].valor}' \n`);
                                return salida;
                            }else{
                                salida.error= 'Error Semantico';
                                salida.valor= `Variable: '${this._simbolos[i].id}' es de tipo: '${this._simbolos[i].tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                                return salida;
                            }
                        case TipoDato.Caracter:     // char x = 97; -> char x = 'a';
                            if(valor.tipo == TipoDato.Numero)
                            {
                                let valorChar = String.fromCharCode(valor.valor);
                                this._simbolos[i].valor = valorChar;
                                salida.error = undefined;
                                console.log(`Variable '${this._simbolos[i].id}' se actualizao correctamente, nuevo valor '${this._simbolos[i].id} = ${this._simbolos[i].valor}' \n`);
                                return salida;
                            }else{
                                salida.error = 'Error Semantico';
                                salida.valor = `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                                return salida;
                            }
                        default:
                            salida.error = 'Error Semantico';
                            salida.valor = `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`;
                            return salida;
                            //break;
                    }
                }
            }
        }
    }

    getSimbolo(id)
    {
        var simbolo = this._simbolos.filter((simbolo) => simbolo.id.toUpperCase() == id.toUpperCase());
        if(simbolo.length)
        {
            return simbolo[0];
        }
        else
        {
            let salida = {error: '', valor: ''};
            salida.error = 'La variable no existe'
            console.log(`La variable ${id} no existe`)
            return salida;
        }
    }
}

module.exports.TS = TS;