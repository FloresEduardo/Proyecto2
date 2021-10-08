/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,17],$V3=[1,10],$V4=[1,9],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[1,15],$V9=[1,16],$Va=[2,1],$Vb=[6,9,13,14,39,40,43,44,45,46,47],$Vc=[1,30],$Vd=[1,41],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[12,49],$Vn=[1,48],$Vo=[12,17,29,50,51,53,54,55,56,57,58,59,60,61,62,63,64,65,66],$Vp=[1,53],$Vq=[1,52],$Vr=[1,60],$Vs=[1,61],$Vt=[1,62],$Vu=[1,63],$Vv=[1,64],$Vw=[1,65],$Vx=[1,66],$Vy=[1,67],$Vz=[1,68],$VA=[1,69],$VB=[1,70],$VC=[1,71],$VD=[1,72],$VE=[1,73],$VF=[1,74],$VG=[6,9,13,14,20,35,36,37,38,39,40,43,44,45,46,47],$VH=[1,110],$VI=[1,114],$VJ=[12,17,29,50,51,53,54,55,56,57,58,59,60],$VK=[12,17,29,50,51,53,54,55,56,57,58,59,60,61,62],$VL=[12,17,29,50,51,53,54,55,56,57,58,59,60,61,62,63,64,66],$VM=[1,120],$VN=[1,122],$VO=[1,123],$VP=[1,124],$VQ=[14,20,35,36,37,38,39,40,43,44,45,46,47];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"EPS":3,"INICIO":4,"CUERPO":5,"EOF":6,"SENTS":7,"SENTS_":8,"tkStart":9,"tkWith":10,"LLAMADA":11,"tkPuntoComa":12,"tkVoid":13,"tkId":14,"tkParentesisA":15,"PARAMETROS":16,"tkParentesisC":17,"tkLlaveA":18,"F_SENTS":19,"tkLlaveC":20,"IMPRIMIR":21,"IF":22,"DECLARACIONES":23,"LLAMADA_":24,"tkPunto":25,"PARAMETROS_SIN":26,"EXP":27,"PARAMETROS_SIN_":28,"tkComa":29,"PARAMETROS_2":30,"TIPO":31,"PARAMETROS_2_":32,"F_SENT":33,"F_SENT_":34,"ASIGNACIONES":35,"WHILE":36,"DO_WHILE":37,"FOR":38,"tkIf":39,"tkWriteLine":40,"L_ID":41,"ASIG":42,"tkString":43,"tkChar":44,"tkInt":45,"tkDouble":46,"tkBoolean":47,"L_ID_":48,"tkIgual":49,"tkOr":50,"tkAnd":51,"tkNot":52,"tkInterrogacion":53,"tkDosPuntos":54,"tkIgualIgual":55,"tkNotIgual":56,"tkMenor":57,"tkMenorIgual":58,"tkMayor":59,"tkMayorIgual":60,"tkMas":61,"tkMenos":62,"tkPor":63,"tkDivision":64,"tkPotencia":65,"tkPorcentaje":66,"tkNumero":67,"tkDecimal":68,"tkCadena":69,"tkCaracter":70,"tkTrue":71,"tkFalse":72,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",9:"tkStart",10:"tkWith",12:"tkPuntoComa",13:"tkVoid",14:"tkId",15:"tkParentesisA",17:"tkParentesisC",18:"tkLlaveA",20:"tkLlaveC",25:"tkPunto",29:"tkComa",35:"ASIGNACIONES",36:"WHILE",37:"DO_WHILE",38:"FOR",39:"tkIf",40:"tkWriteLine",43:"tkString",44:"tkChar",45:"tkInt",46:"tkDouble",47:"tkBoolean",49:"tkIgual",50:"tkOr",51:"tkAnd",52:"tkNot",53:"tkInterrogacion",54:"tkDosPuntos",55:"tkIgualIgual",56:"tkNotIgual",57:"tkMenor",58:"tkMenorIgual",59:"tkMayor",60:"tkMayorIgual",61:"tkMas",62:"tkMenos",63:"tkPor",64:"tkDivision",65:"tkPotencia",66:"tkPorcentaje",67:"tkNumero",68:"tkDecimal",69:"tkCadena",70:"tkCaracter",71:"tkTrue",72:"tkFalse"},
productions_: [0,[3,0],[4,2],[5,2],[8,2],[8,1],[7,4],[7,8],[7,1],[7,1],[7,1],[11,2],[24,3],[24,3],[24,1],[26,2],[26,1],[28,3],[28,1],[16,1],[16,1],[30,3],[32,4],[32,1],[19,2],[34,2],[34,1],[33,1],[33,1],[33,1],[33,1],[33,1],[33,1],[33,1],[22,7],[21,5],[23,4],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[41,2],[48,3],[48,1],[42,2],[42,1],[27,3],[27,3],[27,2],[27,5],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,1],[27,1],[27,1],[27,1],[27,1],[27,1],[27,3],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:
 console.log("Analisis Terminado"); return $$[$0-1]; 
