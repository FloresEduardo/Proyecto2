%lex

%options case-insensitive

%%


\\n 												   // salto de linea
\s+													  // espacios en blanco
"//".*												 // Comentario unilinea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]					// Comentario multilinea

\"[^\"]*\"                  	{ yytext = yytext.substr(1, yyleng-2); return 'tkCadena'; }
\'[^\']?\'                  	{ yytext = yytext.substr(1, yyleng-2); return 'tkCaracter'; }
[0-9]+("."[0-9]+)?\b  			return 'tkNumero';
([a-zA-Z])([a-zA-Z0-9_])*		return 'tkId';

"int"					return 'tkInt';
"double"				return 'tkDouble';
"boolean"				return 'tkBoolean';
"string"				return 'tkString';
"char"					return 'tkChar';
"new"					return 'tkNew';
"DynamicLis"			return 'tkDynamicList';
"append"				return 'tkAppend';
"getValue"				return 'tkGetValue';
"setValue"				return 'tkSetValue';
"if"					return 'tkIf';
"else"					return 'tkElse';
"WriteLine"				return 'tkWriteLine';
"switch"				return 'tkSwitch';
"case"					return 'tkCase';
"default"				return 'tkDefault';
"break"					return 'tkBreak';
"while"					return 'tkWhile';
"do"					return 'tkDo';
"for"					return 'tkFor';
"return"				return 'tkReturn';
"void"					return 'tkVoid';
"toLower"				return 'tkToLower';
"toUpper"				return 'tkToUpper';
"length"				return 'tkLength';
"truncate"				return 'tkTruncate';
"round"					return 'tkRound';
"typeOf"				return 'tkTypeOf';
"toString"				return 'tkToString';
"toCharArray"			return 'tkToCharArray';
"start"					return 'tkStart';
"with"					return 'tkWith';
"true"					return 'tkTrue';
"false"					return 'tkFalse';
"count"					return 'tkCount';

"<="	return 'tkMenorIgual';
">="	return 'tkMayorIgual';
"=="	return 'tkIgualIgual';
"!="	return 'tkNotIgual';
"&&"	return 'tkAnd';
"||"	return 'tkOr';

"+"		return 'tkMas';
"-"		return 'tkMenos';
"/"		return 'tkDivision';
"*"		return 'tkPor';
"%"		return 'tkPorcentaje';
"^"		return 'tkPotencia';
"="		return 'tkIgual';
"!"		return 'tkNot';
"<"		return 'tkMenor';
">"		return 'tkMayor';
"("		return 'tkParentesisA';
")"		return 'tkParentesisC';
"{"		return 'tkLlaveA';
"}"		return 'tkLlaveC';
"["		return 'tkCorcheteA';
"]"		return 'tkCorcheteC';
";"		return 'tkPuntoComa';
":" 	return 'tkDosPuntos';
","		return 'tkComa';
"."		return 'tkPunto';

<<EOF>>		return 'EOF';
.           {console.log('Error Lexico: '+yytext+' en la linea' + yylloc.first_line + ' en la columna '+yylloc.first_column); }

/lex

%{

%}

%right 'tkOr'
%right 'tkAnd'
%right 'tkNot'
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
    :     SENTS SENTS_ ;               

SENTS
    :     tkStart tkWith LLAMADA tkPuntoComa
        | tkVoid tkId tkParentesisA PARAMETROS tkParentesisC tkLlaveA F_SENTS tkLlaveC;


LLAMADA
    :     tkId LLAMADA_;

LLAMADA_
    :     tkPunto tkId LLAMADA_
        | tkParentesisA PARAMETROS_SIN tkParentesisC
        | EPS;

PARAMETROS_SIN
    :     EXP PARAMETROS_SIN_
        | EPS;

PARAMETROS_SIN_
    :     tkComa EXP PARAMETROS_SIN_
        | EPS;

PARAMETROS
    :     PARAMETROS_2
        | EPS;

PARAMETROS_2
    :     TIPO tkId PARAMETROS_2_;

PARAMETROS_2_
    :     tkComa TIPO tkId PARAMETROS_2_
        | EPS;

F_SENTS
    :     F_SENT F_SENT_;

F_SENT_
    :     F_SENT F_SENT_
        | EPS;

F_SENT
    :     DECLARACIONES
        | ASIGNACIONES
        | IF
        | WHILE
        | DO_WHILE
        | FOR;

DECLARACIONES
    :     TIPO L_ID ASIG tkPuntoComa;

TIPO
    :     tkString
        | tkChar
        | tkInt
        | tkDouble
        | tkBoolean
        | tkId;

L_ID
    :     tkId L_ID_;

L_ID_
    :     tkComa tkId L_ID_
        | EPS;

ASIG
    :     tkIgual EXP
        | EPS;

EXP
	:	  EXP tkOr EXP
        | EXP tkAnd EXP
        | tkNot EXP
        | EXP tkIgualIgual EXP
        | EXP tkNotIgual EXP
        | EXP tkMenor EXP
        | EXP tkMenorIgual EXP
        | EXP tkMayor EXP
        | EXP tkMayorIgual EXP
        | EXP tkMas EXP
        | EXP tkMenos EXP
        | EXP tkPor EXP
        | EXP tkDivision EXP
        | EXP tkPorcentaje EXP
        | tkMenos EXP %prec UMENOS
        | tkNumero
        | tkCadena
        | tkCaracter
        | tkTrue
        | tkFalse
        | tkParentesisA EXP tkParentesisC
        | LLAMADA;