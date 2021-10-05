function errorSemantico(tipo, mensaje, linea, columna)
{
    return{
        tipo: tipo,
        mensaje: mensaje,
        linea: linea,
        columna: columna
    }
}

module.exports.errorSemantico = errorSemantico;