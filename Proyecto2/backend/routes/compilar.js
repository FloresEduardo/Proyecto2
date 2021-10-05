var express = require('express');
var router = express.Router();
var parser = require('../routes/Interprete/Gramatica');

/* GET users listing. */
router.post('/', function(req, res, next) {
    let entrada = req.body;
    parser.parse(' instrucciones del archivo de entrada ;');
    console.log(entrada);
    let respuesta = {
        errores: 'Ninguno',
        consola: 'Todo Bien'
    }
  res.json(respuesta);
});

module.exports = router;
