// Generated from c:/javalib/tp_seminario/Hello.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class HelloParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		WHILE=18, ENDWHILE=19, IF=20, ELSE=21, ENDIF=22, DO=23, INCREMENT=24, 
		DECREMENT=25, RETURN=26, QUOTES=27, GREATER=28, LESS=29, TYPE=30, NUMBER=31, 
		ID=32, WS=33;
	public static final int
		RULE_program = 0, RULE_stat = 1, RULE_def = 2, RULE_expr = 3, RULE_logical = 4, 
		RULE_additive = 5, RULE_multiplicative = 6, RULE_unary = 7, RULE_primary = 8, 
		RULE_func = 9, RULE_while = 10, RULE_if = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stat", "def", "expr", "logical", "additive", "multiplicative", 
			"unary", "primary", "func", "while", "if"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'function'", "'('", "','", "')'", "'['", "']'", "'and'", 
			"'or'", "'+'", "'-'", "'*'", "'/'", "'**'", "'not'", "'{'", "'}'", "'while'", 
			"'endwhile'", "'if'", "'else'", "'endif'", "'do'", "'++'", "'--'", "'return'", 
			"'\"'", "'>'", "'<'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "WHILE", "ENDWHILE", "IF", "ELSE", 
			"ENDIF", "DO", "INCREMENT", "DECREMENT", "RETURN", "QUOTES", "GREATER", 
			"LESS", "TYPE", "NUMBER", "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Hello.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public HelloParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public List<DefContext> def() {
			return getRuleContexts(DefContext.class);
		}
		public DefContext def(int i) {
			return getRuleContext(DefContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 7584710656L) != 0)) {
				{
				setState(26);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__14:
				case T__15:
				case WHILE:
				case IF:
				case RETURN:
				case NUMBER:
				case ID:
					{
					setState(24);
					stat();
					}
					break;
				case TYPE:
					{
					setState(25);
					def();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(HelloParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stat);
		try {
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(31);
				match(ID);
				setState(32);
				match(T__0);
				setState(33);
				expr(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefContext extends ParserRuleContext {
		public List<TerminalNode> TYPE() { return getTokens(HelloParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(HelloParser.TYPE, i);
		}
		public List<TerminalNode> ID() { return getTokens(HelloParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(HelloParser.ID, i);
		}
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public List<TerminalNode> QUOTES() { return getTokens(HelloParser.QUOTES); }
		public TerminalNode QUOTES(int i) {
			return getToken(HelloParser.QUOTES, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(HelloParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(HelloParser.NUMBER, i);
		}
		public DefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_def; }
	}

	public final DefContext def() throws RecognitionException {
		DefContext _localctx = new DefContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_def);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(TYPE);
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(38);
				match(T__1);
				}
			}

			setState(41);
			match(ID);
			setState(42);
			match(T__2);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TYPE) {
				{
				setState(43);
				match(TYPE);
				setState(44);
				match(ID);
				setState(52);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(45);
					match(T__0);
					setState(50);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case QUOTES:
						{
						setState(46);
						match(QUOTES);
						setState(47);
						match(ID);
						setState(48);
						match(QUOTES);
						}
						break;
					case NUMBER:
						{
						setState(49);
						match(NUMBER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
			}

			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(56);
				match(T__3);
				setState(57);
				match(TYPE);
				setState(58);
				match(ID);
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(59);
					match(T__0);
					setState(64);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case QUOTES:
						{
						setState(60);
						match(QUOTES);
						setState(61);
						match(ID);
						setState(62);
						match(QUOTES);
						}
						break;
					case NUMBER:
						{
						setState(63);
						match(NUMBER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
			match(T__4);
			setState(74);
			match(T__5);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6510968832L) != 0)) {
				{
				{
				setState(75);
				stat();
				}
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(81);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public LogicalContext logical() {
			return getRuleContext(LogicalContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LESS() { return getToken(HelloParser.LESS, 0); }
		public TerminalNode GREATER() { return getToken(HelloParser.GREATER, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(84);
			logical(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(94);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(92);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(86);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(87);
						match(LESS);
						setState(88);
						logical(0);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(89);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(90);
						match(GREATER);
						setState(91);
						logical(0);
						}
						break;
					}
					} 
				}
				setState(96);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicalContext extends ParserRuleContext {
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public LogicalContext logical() {
			return getRuleContext(LogicalContext.class,0);
		}
		public LogicalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical; }
	}

	public final LogicalContext logical() throws RecognitionException {
		return logical(0);
	}

	private LogicalContext logical(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalContext _localctx = new LogicalContext(_ctx, _parentState);
		LogicalContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_logical, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(98);
			additive(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(108);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(106);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logical);
						setState(100);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(101);
						match(T__7);
						setState(102);
						additive(0);
						}
						break;
					case 2:
						{
						_localctx = new LogicalContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logical);
						setState(103);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(104);
						match(T__8);
						setState(105);
						additive(0);
						}
						break;
					}
					} 
				}
				setState(110);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AdditiveContext extends ParserRuleContext {
		public MultiplicativeContext multiplicative() {
			return getRuleContext(MultiplicativeContext.class,0);
		}
		public AdditiveContext additive() {
			return getRuleContext(AdditiveContext.class,0);
		}
		public AdditiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive; }
	}

	public final AdditiveContext additive() throws RecognitionException {
		return additive(0);
	}

	private AdditiveContext additive(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AdditiveContext _localctx = new AdditiveContext(_ctx, _parentState);
		AdditiveContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_additive, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(112);
			multiplicative(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(122);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(120);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive);
						setState(114);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(115);
						match(T__9);
						setState(116);
						multiplicative(0);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive);
						setState(117);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(118);
						match(T__10);
						setState(119);
						multiplicative(0);
						}
						break;
					}
					} 
				}
				setState(124);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultiplicativeContext extends ParserRuleContext {
		public UnaryContext unary() {
			return getRuleContext(UnaryContext.class,0);
		}
		public MultiplicativeContext multiplicative() {
			return getRuleContext(MultiplicativeContext.class,0);
		}
		public MultiplicativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicative; }
	}

	public final MultiplicativeContext multiplicative() throws RecognitionException {
		return multiplicative(0);
	}

	private MultiplicativeContext multiplicative(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MultiplicativeContext _localctx = new MultiplicativeContext(_ctx, _parentState);
		MultiplicativeContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_multiplicative, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(126);
			unary();
			}
			_ctx.stop = _input.LT(-1);
			setState(139);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(137);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicative);
						setState(128);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(129);
						match(T__11);
						setState(130);
						unary();
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicative);
						setState(131);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(132);
						match(T__12);
						setState(133);
						unary();
						}
						break;
					case 3:
						{
						_localctx = new MultiplicativeContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicative);
						setState(134);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(135);
						match(T__13);
						setState(136);
						unary();
						}
						break;
					}
					} 
				}
				setState(141);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryContext extends ParserRuleContext {
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public TerminalNode ID() { return getToken(HelloParser.ID, 0); }
		public UnaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary; }
	}

	public final UnaryContext unary() throws RecognitionException {
		UnaryContext _localctx = new UnaryContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_unary);
		try {
			setState(145);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__15:
			case WHILE:
			case IF:
			case RETURN:
			case NUMBER:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(142);
				primary();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				match(T__14);
				setState(144);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(HelloParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(HelloParser.ID, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(HelloParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(HelloParser.NUMBER, i);
		}
		public FuncContext func() {
			return getRuleContext(FuncContext.class,0);
		}
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
		}
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public TerminalNode INCREMENT() { return getToken(HelloParser.INCREMENT, 0); }
		public TerminalNode DECREMENT() { return getToken(HelloParser.DECREMENT, 0); }
		public TerminalNode RETURN() { return getToken(HelloParser.RETURN, 0); }
		public List<TerminalNode> QUOTES() { return getTokens(HelloParser.QUOTES); }
		public TerminalNode QUOTES(int i) {
			return getToken(HelloParser.QUOTES, i);
		}
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_primary);
		int _la;
		try {
			setState(181);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(147);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(148);
				match(T__15);
				setState(150);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NUMBER) {
					{
					setState(149);
					match(NUMBER);
					}
				}

				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(152);
					match(T__3);
					setState(153);
					match(NUMBER);
					}
					}
					setState(158);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(159);
				match(T__16);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(160);
				match(NUMBER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(161);
				match(ID);
				setState(162);
				match(T__5);
				setState(163);
				match(ID);
				setState(164);
				match(T__6);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(165);
				func();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(166);
				while_();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(167);
				if_();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(168);
				match(ID);
				setState(169);
				_la = _input.LA(1);
				if ( !(_la==INCREMENT || _la==DECREMENT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(170);
				match(RETURN);
				setState(171);
				match(ID);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(172);
				match(ID);
				setState(173);
				match(T__2);
				setState(178);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case QUOTES:
					{
					setState(174);
					match(QUOTES);
					setState(175);
					match(ID);
					setState(176);
					match(QUOTES);
					}
					break;
				case ID:
					{
					setState(177);
					match(ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(180);
				match(T__4);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(HelloParser.ID, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func; }
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_func);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(ID);
			setState(184);
			match(T__2);
			setState(185);
			expr(0);
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(186);
				match(T__3);
				setState(187);
				expr(0);
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(HelloParser.WHILE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DO() { return getToken(HelloParser.DO, 0); }
		public TerminalNode ENDWHILE() { return getToken(HelloParser.ENDWHILE, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public WhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while; }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_while);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(WHILE);
			setState(196);
			match(T__2);
			setState(197);
			expr(0);
			setState(198);
			match(T__4);
			setState(199);
			match(DO);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6510968832L) != 0)) {
				{
				{
				setState(200);
				stat();
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
			match(ENDWHILE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(HelloParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DO() { return getToken(HelloParser.DO, 0); }
		public TerminalNode ENDIF() { return getToken(HelloParser.ENDIF, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(HelloParser.ELSE, 0); }
		public IfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if; }
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_if);
		int _la;
		try {
			int _alt;
			setState(239);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				match(IF);
				setState(209);
				match(T__2);
				setState(210);
				expr(0);
				setState(211);
				match(T__4);
				setState(212);
				match(DO);
				setState(216);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6510968832L) != 0)) {
					{
					{
					setState(213);
					stat();
					}
					}
					setState(218);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(219);
				match(ENDIF);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(221);
				match(IF);
				setState(222);
				match(T__2);
				setState(223);
				expr(0);
				setState(224);
				match(T__4);
				setState(225);
				match(DO);
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 6510968832L) != 0)) {
					{
					{
					setState(226);
					stat();
					}
					}
					setState(231);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(232);
				match(ELSE);
				setState(236);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(233);
						stat();
						}
						} 
					}
					setState(238);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 4:
			return logical_sempred((LogicalContext)_localctx, predIndex);
		case 5:
			return additive_sempred((AdditiveContext)_localctx, predIndex);
		case 6:
			return multiplicative_sempred((MultiplicativeContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logical_sempred(LogicalContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean additive_sempred(AdditiveContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 2);
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multiplicative_sempred(MultiplicativeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 3);
		case 7:
			return precpred(_ctx, 2);
		case 8:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001!\u00f2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\u001b\b\u0000\n\u0000\f\u0000\u001e\t\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001$\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0003\u0002(\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u00023\b\u0002\u0003\u00025\b\u0002\u0003\u00027\b"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002A\b\u0002\u0003\u0002C\b\u0002"+
		"\u0005\u0002E\b\u0002\n\u0002\f\u0002H\t\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0005\u0002M\b\u0002\n\u0002\f\u0002P\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003]\b\u0003"+
		"\n\u0003\f\u0003`\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004"+
		"k\b\u0004\n\u0004\f\u0004n\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0005\u0005y\b\u0005\n\u0005\f\u0005|\t\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006\u008a\b\u0006"+
		"\n\u0006\f\u0006\u008d\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007\u0092\b\u0007\u0001\b\u0001\b\u0001\b\u0003\b\u0097\b\b\u0001\b"+
		"\u0001\b\u0005\b\u009b\b\b\n\b\f\b\u009e\t\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u00b3\b\b\u0001"+
		"\b\u0003\b\u00b6\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u00bd"+
		"\b\t\n\t\f\t\u00c0\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n"+
		"\u0001\n\u0001\n\u0005\n\u00ca\b\n\n\n\f\n\u00cd\t\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005"+
		"\u000b\u00d7\b\u000b\n\u000b\f\u000b\u00da\t\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0005\u000b\u00e4\b\u000b\n\u000b\f\u000b\u00e7\t\u000b\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\u00eb\b\u000b\n\u000b\f\u000b\u00ee\t\u000b\u0003\u000b"+
		"\u00f0\b\u000b\u0001\u000b\u0000\u0004\u0006\b\n\f\f\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0001\u0001\u0000\u0018"+
		"\u0019\u010c\u0000\u001c\u0001\u0000\u0000\u0000\u0002#\u0001\u0000\u0000"+
		"\u0000\u0004%\u0001\u0000\u0000\u0000\u0006S\u0001\u0000\u0000\u0000\b"+
		"a\u0001\u0000\u0000\u0000\no\u0001\u0000\u0000\u0000\f}\u0001\u0000\u0000"+
		"\u0000\u000e\u0091\u0001\u0000\u0000\u0000\u0010\u00b5\u0001\u0000\u0000"+
		"\u0000\u0012\u00b7\u0001\u0000\u0000\u0000\u0014\u00c3\u0001\u0000\u0000"+
		"\u0000\u0016\u00ef\u0001\u0000\u0000\u0000\u0018\u001b\u0003\u0002\u0001"+
		"\u0000\u0019\u001b\u0003\u0004\u0002\u0000\u001a\u0018\u0001\u0000\u0000"+
		"\u0000\u001a\u0019\u0001\u0000\u0000\u0000\u001b\u001e\u0001\u0000\u0000"+
		"\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001c\u001d\u0001\u0000\u0000"+
		"\u0000\u001d\u0001\u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000"+
		"\u0000\u001f \u0005 \u0000\u0000 !\u0005\u0001\u0000\u0000!$\u0003\u0006"+
		"\u0003\u0000\"$\u0003\u0006\u0003\u0000#\u001f\u0001\u0000\u0000\u0000"+
		"#\"\u0001\u0000\u0000\u0000$\u0003\u0001\u0000\u0000\u0000%\'\u0005\u001e"+
		"\u0000\u0000&(\u0005\u0002\u0000\u0000\'&\u0001\u0000\u0000\u0000\'(\u0001"+
		"\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)*\u0005 \u0000\u0000*6\u0005"+
		"\u0003\u0000\u0000+,\u0005\u001e\u0000\u0000,4\u0005 \u0000\u0000-2\u0005"+
		"\u0001\u0000\u0000./\u0005\u001b\u0000\u0000/0\u0005 \u0000\u000003\u0005"+
		"\u001b\u0000\u000013\u0005\u001f\u0000\u00002.\u0001\u0000\u0000\u0000"+
		"21\u0001\u0000\u0000\u000035\u0001\u0000\u0000\u00004-\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000057\u0001\u0000\u0000\u00006+\u0001\u0000"+
		"\u0000\u000067\u0001\u0000\u0000\u00007F\u0001\u0000\u0000\u000089\u0005"+
		"\u0004\u0000\u00009:\u0005\u001e\u0000\u0000:B\u0005 \u0000\u0000;@\u0005"+
		"\u0001\u0000\u0000<=\u0005\u001b\u0000\u0000=>\u0005 \u0000\u0000>A\u0005"+
		"\u001b\u0000\u0000?A\u0005\u001f\u0000\u0000@<\u0001\u0000\u0000\u0000"+
		"@?\u0001\u0000\u0000\u0000AC\u0001\u0000\u0000\u0000B;\u0001\u0000\u0000"+
		"\u0000BC\u0001\u0000\u0000\u0000CE\u0001\u0000\u0000\u0000D8\u0001\u0000"+
		"\u0000\u0000EH\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001"+
		"\u0000\u0000\u0000GI\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000"+
		"IJ\u0005\u0005\u0000\u0000JN\u0005\u0006\u0000\u0000KM\u0003\u0002\u0001"+
		"\u0000LK\u0001\u0000\u0000\u0000MP\u0001\u0000\u0000\u0000NL\u0001\u0000"+
		"\u0000\u0000NO\u0001\u0000\u0000\u0000OQ\u0001\u0000\u0000\u0000PN\u0001"+
		"\u0000\u0000\u0000QR\u0005\u0007\u0000\u0000R\u0005\u0001\u0000\u0000"+
		"\u0000ST\u0006\u0003\uffff\uffff\u0000TU\u0003\b\u0004\u0000U^\u0001\u0000"+
		"\u0000\u0000VW\n\u0002\u0000\u0000WX\u0005\u001d\u0000\u0000X]\u0003\b"+
		"\u0004\u0000YZ\n\u0001\u0000\u0000Z[\u0005\u001c\u0000\u0000[]\u0003\b"+
		"\u0004\u0000\\V\u0001\u0000\u0000\u0000\\Y\u0001\u0000\u0000\u0000]`\u0001"+
		"\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000"+
		"_\u0007\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000ab\u0006\u0004"+
		"\uffff\uffff\u0000bc\u0003\n\u0005\u0000cl\u0001\u0000\u0000\u0000de\n"+
		"\u0002\u0000\u0000ef\u0005\b\u0000\u0000fk\u0003\n\u0005\u0000gh\n\u0001"+
		"\u0000\u0000hi\u0005\t\u0000\u0000ik\u0003\n\u0005\u0000jd\u0001\u0000"+
		"\u0000\u0000jg\u0001\u0000\u0000\u0000kn\u0001\u0000\u0000\u0000lj\u0001"+
		"\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000m\t\u0001\u0000\u0000\u0000"+
		"nl\u0001\u0000\u0000\u0000op\u0006\u0005\uffff\uffff\u0000pq\u0003\f\u0006"+
		"\u0000qz\u0001\u0000\u0000\u0000rs\n\u0002\u0000\u0000st\u0005\n\u0000"+
		"\u0000ty\u0003\f\u0006\u0000uv\n\u0001\u0000\u0000vw\u0005\u000b\u0000"+
		"\u0000wy\u0003\f\u0006\u0000xr\u0001\u0000\u0000\u0000xu\u0001\u0000\u0000"+
		"\u0000y|\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000z{\u0001\u0000"+
		"\u0000\u0000{\u000b\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000"+
		"}~\u0006\u0006\uffff\uffff\u0000~\u007f\u0003\u000e\u0007\u0000\u007f"+
		"\u008b\u0001\u0000\u0000\u0000\u0080\u0081\n\u0003\u0000\u0000\u0081\u0082"+
		"\u0005\f\u0000\u0000\u0082\u008a\u0003\u000e\u0007\u0000\u0083\u0084\n"+
		"\u0002\u0000\u0000\u0084\u0085\u0005\r\u0000\u0000\u0085\u008a\u0003\u000e"+
		"\u0007\u0000\u0086\u0087\n\u0001\u0000\u0000\u0087\u0088\u0005\u000e\u0000"+
		"\u0000\u0088\u008a\u0003\u000e\u0007\u0000\u0089\u0080\u0001\u0000\u0000"+
		"\u0000\u0089\u0083\u0001\u0000\u0000\u0000\u0089\u0086\u0001\u0000\u0000"+
		"\u0000\u008a\u008d\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\r\u0001\u0000\u0000\u0000"+
		"\u008d\u008b\u0001\u0000\u0000\u0000\u008e\u0092\u0003\u0010\b\u0000\u008f"+
		"\u0090\u0005\u000f\u0000\u0000\u0090\u0092\u0005 \u0000\u0000\u0091\u008e"+
		"\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0092\u000f"+
		"\u0001\u0000\u0000\u0000\u0093\u00b6\u0005 \u0000\u0000\u0094\u0096\u0005"+
		"\u0010\u0000\u0000\u0095\u0097\u0005\u001f\u0000\u0000\u0096\u0095\u0001"+
		"\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u009c\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\u0005\u0004\u0000\u0000\u0099\u009b\u0005"+
		"\u001f\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u009e\u0001"+
		"\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001"+
		"\u0000\u0000\u0000\u009d\u009f\u0001\u0000\u0000\u0000\u009e\u009c\u0001"+
		"\u0000\u0000\u0000\u009f\u00b6\u0005\u0011\u0000\u0000\u00a0\u00b6\u0005"+
		"\u001f\u0000\u0000\u00a1\u00a2\u0005 \u0000\u0000\u00a2\u00a3\u0005\u0006"+
		"\u0000\u0000\u00a3\u00a4\u0005 \u0000\u0000\u00a4\u00b6\u0005\u0007\u0000"+
		"\u0000\u00a5\u00b6\u0003\u0012\t\u0000\u00a6\u00b6\u0003\u0014\n\u0000"+
		"\u00a7\u00b6\u0003\u0016\u000b\u0000\u00a8\u00a9\u0005 \u0000\u0000\u00a9"+
		"\u00b6\u0007\u0000\u0000\u0000\u00aa\u00ab\u0005\u001a\u0000\u0000\u00ab"+
		"\u00b6\u0005 \u0000\u0000\u00ac\u00ad\u0005 \u0000\u0000\u00ad\u00b2\u0005"+
		"\u0003\u0000\u0000\u00ae\u00af\u0005\u001b\u0000\u0000\u00af\u00b0\u0005"+
		" \u0000\u0000\u00b0\u00b3\u0005\u001b\u0000\u0000\u00b1\u00b3\u0005 \u0000"+
		"\u0000\u00b2\u00ae\u0001\u0000\u0000\u0000\u00b2\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4\u00b6\u0005\u0005\u0000"+
		"\u0000\u00b5\u0093\u0001\u0000\u0000\u0000\u00b5\u0094\u0001\u0000\u0000"+
		"\u0000\u00b5\u00a0\u0001\u0000\u0000\u0000\u00b5\u00a1\u0001\u0000\u0000"+
		"\u0000\u00b5\u00a5\u0001\u0000\u0000\u0000\u00b5\u00a6\u0001\u0000\u0000"+
		"\u0000\u00b5\u00a7\u0001\u0000\u0000\u0000\u00b5\u00a8\u0001\u0000\u0000"+
		"\u0000\u00b5\u00aa\u0001\u0000\u0000\u0000\u00b5\u00ac\u0001\u0000\u0000"+
		"\u0000\u00b6\u0011\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005 \u0000\u0000"+
		"\u00b8\u00b9\u0005\u0003\u0000\u0000\u00b9\u00be\u0003\u0006\u0003\u0000"+
		"\u00ba\u00bb\u0005\u0004\u0000\u0000\u00bb\u00bd\u0003\u0006\u0003\u0000"+
		"\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bd\u00c0\u0001\u0000\u0000\u0000"+
		"\u00be\u00bc\u0001\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000"+
		"\u00bf\u00c1\u0001\u0000\u0000\u0000\u00c0\u00be\u0001\u0000\u0000\u0000"+
		"\u00c1\u00c2\u0005\u0005\u0000\u0000\u00c2\u0013\u0001\u0000\u0000\u0000"+
		"\u00c3\u00c4\u0005\u0012\u0000\u0000\u00c4\u00c5\u0005\u0003\u0000\u0000"+
		"\u00c5\u00c6\u0003\u0006\u0003\u0000\u00c6\u00c7\u0005\u0005\u0000\u0000"+
		"\u00c7\u00cb\u0005\u0017\u0000\u0000\u00c8\u00ca\u0003\u0002\u0001\u0000"+
		"\u00c9\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cd\u0001\u0000\u0000\u0000"+
		"\u00cb\u00c9\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000"+
		"\u00cc\u00ce\u0001\u0000\u0000\u0000\u00cd\u00cb\u0001\u0000\u0000\u0000"+
		"\u00ce\u00cf\u0005\u0013\u0000\u0000\u00cf\u0015\u0001\u0000\u0000\u0000"+
		"\u00d0\u00d1\u0005\u0014\u0000\u0000\u00d1\u00d2\u0005\u0003\u0000\u0000"+
		"\u00d2\u00d3\u0003\u0006\u0003\u0000\u00d3\u00d4\u0005\u0005\u0000\u0000"+
		"\u00d4\u00d8\u0005\u0017\u0000\u0000\u00d5\u00d7\u0003\u0002\u0001\u0000"+
		"\u00d6\u00d5\u0001\u0000\u0000\u0000\u00d7\u00da\u0001\u0000\u0000\u0000"+
		"\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001\u0000\u0000\u0000"+
		"\u00d9\u00db\u0001\u0000\u0000\u0000\u00da\u00d8\u0001\u0000\u0000\u0000"+
		"\u00db\u00dc\u0005\u0016\u0000\u0000\u00dc\u00f0\u0001\u0000\u0000\u0000"+
		"\u00dd\u00de\u0005\u0014\u0000\u0000\u00de\u00df\u0005\u0003\u0000\u0000"+
		"\u00df\u00e0\u0003\u0006\u0003\u0000\u00e0\u00e1\u0005\u0005\u0000\u0000"+
		"\u00e1\u00e5\u0005\u0017\u0000\u0000\u00e2\u00e4\u0003\u0002\u0001\u0000"+
		"\u00e3\u00e2\u0001\u0000\u0000\u0000\u00e4\u00e7\u0001\u0000\u0000\u0000"+
		"\u00e5\u00e3\u0001\u0000\u0000\u0000\u00e5\u00e6\u0001\u0000\u0000\u0000"+
		"\u00e6\u00e8\u0001\u0000\u0000\u0000\u00e7\u00e5\u0001\u0000\u0000\u0000"+
		"\u00e8\u00ec\u0005\u0015\u0000\u0000\u00e9\u00eb\u0003\u0002\u0001\u0000"+
		"\u00ea\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ee\u0001\u0000\u0000\u0000"+
		"\u00ec\u00ea\u0001\u0000\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000\u0000"+
		"\u00ed\u00f0\u0001\u0000\u0000\u0000\u00ee\u00ec\u0001\u0000\u0000\u0000"+
		"\u00ef\u00d0\u0001\u0000\u0000\u0000\u00ef\u00dd\u0001\u0000\u0000\u0000"+
		"\u00f0\u0017\u0001\u0000\u0000\u0000\u001e\u001a\u001c#\'246@BFN\\^jl"+
		"xz\u0089\u008b\u0091\u0096\u009c\u00b2\u00b5\u00be\u00cb\u00d8\u00e5\u00ec"+
		"\u00ef";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}