break;
case 3: case 4:
 this.$ = $$[$0-1].concat($$[$0]);
break;
case 5: case 26:
this.$ = [];
break;
case 8: case 9: case 10:
 this.$ = [$$[$0]];
break;
case 24: case 25:
 this.$ = $$[$0-1].concat($$[$0]); 
break;
case 27: case 33:
 this.$ = [$$[$0]]; 
break;
case 35:
 this.$ = Instrucciones.imprimir($$[$0-2]); 
break;
case 36:
 this.$ = Instrucciones.declaracion($$[$0-3], $$[$0-2], $$[$0-1]); 
break;
case 37:
 this.$ = TipoDato.Cadena; 
break;
case 38:
 this.$ = TipoDato.Caracter; 
break;
case 39:
 this.$ = TipoDato.Numero; 
break;
case 40:
 this.$ = TipoDato.Decimal; 
break;
case 41:
 this.$ = TipoDato.Booleano; 
break;
case 42:
 this.$ = TipoValor.Identificador; 
break;
case 43: case 44:
 this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 45:
 this.$ = []; 
break;
case 46:
 this.$ = $$[$0]; 
break;
case 47:
 this.$ = undefined; 
break;
case 48:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Or, $$[$0-2], $$[$0]); 
break;
case 49:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.And, $$[$0-2], $$[$0]); 
break;
case 50:
 this.$ = Instrucciones.operacionUnaria(TipoOperacion.NegacionUaria, $$[$0]); 
break;
case 51:
 this.$ = Instrucciones.ternaria(TipoOperacion.Ternario, $$[$0-4], $$[$0-2], $$[$0]); 
break;
case 52:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.IgualIgual, $$[$0-2], $$[$0]); 
break;
case 53:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.NotIgual, $$[$0-2], $$[$0]); 
break;
case 54:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Menor, $$[$0-2], $$[$0]); 
break;
case 55:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.MenorIgual, $$[$0-2], $$[$0]); 
break;
case 56:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Mayor, $$[$0-2], $$[$0]); 
break;
case 57:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.MayorIgual, $$[$0-2], $$[$0]); 
break;
case 58:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Suma, $$[$0-2], $$[$0]); 
break;
case 59:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Resta, $$[$0-2], $$[$0]); 
break;
case 60:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Multiplicacion, $$[$0-2], $$[$0]); 
break;
case 61:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Division, $$[$0-2], $$[$0]); 
break;
case 62:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Potencia, $$[$0-2], $$[$0]); 
break;
case 63:
 this.$ = Instrucciones.operacionBinaria(TipoOperacion.Porcentaje, $$[$0-2], $$[$0]); 
break;
case 64:
 this.$ = Instrucciones.operacionUnaria(TipoOperacion.UnarioNegativo, $$[$0]); 
break;
case 65:
 this.$ = Instrucciones.nuevoValor(TipoValor.Numero, Number($$[$0]),this._$.first_line,this._$.first_column+1); 
break;
case 66:
 this.$ = Instrucciones.nuevoValor(TipoValor.Decimal, Number($$[$0]),this._$.first_line,this._$.first_column+1); 
break;
case 67:
 this.$ = Instrucciones.nuevoValor(TipoValor.Cadena, $$[$0],this._$.first_line,this._$.first_column+1); 
break;
case 68:
 this.$ = Instrucciones.nuevoValor(TipoValor.Caracter, $$[$0],this._$.first_line,this._$.first_column+1); 
break;
case 69: case 70:
 this.$ = Instrucciones.nuevoValor(TipoValor.Booleano, $$[$0],this._$.first_line,this._$.first_column+1); 
break;
case 71:
 this.$ = $$[$0-1]; 
