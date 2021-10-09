const { TipoDato } = require('./Tipos/tipo-dato');

class TS 
{
    constructor(simbolos)
    {
        this._simbolos = simbolos;
    }

    agregar(tipo, id, valor)
    {
        var simbolo = this._simbolos.filter((simbolo) => simbolo.id == id);
        if(simbolo.length)
        {
            // La variable ya existe
            return {
                error: 'Error Semantico',
                valor: `La variable '${id}'' ya existe \n`
            }
        }
        else{
            // Casteo Implicito
            if(tipo == valor.tipo)
            {
                this._simbolos.push({
                    tipo: tipo,
                    id: id,
                    valor: valor.valor
                });
                return{
                    error: undefined,
                    valor: `Variable '${id}' agregada exitosamente a TS \n`
                }
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
                                tipo: tipo,
                                id: id,
                                valor: valorAscii
                            });
                            return{
                                error: undefined,
                                valor: `Variable '${id}' agregada exitosamente a TS \n`
                            };
                        }else{
                            return {
                                error: 'Error Semantico',
                                valor: `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`
                            }
                        }
                    case TipoDato.Caracter:     // char x = 97; -> char x = 'a';
                        if(valor.tipo == TipoDato.Numero)
                        {
                            let valorInt = String.fromCharCode(valor.valor);
                            this._simbolos.push({
                                tipo: tipo,
                                id: id,
                                valor: valorInt
                            });
                            return{
                                error: undefined,
                                valor: `Variable '${id}' agregada exitosamente a TS \n`
                            };
                        }else{
                            return {
                                error: 'Error Semantico',
                                valor: `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`
                            }
                        }
                    default:
                        
                        return {
                            error: 'Error Semantico',
                            valor: `Variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}' \n`
                        }
                        //break;
                }
            }
        }
    }
}

module.exports.TS = TS;