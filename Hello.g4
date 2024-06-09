grammar Hello;

WHILE: 'while';
ENDWHILE: 'endwhile';
IF: 'if';
ELSE: 'else';
ENDIF: 'endif';
DO: 'do';
INCREMENT: '++';
DECREMENT: '--';
RETURN: 'return';
QUOTES: '"';
GREATER: '>';
LESS: '<';
TYPE: 'void' | 'int' | 'string';
NUMBER: [0-9]+;
ID: [a-zA-Z_][a-zA-Z_0-9]*;
WS: [ \t\n\r\f]+ -> skip;

program: (stat | def)*;

stat: ID '=' expr | expr;

def:
	TYPE 'function'? ID '(' (
		TYPE ID ('=' ('"' ID '"' | NUMBER))?
	)? (',' TYPE ID ('=' ('"' ID '"' | NUMBER))?)* ')' '[' stat* ']';

expr: logical | expr '<' logical | expr '>' logical;

logical:
	additive
	| logical 'and' additive
	| logical 'or' additive;

additive:
	multiplicative
	| additive '+' multiplicative
	| additive '-' multiplicative;

multiplicative:
	unary
	| multiplicative '*' unary
	| multiplicative '/' unary
	| multiplicative '**' unary;

unary: primary | 'not' ID;

primary:
	ID
	| '{' NUMBER? (',' NUMBER)* '}'
	| NUMBER
	| ID '[' ID ']'
	| func
	| while
	| if
	| ID (INCREMENT | DECREMENT)
	| RETURN ID
	| ID '(' ('"' ID '"' | ID) ')';

func: ID '(' expr (',' expr)* ')';

while: WHILE '(' expr ')' DO stat* ENDWHILE;

if:
	IF '(' expr ')' DO stat* ENDIF
	| IF '(' expr ')' DO stat* ELSE stat*;