break;
}
},
table: [{4:1,5:2,7:3,9:$V0,13:$V1,14:$V2,21:6,22:7,23:8,31:11,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{1:[3]},{6:[1,18]},{3:21,6:$Va,7:20,8:19,9:$V0,13:$V1,14:$V2,21:6,22:7,23:8,31:11,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{10:[1,22]},{14:[1,23]},o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),{15:[1,24]},{15:[1,25]},{14:[1,27],41:26},{14:[2,37]},{14:[2,38]},{14:[2,39]},{14:[2,40]},{14:[2,41]},{14:[2,42]},{1:[2,2]},{6:[2,3]},{3:21,6:$Va,7:20,8:28,9:$V0,13:$V1,14:$V2,21:6,22:7,23:8,31:11,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{6:[2,5]},{11:29,14:$Vc},{15:[1,31]},{11:42,14:$Vc,15:$Vd,27:32,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:43,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{3:46,12:$Va,42:44,49:[1,45]},o($Vm,$Va,{48:47,3:49,29:$Vn}),{6:[2,4]},{12:[1,50]},o($Vo,$Va,{24:51,3:54,15:$Vp,25:$Vq}),{3:57,14:$V2,16:55,17:$Va,30:56,31:58,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{17:[1,59],50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},{11:42,14:$Vc,15:$Vd,27:75,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:76,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},o($Vo,[2,65]),o($Vo,[2,66]),o($Vo,[2,67]),o($Vo,[2,68]),o($Vo,[2,69]),o($Vo,[2,70]),{11:42,14:$Vc,15:$Vd,27:77,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},o($Vo,[2,72]),{17:[1,78],50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},{12:[1,79]},{11:42,14:$Vc,15:$Vd,27:80,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{12:[2,47]},o($Vm,[2,43]),{14:[1,81]},o($Vm,[2,45]),o($Vb,[2,6]),o($Vo,[2,11]),{14:[1,82]},{3:85,11:42,14:$Vc,15:$Vd,17:$Va,26:83,27:84,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},o($Vo,[2,14]),{17:[1,86]},{17:[2,19]},{17:[2,20]},{14:[1,87]},{12:[1,88]},{11:42,14:$Vc,15:$Vd,27:89,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:90,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:91,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:92,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:93,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:94,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:95,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:96,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:97,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:98,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:99,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:100,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:101,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:102,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{11:42,14:$Vc,15:$Vd,27:103,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},o($Vo,[2,50]),o($Vo,[2,64]),{17:[1,104],50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},{18:[1,105]},o($VG,[2,36]),{12:[2,46],50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},o($Vm,$Va,{3:49,48:106,29:$Vn}),o($Vo,$Va,{3:54,24:107,15:$Vp,25:$Vq}),{17:[1,108]},{3:111,17:$Va,28:109,29:$VH,50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},{17:[2,16]},{18:[1,112]},{3:115,17:$Va,29:$VI,32:113},o($VG,[2,35]),o([12,17,29,54],[2,48],{50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o([12,17,29,50,54],[2,49],{51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),{50:$Vr,51:$Vs,53:$Vt,54:[1,116],55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},o($VJ,[2,52],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VJ,[2,53],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VJ,[2,54],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VJ,[2,55],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VJ,[2,56],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VJ,[2,57],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VK,[2,58],{63:$VC,64:$VD,65:$VE,66:$VF}),o($VK,[2,59],{63:$VC,64:$VD,65:$VE,66:$VF}),o($VL,[2,60],{65:$VE}),o($VL,[2,61],{65:$VE}),o($Vo,[2,62]),o($VL,[2,63],{65:$VE}),o($Vo,[2,71]),{14:$V2,19:117,21:125,22:121,23:119,31:11,33:118,35:$VM,36:$VN,37:$VO,38:$VP,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},o($Vm,[2,44]),o($Vo,[2,12]),o($Vo,[2,13]),{17:[2,15]},{11:42,14:$Vc,15:$Vd,27:126,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{17:[2,18]},{14:$V2,19:127,21:125,22:121,23:119,31:11,33:118,35:$VM,36:$VN,37:$VO,38:$VP,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{17:[2,21]},{14:$V2,31:128,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{17:[2,23]},{11:42,14:$Vc,15:$Vd,27:129,52:$Ve,62:$Vf,67:$Vg,68:$Vh,69:$Vi,70:$Vj,71:$Vk,72:$Vl},{20:[1,130]},{3:133,14:$V2,20:$Va,21:125,22:121,23:119,31:11,33:132,34:131,35:$VM,36:$VN,37:$VO,38:$VP,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},o($VQ,[2,27]),o($VQ,[2,28]),o($VQ,[2,29]),o($VQ,[2,30]),o($VQ,[2,31]),o($VQ,[2,32]),o($VQ,[2,33]),{3:111,17:$Va,28:134,29:$VH,50:$Vr,51:$Vs,53:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF},{20:[1,135]},{14:[1,136]},o($VJ,[2,51],{61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF}),o($VG,[2,34]),{20:[2,24]},{3:133,14:$V2,20:$Va,21:125,22:121,23:119,31:11,33:132,34:137,35:$VM,36:$VN,37:$VO,38:$VP,39:$V3,40:$V4,43:$V5,44:$V6,45:$V7,46:$V8,47:$V9},{20:[2,26]},{17:[2,17]},o($Vb,[2,7]),{3:115,17:$Va,29:$VI,32:138},{20:[2,25]},{17:[2,22]}],
defaultActions: {12:[2,37],13:[2,38],14:[2,39],15:[2,40],16:[2,41],17:[2,42],18:[2,2],19:[2,3],21:[2,5],28:[2,4],46:[2,47],56:[2,19],57:[2,20],85:[2,16],109:[2,15],111:[2,18],113:[2,21],115:[2,23],131:[2,24],133:[2,26],134:[2,17],137:[2,25],138:[2,22]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    let TipoDato = require('./Arbol/Tipos/tipo-dato').TipoDato;
    let TipoValor = require('./Arbol/Tipos/tipo-valor').TipoValor;
    let Instrucciones = require('./Arbol/Instrucciones/instrucciones').Instrucciones;
    let TipoOperacion = require('./Arbol/Tipos/tipo-operacion').TipoOperacion;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// salto de linea
break;
case 1:// espacios en blanco
break;
case 2:// Comentario unilinea
break;
case 3:// Comentario multilinea
break;
case 4:return 45;
break;
case 5:return 46;
break;
case 6:return 47;
break;
case 7:return 43;
break;
case 8:return 44;
break;
case 9:return 'tkNew';
break;
case 10:return 'tkDynamicList';
break;
case 11:return 'tkAppend';
break;
case 12:return 'tkGetValue';
break;
case 13:return 'tkSetValue';
break;
case 14:return 39;
break;
case 15:return 'tkElse';
break;
case 16:return 40;
break;
case 17:return 'tkSwitch';
break;
case 18:return 'tkCase';
break;
case 19:return 'tkDefault';
break;
case 20:return 'tkBreak';
break;
case 21:return 'tkWhile';
break;
case 22:return 'tkDo';
break;
case 23:return 'tkFor';
break;
case 24:return 'tkReturn';
break;
case 25:return 13;
break;
case 26:return 'tkToLower';
break;
case 27:return 'tkToUpper';
break;
case 28:return 'tkLength';
break;
case 29:return 'tkTruncate';
break;
case 30:return 'tkRound';
break;
case 31:return 'tkTypeOf';
break;
case 32:return 'tkToString';
break;
case 33:return 'tkToCharArray';
break;
case 34:return 9;
break;
case 35:return 10;
break;
case 36:return 71;
break;
case 37:return 72;
break;
case 38:return 'tkCount';
break;
case 39:return 58;
break;
case 40:return 60;
break;
case 41:return 55;
break;
case 42:return 56;
break;
case 43:return 51;
break;
case 44:return 50;
break;
case 45:return 61;
break;
case 46:return 62;
break;
case 47:return 64;
break;
case 48:return 63;
break;
case 49:return 66;
break;
case 50:return 65;
break;
case 51:return 49;
break;
case 52:return 52;
break;
case 53:return 57;
break;
case 54:return 59;
break;
case 55:return 15;
break;
case 56:return 17;
break;
case 57:return 18;
break;
case 58:return 20;
break;
case 59:return 'tkCorcheteA';
break;
case 60:return 'tkCorcheteC';
break;
case 61:return 12;
break;
case 62:return 54;
break;
case 63:return 29;
break;
case 64:return 25;
break;
case 65:return 53;
break;
case 66: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 69; 
break;
case 67: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 70; 
break;
case 68:return 68;
break;
case 69:return 67;
break;
case 70:return 14;
break;
case 71:return 6;
break;
case 72:console.log('Error Lexico: '+yy_.yytext+' en la linea: ' + yy_.yylloc.first_line + ' en la columna: '+yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\\n)/i,/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:string\b)/i,/^(?:char\b)/i,/^(?:new\b)/i,/^(?:DynamicLis\b)/i,/^(?:append\b)/i,/^(?:getValue\b)/i,/^(?:setValue\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:WriteLine\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:break\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:for\b)/i,/^(?:return\b)/i,/^(?:void\b)/i,/^(?:toLower\b)/i,/^(?:toUpper\b)/i,/^(?:length\b)/i,/^(?:truncate\b)/i,/^(?:round\b)/i,/^(?:typeOf\b)/i,/^(?:toString\b)/i,/^(?:toCharArray\b)/i,/^(?:start\b)/i,/^(?:with\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:count\b)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\/)/i,/^(?:\*)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:=)/i,/^(?:!)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:;)/i,/^(?::)/i,/^(?:,)/i,/^(?:\.)/i,/^(?:\?)/i,/^(?:"[^\"]*")/i,/^(?:'[^\']?')/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Gramatica;
exports.Parser = Gramatica.Parser;
exports.parse = function () { return Gramatica.parse.apply(Gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}