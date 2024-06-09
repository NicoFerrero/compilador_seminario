// Generated from Hello.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HelloListener from './HelloListener.js';
const serializedATN = [4,1,33,242,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,5,
0,27,8,0,10,0,12,0,30,9,0,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,3,2,40,8,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,51,8,2,3,2,53,8,2,3,2,55,8,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,65,8,2,3,2,67,8,2,5,2,69,8,2,10,2,12,2,72,
9,2,1,2,1,2,1,2,5,2,77,8,2,10,2,12,2,80,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,5,3,93,8,3,10,3,12,3,96,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,5,4,107,8,4,10,4,12,4,110,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,5,5,121,8,5,10,5,12,5,124,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,5,6,138,8,6,10,6,12,6,141,9,6,1,7,1,7,1,7,3,7,146,8,7,1,8,1,8,1,
8,3,8,151,8,8,1,8,1,8,5,8,155,8,8,10,8,12,8,158,9,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,179,8,8,1,8,
3,8,182,8,8,1,9,1,9,1,9,1,9,1,9,5,9,189,8,9,10,9,12,9,192,9,9,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,1,10,5,10,202,8,10,10,10,12,10,205,9,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,11,5,11,215,8,11,10,11,12,11,218,9,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,228,8,11,10,11,12,11,231,9,11,1,11,
1,11,5,11,235,8,11,10,11,12,11,238,9,11,3,11,240,8,11,1,11,0,4,6,8,10,12,
12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,24,25,268,0,28,1,0,0,0,2,35,1,
0,0,0,4,37,1,0,0,0,6,83,1,0,0,0,8,97,1,0,0,0,10,111,1,0,0,0,12,125,1,0,0,
0,14,145,1,0,0,0,16,181,1,0,0,0,18,183,1,0,0,0,20,195,1,0,0,0,22,239,1,0,
0,0,24,27,3,2,1,0,25,27,3,4,2,0,26,24,1,0,0,0,26,25,1,0,0,0,27,30,1,0,0,
0,28,26,1,0,0,0,28,29,1,0,0,0,29,1,1,0,0,0,30,28,1,0,0,0,31,32,5,32,0,0,
32,33,5,1,0,0,33,36,3,6,3,0,34,36,3,6,3,0,35,31,1,0,0,0,35,34,1,0,0,0,36,
3,1,0,0,0,37,39,5,30,0,0,38,40,5,2,0,0,39,38,1,0,0,0,39,40,1,0,0,0,40,41,
1,0,0,0,41,42,5,32,0,0,42,54,5,3,0,0,43,44,5,30,0,0,44,52,5,32,0,0,45,50,
5,1,0,0,46,47,5,27,0,0,47,48,5,32,0,0,48,51,5,27,0,0,49,51,5,31,0,0,50,46,
1,0,0,0,50,49,1,0,0,0,51,53,1,0,0,0,52,45,1,0,0,0,52,53,1,0,0,0,53,55,1,
0,0,0,54,43,1,0,0,0,54,55,1,0,0,0,55,70,1,0,0,0,56,57,5,4,0,0,57,58,5,30,
0,0,58,66,5,32,0,0,59,64,5,1,0,0,60,61,5,27,0,0,61,62,5,32,0,0,62,65,5,27,
0,0,63,65,5,31,0,0,64,60,1,0,0,0,64,63,1,0,0,0,65,67,1,0,0,0,66,59,1,0,0,
0,66,67,1,0,0,0,67,69,1,0,0,0,68,56,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,
70,71,1,0,0,0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,5,5,0,0,74,78,5,6,0,0,75,
77,3,2,1,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,
1,0,0,0,80,78,1,0,0,0,81,82,5,7,0,0,82,5,1,0,0,0,83,84,6,3,-1,0,84,85,3,
8,4,0,85,94,1,0,0,0,86,87,10,2,0,0,87,88,5,29,0,0,88,93,3,8,4,0,89,90,10,
1,0,0,90,91,5,28,0,0,91,93,3,8,4,0,92,86,1,0,0,0,92,89,1,0,0,0,93,96,1,0,
0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,7,1,0,0,0,96,94,1,0,0,0,97,98,6,4,-1,
0,98,99,3,10,5,0,99,108,1,0,0,0,100,101,10,2,0,0,101,102,5,8,0,0,102,107,
3,10,5,0,103,104,10,1,0,0,104,105,5,9,0,0,105,107,3,10,5,0,106,100,1,0,0,
0,106,103,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,9,
1,0,0,0,110,108,1,0,0,0,111,112,6,5,-1,0,112,113,3,12,6,0,113,122,1,0,0,
0,114,115,10,2,0,0,115,116,5,10,0,0,116,121,3,12,6,0,117,118,10,1,0,0,118,
119,5,11,0,0,119,121,3,12,6,0,120,114,1,0,0,0,120,117,1,0,0,0,121,124,1,
0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,11,1,0,0,0,124,122,1,0,0,0,125,
126,6,6,-1,0,126,127,3,14,7,0,127,139,1,0,0,0,128,129,10,3,0,0,129,130,5,
12,0,0,130,138,3,14,7,0,131,132,10,2,0,0,132,133,5,13,0,0,133,138,3,14,7,
0,134,135,10,1,0,0,135,136,5,14,0,0,136,138,3,14,7,0,137,128,1,0,0,0,137,
131,1,0,0,0,137,134,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,
0,0,140,13,1,0,0,0,141,139,1,0,0,0,142,146,3,16,8,0,143,144,5,15,0,0,144,
146,5,32,0,0,145,142,1,0,0,0,145,143,1,0,0,0,146,15,1,0,0,0,147,182,5,32,
0,0,148,150,5,16,0,0,149,151,5,31,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,
156,1,0,0,0,152,153,5,4,0,0,153,155,5,31,0,0,154,152,1,0,0,0,155,158,1,0,
0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,
182,5,17,0,0,160,182,5,31,0,0,161,162,5,32,0,0,162,163,5,6,0,0,163,164,5,
32,0,0,164,182,5,7,0,0,165,182,3,18,9,0,166,182,3,20,10,0,167,182,3,22,11,
0,168,169,5,32,0,0,169,182,7,0,0,0,170,171,5,26,0,0,171,182,5,32,0,0,172,
173,5,32,0,0,173,178,5,3,0,0,174,175,5,27,0,0,175,176,5,32,0,0,176,179,5,
27,0,0,177,179,5,32,0,0,178,174,1,0,0,0,178,177,1,0,0,0,179,180,1,0,0,0,
180,182,5,5,0,0,181,147,1,0,0,0,181,148,1,0,0,0,181,160,1,0,0,0,181,161,
1,0,0,0,181,165,1,0,0,0,181,166,1,0,0,0,181,167,1,0,0,0,181,168,1,0,0,0,
181,170,1,0,0,0,181,172,1,0,0,0,182,17,1,0,0,0,183,184,5,32,0,0,184,185,
5,3,0,0,185,190,3,6,3,0,186,187,5,4,0,0,187,189,3,6,3,0,188,186,1,0,0,0,
189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,
1,0,0,0,193,194,5,5,0,0,194,19,1,0,0,0,195,196,5,18,0,0,196,197,5,3,0,0,
197,198,3,6,3,0,198,199,5,5,0,0,199,203,5,23,0,0,200,202,3,2,1,0,201,200,
1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,206,1,0,0,0,
205,203,1,0,0,0,206,207,5,19,0,0,207,21,1,0,0,0,208,209,5,20,0,0,209,210,
5,3,0,0,210,211,3,6,3,0,211,212,5,5,0,0,212,216,5,23,0,0,213,215,3,2,1,0,
214,213,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,219,
1,0,0,0,218,216,1,0,0,0,219,220,5,22,0,0,220,240,1,0,0,0,221,222,5,20,0,
0,222,223,5,3,0,0,223,224,3,6,3,0,224,225,5,5,0,0,225,229,5,23,0,0,226,228,
3,2,1,0,227,226,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,
230,232,1,0,0,0,231,229,1,0,0,0,232,236,5,21,0,0,233,235,3,2,1,0,234,233,
1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,240,1,0,0,0,
238,236,1,0,0,0,239,208,1,0,0,0,239,221,1,0,0,0,240,23,1,0,0,0,30,26,28,
35,39,50,52,54,64,66,70,78,92,94,106,108,120,122,137,139,145,150,156,178,
181,190,203,216,229,236,239];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HelloParser extends antlr4.Parser {

    static grammarFileName = "Hello.g4";
    static literalNames = [ null, "'='", "'function'", "'('", "','", "')'", 
                            "'['", "']'", "'and'", "'or'", "'+'", "'-'", 
                            "'*'", "'/'", "'**'", "'not'", "'{'", "'}'", 
                            "'while'", "'endwhile'", "'if'", "'else'", "'endif'", 
                            "'do'", "'++'", "'--'", "'return'", "'\"'", 
                            "'>'", "'<'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "WHILE", "ENDWHILE", "IF", "ELSE", 
                             "ENDIF", "DO", "INCREMENT", "DECREMENT", "RETURN", 
                             "QUOTES", "GREATER", "LESS", "TYPE", "NUMBER", 
                             "ID", "WS" ];
    static ruleNames = [ "program", "stat", "def", "expr", "logical", "additive", 
                         "multiplicative", "unary", "primary", "func", "while", 
                         "if" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HelloParser.ruleNames;
        this.literalNames = HelloParser.literalNames;
        this.symbolicNames = HelloParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 4:
    	    		return this.logical_sempred(localctx, predIndex);
    	case 5:
    	    		return this.additive_sempred(localctx, predIndex);
    	case 6:
    	    		return this.multiplicative_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    logical_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    additive_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicative_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 3);
    		case 7:
    			return this.precpred(this._ctx, 2);
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HelloParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 231467) !== 0)) {
	            this.state = 26;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 15:
	            case 16:
	            case 18:
	            case 20:
	            case 26:
	            case 31:
	            case 32:
	                this.state = 24;
	                this.stat();
	                break;
	            case 30:
	                this.state = 25;
	                this.def();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HelloParser.RULE_stat);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.match(HelloParser.ID);
	            this.state = 32;
	            this.match(HelloParser.T__0);
	            this.state = 33;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	def() {
	    let localctx = new DefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HelloParser.RULE_def);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(HelloParser.TYPE);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 38;
	            this.match(HelloParser.T__1);
	        }

	        this.state = 41;
	        this.match(HelloParser.ID);
	        this.state = 42;
	        this.match(HelloParser.T__2);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 43;
	            this.match(HelloParser.TYPE);
	            this.state = 44;
	            this.match(HelloParser.ID);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 45;
	                this.match(HelloParser.T__0);
	                this.state = 50;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 27:
	                    this.state = 46;
	                    this.match(HelloParser.QUOTES);
	                    this.state = 47;
	                    this.match(HelloParser.ID);
	                    this.state = 48;
	                    this.match(HelloParser.QUOTES);
	                    break;
	                case 31:
	                    this.state = 49;
	                    this.match(HelloParser.NUMBER);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 56;
	            this.match(HelloParser.T__3);
	            this.state = 57;
	            this.match(HelloParser.TYPE);
	            this.state = 58;
	            this.match(HelloParser.ID);
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 59;
	                this.match(HelloParser.T__0);
	                this.state = 64;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 27:
	                    this.state = 60;
	                    this.match(HelloParser.QUOTES);
	                    this.state = 61;
	                    this.match(HelloParser.ID);
	                    this.state = 62;
	                    this.match(HelloParser.QUOTES);
	                    break;
	                case 31:
	                    this.state = 63;
	                    this.match(HelloParser.NUMBER);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
	        this.match(HelloParser.T__4);
	        this.state = 74;
	        this.match(HelloParser.T__5);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 198699) !== 0)) {
	            this.state = 75;
	            this.stat();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
	        this.match(HelloParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, HelloParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.logical(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 92;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_expr);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 87;
	                    this.match(HelloParser.LESS);
	                    this.state = 88;
	                    this.logical(0);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 90;
	                    this.match(HelloParser.GREATER);
	                    this.state = 91;
	                    this.logical(0);
	                    break;

	                } 
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	logical(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, HelloParser.RULE_logical, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.additive(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 106;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicalContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_logical);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 101;
	                    this.match(HelloParser.T__7);
	                    this.state = 102;
	                    this.additive(0);
	                    break;

	                case 2:
	                    localctx = new LogicalContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_logical);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 104;
	                    this.match(HelloParser.T__8);
	                    this.state = 105;
	                    this.additive(0);
	                    break;

	                } 
	            }
	            this.state = 110;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	additive(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AdditiveContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, HelloParser.RULE_additive, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.multiplicative(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 120;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditiveContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_additive);
	                    this.state = 114;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 115;
	                    this.match(HelloParser.T__9);
	                    this.state = 116;
	                    this.multiplicative(0);
	                    break;

	                case 2:
	                    localctx = new AdditiveContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_additive);
	                    this.state = 117;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 118;
	                    this.match(HelloParser.T__10);
	                    this.state = 119;
	                    this.multiplicative(0);
	                    break;

	                } 
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multiplicative(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultiplicativeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, HelloParser.RULE_multiplicative, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.unary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 139;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 137;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_multiplicative);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 129;
	                    this.match(HelloParser.T__11);
	                    this.state = 130;
	                    this.unary();
	                    break;

	                case 2:
	                    localctx = new MultiplicativeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_multiplicative);
	                    this.state = 131;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 132;
	                    this.match(HelloParser.T__12);
	                    this.state = 133;
	                    this.unary();
	                    break;

	                case 3:
	                    localctx = new MultiplicativeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HelloParser.RULE_multiplicative);
	                    this.state = 134;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 135;
	                    this.match(HelloParser.T__13);
	                    this.state = 136;
	                    this.unary();
	                    break;

	                } 
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HelloParser.RULE_unary);
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 18:
	        case 20:
	        case 26:
	        case 31:
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.primary();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            this.match(HelloParser.T__14);
	            this.state = 144;
	            this.match(HelloParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HelloParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.match(HelloParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(HelloParser.T__15);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 149;
	                this.match(HelloParser.NUMBER);
	            }

	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 152;
	                this.match(HelloParser.T__3);
	                this.state = 153;
	                this.match(HelloParser.NUMBER);
	                this.state = 158;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 159;
	            this.match(HelloParser.T__16);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
	            this.match(HelloParser.NUMBER);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 161;
	            this.match(HelloParser.ID);
	            this.state = 162;
	            this.match(HelloParser.T__5);
	            this.state = 163;
	            this.match(HelloParser.ID);
	            this.state = 164;
	            this.match(HelloParser.T__6);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 165;
	            this.func();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 167;
	            this.if_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 168;
	            this.match(HelloParser.ID);
	            this.state = 169;
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===25)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 170;
	            this.match(HelloParser.RETURN);
	            this.state = 171;
	            this.match(HelloParser.ID);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 172;
	            this.match(HelloParser.ID);
	            this.state = 173;
	            this.match(HelloParser.T__2);
	            this.state = 178;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 27:
	                this.state = 174;
	                this.match(HelloParser.QUOTES);
	                this.state = 175;
	                this.match(HelloParser.ID);
	                this.state = 176;
	                this.match(HelloParser.QUOTES);
	                break;
	            case 32:
	                this.state = 177;
	                this.match(HelloParser.ID);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 180;
	            this.match(HelloParser.T__4);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HelloParser.RULE_func);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(HelloParser.ID);
	        this.state = 184;
	        this.match(HelloParser.T__2);
	        this.state = 185;
	        this.expr(0);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 186;
	            this.match(HelloParser.T__3);
	            this.state = 187;
	            this.expr(0);
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 193;
	        this.match(HelloParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HelloParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(HelloParser.WHILE);
	        this.state = 196;
	        this.match(HelloParser.T__2);
	        this.state = 197;
	        this.expr(0);
	        this.state = 198;
	        this.match(HelloParser.T__4);
	        this.state = 199;
	        this.match(HelloParser.DO);
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 198699) !== 0)) {
	            this.state = 200;
	            this.stat();
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 206;
	        this.match(HelloParser.ENDWHILE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HelloParser.RULE_if);
	    var _la = 0;
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 208;
	            this.match(HelloParser.IF);
	            this.state = 209;
	            this.match(HelloParser.T__2);
	            this.state = 210;
	            this.expr(0);
	            this.state = 211;
	            this.match(HelloParser.T__4);
	            this.state = 212;
	            this.match(HelloParser.DO);
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 198699) !== 0)) {
	                this.state = 213;
	                this.stat();
	                this.state = 218;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 219;
	            this.match(HelloParser.ENDIF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 221;
	            this.match(HelloParser.IF);
	            this.state = 222;
	            this.match(HelloParser.T__2);
	            this.state = 223;
	            this.expr(0);
	            this.state = 224;
	            this.match(HelloParser.T__4);
	            this.state = 225;
	            this.match(HelloParser.DO);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 198699) !== 0)) {
	                this.state = 226;
	                this.stat();
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 232;
	            this.match(HelloParser.ELSE);
	            this.state = 236;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 233;
	                    this.stat(); 
	                }
	                this.state = 238;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.T__0 = 1;
