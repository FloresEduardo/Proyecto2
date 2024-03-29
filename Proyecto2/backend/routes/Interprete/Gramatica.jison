%lex

%options case-insensitive

%%


\\n                                                    // salto de linea
\s+                                                   // espacios en blanco
"//".*                                               // Comentario unilinea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]                 // Comentario multilinea

"int"                   return 'tkInt';
"double"                return 'tkDouble';
"boolean"               return 'tkBoolean';
"string"                return 'tkString';
"char"                  return 'tkChar';
"new"                   return 'tkNew';
"DynamicList"           return 'tkDynamicList';
"append"                return 'tkAppend';
"getValue"              return 'tkGetValue';
"setValue"              return 'tkSetValue';
"if"                    return 'tkIf';
"else"                  return 'tkElse';
"WriteLine"             return 'tkWriteLine';
"switch"                return 'tkSwitch';
"case"                  return 'tkCase';
"default"               return 'tkDefault';
"break"                 return 'tkBreak';
"while"                 return 'tkWhile';
"do"                    return 'tkDo';
"for"                   return 'tkFor';
"return"                return 'tkReturn';
"void"                  return 'tkVoid';
"toLower"               return 'tkToLower';
"toUpper"               return 'tkToUpper';
"length"                return 'tkLength';
"truncate"              return 'tkTruncate';
"round"                 return 'tkRound';
"typeOf"                return 'tkTypeOf';
"toString"              return 'tkToString';
"toCharArray"           return 'tkToCharArray';
"start"                 return 'tkStart';
"with"                  return 'tkWith';
"true"                  return 'tkTrue';
"false"                 return 'tkFalse';
"count"                 return 'tkCount';

"<="    return 'tkMenorIgual';
">="    return 'tkMayorIgual';
"=="    return 'tkIgualIgual';
"!="    return 'tkNotIgual';
"&&"    return 'tkAnd';
"||"    return 'tkOr';

"+"     return 'tkMas';
"-"     return 'tkMenos';
"/"     return 'tkDivision';
"*"     return 'tkPor';
"%"     return 'tkPorcentaje';
"^"     return 'tkPotencia';
"="     return 'tkIgual';
"!"     return 'tkNot';
"<"     return 'tkMenor';
">"     return 'tkMayor';
"("     return 'tkParentesisA';
")"     return 'tkParentesisC';
"{"     return 'tkLlaveA';
"}"     return 'tkLlaveC';
"["     return 'tkCorcheteA';
"]"     return 'tkCorcheteC';
";"     return 'tkPuntoComa';
":"     return 'tkDosPuntos';
","     return 'tkComa';
"."     return 'tkPunto';
"?"     return 'tkInterrogacion';


\"[^\"]*\"                      { yytext = yytext.substr(1, yyleng-2); return 'tkCadena'; }
\'[^\']?\'                      { yytext = yytext.substr(1, yyleng-2); return 'tkCaracter'; }
[0-9]+("."[0-9]+)\b             return 'tkDecimal';
[0-9]+\b                        return 'tkNumero';
([a-zA-Z])([a-zA-Z0-9_])*       return 'tkId';



<<EOF>>     return 'EOF';
.           {console.log('Error Lexico: '+yytext+' en la linea: ' + yylloc.first_line + ' en la columna: '+yylloc.first_column); }

/lex

%{
    let TipoDato = require('./Arbol/Tipos/tipo-dato').TipoDato;
    let TipoValor = require('./Arbol/Tipos/tipo-valor').TipoValor;
    let Instrucciones = require('./Arbol/Instrucciones/instrucciones').Instrucciones;
    let TipoOperacion = require('./Arbol/Tipos/tipo-operacion').TipoOperacion;
%}

%right 'tkOr'
%right 'tkAnd'
%right 'tkNot' 'tkInterrogacion'
%left 'tkMenor' 'tkMenorIgual' 'tkMayor' 'tkMayorIgual' 'tkIgualIgual' 'tkNotIgual' 
%left 'tkMas' 'tkMenos' 
%left 'tkPor' 'tkDivision' 'tkPorcentaje'
%left 'tkPotencia'
%left UMENOS

%start INICIO

%%

EPS:
;

INICIO
    :     CUERPO      EOF                 { console.log("Analisis Terminado"); return $1; };

CUERPO
    :     SENTS SENTS_              { $$ = $1.concat($2);};               

SENTS_
    :     SENTS SENTS_              { $$ = $1.concat($2);}
        | EPS       {$$ = [];};

