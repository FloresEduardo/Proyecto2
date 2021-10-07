const { TipoDato } = require('./Tipos/tipo-dato');

class TS 
{
    constructor(simbolos)
    {
        this._simbolos = simbolos;
    }

    agregar(tipo, id, valor)
    {
        console.log(id);
        var simbolo = this._simbolos.filter((simbolo) => simbolo.id == id);
        if(simbolo.length)
        {
            // La variable ya existe
            console.log(`La variable ${id} ya existe`);
            return `La variable ${id} ya existe`;
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
                return;
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
                            console.log(`${tipo} ${id} = ${valorAscii}`);
                            return;
                        }else{
                            console.log(`Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`);
                            return `Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`;
                        }
                        break;
                    case TipoDato.Caracter:     // char x = 97; -> char x = 'a';
                        if(valor.tipo == TipoDato.Numero)
                        {
                            let valorInt = String.fromCharCode(valor.valor);
                            this._simbolos.push({
                                tipo: tipo,
                                id: id,
                                valor: valorInt
                            });
                        }else{
                            console.log(`Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`);
                            return `Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`;
                        }
                        break;
                    default:
                        console.log(`Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`);
                        return `Error semantico, variable: '${id}' es de tipo: '${tipo}', incompatible con valor: '${valor.valor}' de tipo: '${valor.tipo}'`;
                        //break;
                }
            }
        }
    }
}

module.exports.TS = TS;