HelloParser.T__1 = 2;
HelloParser.T__2 = 3;
HelloParser.T__3 = 4;
HelloParser.T__4 = 5;
HelloParser.T__5 = 6;
HelloParser.T__6 = 7;
HelloParser.T__7 = 8;
HelloParser.T__8 = 9;
HelloParser.T__9 = 10;
HelloParser.T__10 = 11;
HelloParser.T__11 = 12;
HelloParser.T__12 = 13;
HelloParser.T__13 = 14;
HelloParser.T__14 = 15;
HelloParser.T__15 = 16;
HelloParser.T__16 = 17;
HelloParser.WHILE = 18;
HelloParser.ENDWHILE = 19;
HelloParser.IF = 20;
HelloParser.ELSE = 21;
HelloParser.ENDIF = 22;
HelloParser.DO = 23;
HelloParser.INCREMENT = 24;
HelloParser.DECREMENT = 25;
HelloParser.RETURN = 26;
HelloParser.QUOTES = 27;
HelloParser.GREATER = 28;
HelloParser.LESS = 29;
HelloParser.TYPE = 30;
HelloParser.NUMBER = 31;
HelloParser.ID = 32;
HelloParser.WS = 33;

HelloParser.RULE_program = 0;
HelloParser.RULE_stat = 1;
HelloParser.RULE_def = 2;
HelloParser.RULE_expr = 3;
HelloParser.RULE_logical = 4;
HelloParser.RULE_additive = 5;
HelloParser.RULE_multiplicative = 6;
HelloParser.RULE_unary = 7;
HelloParser.RULE_primary = 8;
HelloParser.RULE_func = 9;
HelloParser.RULE_while = 10;
HelloParser.RULE_if = 11;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_program;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	def = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefContext);
	    } else {
	        return this.getTypedRuleContext(DefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_stat;
    }

	ID() {
	    return this.getToken(HelloParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitStat(this);
		}
	}


}



class DefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_def;
    }

	TYPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.TYPE);
	    } else {
	        return this.getToken(HelloParser.TYPE, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.ID);
	    } else {
	        return this.getToken(HelloParser.ID, i);
	    }
	};


	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	QUOTES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.QUOTES);
	    } else {
	        return this.getToken(HelloParser.QUOTES, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.NUMBER);
	    } else {
	        return this.getToken(HelloParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitDef(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_expr;
    }

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	LESS() {
	    return this.getToken(HelloParser.LESS, 0);
	};

	GREATER() {
	    return this.getToken(HelloParser.GREATER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitExpr(this);
		}
	}


}



class LogicalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_logical;
    }

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterLogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitLogical(this);
		}
	}


}



class AdditiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_additive;
    }

	multiplicative() {
	    return this.getTypedRuleContext(MultiplicativeContext,0);
	};

	additive() {
	    return this.getTypedRuleContext(AdditiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitAdditive(this);
		}
	}


}



class MultiplicativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_multiplicative;
    }

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	multiplicative() {
	    return this.getTypedRuleContext(MultiplicativeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitMultiplicative(this);
		}
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_unary;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	ID() {
	    return this.getToken(HelloParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitUnary(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_primary;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.ID);
	    } else {
	        return this.getToken(HelloParser.ID, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.NUMBER);
	    } else {
	        return this.getToken(HelloParser.NUMBER, i);
	    }
	};


	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	INCREMENT() {
	    return this.getToken(HelloParser.INCREMENT, 0);
	};

	DECREMENT() {
	    return this.getToken(HelloParser.DECREMENT, 0);
	};

	RETURN() {
	    return this.getToken(HelloParser.RETURN, 0);
	};

	QUOTES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HelloParser.QUOTES);
	    } else {
	        return this.getToken(HelloParser.QUOTES, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitPrimary(this);
		}
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_func;
    }

	ID() {
	    return this.getToken(HelloParser.ID, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitFunc(this);
		}
	}


}



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(HelloParser.WHILE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	DO() {
	    return this.getToken(HelloParser.DO, 0);
	};

	ENDWHILE() {
	    return this.getToken(HelloParser.ENDWHILE, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitWhile(this);
		}
	}


}



class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HelloParser.RULE_if;
    }

	IF() {
	    return this.getToken(HelloParser.IF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	DO() {
	    return this.getToken(HelloParser.DO, 0);
	};

	ENDIF() {
	    return this.getToken(HelloParser.ENDIF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(HelloParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HelloListener ) {
	        listener.exitIf(this);
		}
	}


}




HelloParser.ProgramContext = ProgramContext; 
HelloParser.StatContext = StatContext; 
HelloParser.DefContext = DefContext; 
HelloParser.ExprContext = ExprContext; 
HelloParser.LogicalContext = LogicalContext; 
HelloParser.AdditiveContext = AdditiveContext; 
HelloParser.MultiplicativeContext = MultiplicativeContext; 
HelloParser.UnaryContext = UnaryContext; 
HelloParser.PrimaryContext = PrimaryContext; 
HelloParser.FuncContext = FuncContext; 
HelloParser.WhileContext = WhileContext; 
HelloParser.IfContext = IfContext; 