SENTS
    :     tkStart tkWith LLAMADA tkPuntoComa
        | tkVoid tkId tkParentesisA PARAMETROS tkParentesisC tkLlaveA F_SENTS tkLlaveC
        | IMPRIMIR { $$ = [$1];}
        | IF { $$ = [$1];}
        | DECLARACIONES { $$ = [$1];}
        | ASIGNACIONES { $$ = [$1];}
        | WHILE { $$ = [$1];};

LLAMADA
    :     tkId LLAMADA_ { $$ = [Instrucciones.nuevoValor(TipoValor.Identificador, $1,this._$.first_line,this._$.first_column+1)].concat($2); };

LLAMADA_
    :     tkPunto tkId LLAMADA_ { $$ = $2.concat($3); }
        | tkParentesisA PARAMETROS_SIN tkParentesisC { $$ = $2; }
        | EPS {$$ = [];};

PARAMETROS_SIN
    :     EXP PARAMETROS_SIN_ { $$ = [$2].concat($3); }
        | EPS {$$ = [];};

PARAMETROS_SIN_
    :     tkComa EXP PARAMETROS_SIN_ { $$ = [$2].concat($3); }
        | EPS {$$ = [];};

PARAMETROS
    :     PARAMETROS_2
        | EPS;

PARAMETROS_2
    :     TIPO tkId PARAMETROS_2_;

PARAMETROS_2_
    :     tkComa TIPO tkId PARAMETROS_2_
        | EPS;

F_SENTS
    :     F_SENT F_SENT_    { $$ = $1.concat($2); };

F_SENT_
    :     F_SENT F_SENT_        { $$ = $1.concat($2); }
        | EPS   {$$ = [];};

F_SENT
    :     DECLARACIONES     { $$ = [$1]; }
        | ASIGNACIONES      { $$ = [$1]; }
        | IF                { $$ = [$1]; }
        | WHILE             { $$ = [$1]; }
        | DO_WHILE
        | FOR
        | IMPRIMIR          { $$ = [$1]; };

ASIGNACIONES
    :     tkId ASIG tkPuntoComa
        | tkId tkMas tkMas tkPuntoComa
        | tkId tkMenos tkMenos tkPuntoComa
        | tkAppend tkParentesisA tkId EXP tkParentesisC tkPuntoComa;



WHILE
    :     tkWhile tkParentesisA EXP tkParentesisC tkLlaveA tk F_SENTS tkLlaveC
            { $$ = Instrucciones.sentenciaWhile($3, $6); };

IF:       tkIf tkParentesisA EXP tkParentesisC tkLlaveA F_SENTS tkLlaveC ELSE 
            { $$ = Instrucciones.sentenciaIf($3, $6, $8); };

ELSE:     tkElse ELIF   {   $$ = $2;   }
        | EPS   {$$ = [];};

ELIF:     IF    {   $$ = $1;   }
        | tkLlaveA F_SENTS tkLlaveC    {   $$ = $2;   };

IMPRIMIR
    :     tkWriteLine tkParentesisA EXP tkParentesisC tkPuntoComa      { $$ = Instrucciones.imprimir($3); };

DECLARACIONES
    :     TIPO L_ID ASIG tkPuntoComa        { $$ = Instrucciones.declaracion($1, $2, $3); }
        | TIPO L_ID tkCorcheteA tkCorcheteC tkIgual tkNew TIPO tkCorcheteA EXP tkCorcheteC tkPuntoComa
            { $$ = Instrucciones.declaracion_array1($1, $2, $7, $9); }
        | TIPO L_ID tkCorcheteA tkCorcheteC tkIgual tkLlaveA L_EXP tkLlaveC tkPuntoComa
            { $$ = Instrucciones.declaracion_array2($1, $2, $7); }
        | tkDynamicList tkMenor TIPO tkMayor L_ID tkIgual tkNew tkDynamicList tkMenor TIPO tkMayor tkPuntoComa
            { $$ = Instrucciones.declaracion_dynamicList($3, $5, $10); };

TIPO
    :     tkString      { $$ = TipoDato.Cadena; }
        | tkChar        { $$ = TipoDato.Caracter; }
        | tkInt         { $$ = TipoDato.Numero; }
        | tkDouble      { $$ = TipoDato.Decimal; }
        | tkBoolean     { $$ = TipoDato.Booleano; };

L_ID
    :     tkId L_ID_ { $$ = [$1].concat($2); };

L_ID_
    :     tkComa tkId L_ID_     { $$ = [$2].concat($3); }
        | EPS   { $$ = []; };

ASIG
    :     tkIgual EXP   { $$ = $2; }
        //| tkIgual tkToString tkParentesisA EXP tkParentesisC { $$ = $4.concat(TipoDato.Cadena); }
        | EPS   { $$ = undefined; };

