var express = require('express');
var router = express.Router();
var parser = require('../routes/Interprete/Gramatica');
let ejecutar = require('./Interprete/Arbol/interprete').ejecutar;

// Compilar Gramatica.jison -> jison Gramatica.jison

/* GET users listing. */
router.post('/', function(req, res, next) {
    let cadenaDeEntrada = req.body.entrada;
    let instrucciones =  parser.parse(cadenaDeEntrada);
    let salida = ejecutar(instrucciones, []);
    
  res.json({
    salida: salida
  });
});

module.exports = router;