/*ASIG
    :     tkIgual ASIG_   { $$ = $2; }
        | EPS   { $$ = undefined; };

ASIG_  
    :     EXP { $$ = $1; }
        | tkToString EXP { $$ = $3.concat(TipoDato.Cadena); }
        | tkParentesisA TIPO tkParentesisC EXP { $$ = $4.concat($2); };
*/

/*CASTEOS
    :     tkParentesisA TIPO tkParentesisC { $$ = $2; }
        | EPS { $$ = []; };*/

L_EXP
    :     EXP L_EXP_ { $$ = [$1].concat($2); };

L_EXP_
    :     tkComa EXP L_EXP_ { $$ = [$2].concat($3); }
        | EPS { $$ = []; };

EXP
    :     EXP tkOr EXP                  { $$ = Instrucciones.operacionBinaria(TipoOperacion.Or, $1, $3); }
        | EXP tkAnd EXP                 { $$ = Instrucciones.operacionBinaria(TipoOperacion.And, $1, $3); }
        | tkNot EXP %prec UMENOS        { $$ = Instrucciones.operacionUnaria(TipoOperacion.NegacionUaria, $2); }
        | EXP tkInterrogacion EXP tkDosPuntos EXP  { $$ = Instrucciones.ternaria(TipoOperacion.Ternario, $1, $3, $5); }
        | EXP tkIgualIgual EXP          { $$ = Instrucciones.operacionBinaria(TipoOperacion.IgualIgual, $1, $3); }
        | EXP tkNotIgual EXP            { $$ = Instrucciones.operacionBinaria(TipoOperacion.NotIgual, $1, $3); }
        | EXP tkMenor EXP               { $$ = Instrucciones.operacionBinaria(TipoOperacion.Menor, $1, $3); }
        | EXP tkMenorIgual EXP          { $$ = Instrucciones.operacionBinaria(TipoOperacion.MenorIgual, $1, $3); }
        | EXP tkMayor EXP               { $$ = Instrucciones.operacionBinaria(TipoOperacion.Mayor, $1, $3); }
        | EXP tkMayorIgual EXP          { $$ = Instrucciones.operacionBinaria(TipoOperacion.MayorIgual, $1, $3); }
        | EXP tkMas EXP                 { $$ = Instrucciones.operacionBinaria(TipoOperacion.Suma, $1, $3); }
        | EXP tkMenos EXP               { $$ = Instrucciones.operacionBinaria(TipoOperacion.Resta, $1, $3); }
        | EXP tkPor EXP                 { $$ = Instrucciones.operacionBinaria(TipoOperacion.Multiplicacion, $1, $3); }
        | EXP tkDivision EXP            { $$ = Instrucciones.operacionBinaria(TipoOperacion.Division, $1, $3); }
        | EXP tkPotencia EXP            { $$ = Instrucciones.operacionBinaria(TipoOperacion.Potencia, $1, $3); }
        | EXP tkPorcentaje EXP          { $$ = Instrucciones.operacionBinaria(TipoOperacion.Porcentaje, $1, $3); }
        | tkMenos EXP %prec UMENOS      { $$ = Instrucciones.operacionUnaria(TipoOperacion.UnarioNegativo, $2); }
        | tkNumero                      { $$ = Instrucciones.nuevoValor(TipoValor.Numero, Number($1),this._$.first_line,this._$.first_column+1); } //yylloc.first_line,yylloc.first_column
        | tkDecimal                     { $$ = Instrucciones.nuevoValor(TipoValor.Decimal, Number($1),this._$.first_line,this._$.first_column+1); } //this._$.first_line, this._$.first_column+1
        | tkCadena                      { $$ = Instrucciones.nuevoValor(TipoValor.Cadena, $1,this._$.first_line,this._$.first_column+1); }
        | tkCaracter                    { $$ = Instrucciones.nuevoValor(TipoValor.Caracter, $1,this._$.first_line,this._$.first_column+1); }
        | tkTrue                        { $$ = Instrucciones.nuevoValor(TipoValor.Booleano, true,this._$.first_line,this._$.first_column+1); }
        | tkFalse                       { $$ = Instrucciones.nuevoValor(TipoValor.Booleano, false,this._$.first_line,this._$.first_column+1); }
        | tkParentesisA EXP tkParentesisC   { $$ = $2; }
        | tkToString tkParentesisA EXP tkParentesisC  { $$ = Instrucciones.operacionCasteo(TipoDato.Cadena, $3); }
        | tkParentesisA TIPO tkParentesisC EXP %prec UMENOS { $$ = Instrucciones.operacionCasteo($2, $4); }
        | LLAMADA                       { $$ = $1; };