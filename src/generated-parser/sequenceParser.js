// Generated from sequenceParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sequenceParserListener = require('./sequenceParserListener').sequenceParserListener;
var grammarFileName = "sequenceParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u0236\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002h\n\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002m\n\u0002\u0003\u0003\u0003",
    "\u0003\u0006\u0003q\n\u0003\r\u0003\u000e\u0003r\u0003\u0003\u0003\u0003",
    "\u0007\u0003w\n\u0003\f\u0003\u000e\u0003z\u000b\u0003\u0003\u0003\u0005",
    "\u0003}\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0081\n\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\u0085\n\u0004\f\u0004\u000e\u0004\u0088",
    "\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008d\n",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0092\n\u0004",
    "\u0005\u0004\u0094\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u00a8\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0005\u0007\u00ad\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u00b1\n\u0007\u0003\u0007\u0005\u0007\u00b4\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00b9\n\u0007\u0005",
    "\u0007\u00bb\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00cd\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u00d2\n",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\f\u00d9\n\f",
    "\r\f\u000e\f\u00da\u0003\r\u0003\r\u0003\r\u0005\r\u00e0\n\r\u0003\r",
    "\u0003\r\u0003\r\u0005\r\u00e5\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00ea\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00f4",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00fa\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ff",
    "\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0104\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u010b\n\u0013\u0003\u0014\u0005\u0014\u010e\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0114\n\u0014\u0003\u0014",
    "\u0005\u0014\u0117\n\u0014\u0003\u0014\u0005\u0014\u011a\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0121",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0126\n\u0014",
    "\u0003\u0014\u0005\u0014\u0129\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u012e\n\u0015\u0003\u0016\u0005\u0016\u0131\n\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u0135\n\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u013e\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u0143\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0148",
    "\n\u0017\f\u0017\u000e\u0017\u014b\u000b\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u0150\n\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0006\u0017\u0155\n\u0017\r\u0017\u000e\u0017\u0156\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u015e\n",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0164",
    "\n\u0017\u0007\u0017\u0166\n\u0017\f\u0017\u000e\u0017\u0169\u000b\u0017",
    "\u0005\u0017\u016b\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0005\u0019\u0171\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u0176\n\u001a\u0003\u001a\u0005\u001a\u0179\n\u001a\u0003",
    "\u001b\u0005\u001b\u017c\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u019a\n\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0007\"\u01a9\n\"\f\"\u000e\"\u01ac\u000b",
    "\"\u0003\"\u0005\"\u01af\n\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0007%\u01b8\n%\f%\u000e%\u01bb\u000b%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0005&\u01c2\n&\u0003\'\u0003\'\u0003\'\u0003(\u0003",
    "(\u0007(\u01c9\n(\f(\u000e(\u01cc\u000b(\u0003(\u0005(\u01cf\n(\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u01d8\n)\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u01e4",
    "\n*\u0003+\u0003+\u0003+\u0005+\u01e9\n+\u0003,\u0003,\u0005,\u01ed",
    "\n,\u0003,\u0003,\u0005,\u01f1\n,\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0005-\u01fa\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0005.\u0204\n.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0007.\u021b\n.\f.\u000e.\u021e",
    "\u000b.\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u0225\n/\u00030\u0003",
    "0\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00050\u0230\n0\u0003",
    "1\u00031\u00051\u0234\n1\u00031\u0002\u0003Z2\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<>@BDFHJLNPRTVXZ\\^`\u0002\t\u0004\u0002--00\u0003\u0002\u0012\u0014",
    "\u0003\u0002\u0010\u0011\u0003\u0002\f\u000f\u0003\u0002\n\u000b\u0003",
    "\u0002./\u0003\u0002\u001e\u001f\u0002\u027f\u0002l\u0003\u0002\u0002",
    "\u0002\u0004|\u0003\u0002\u0002\u0002\u0006\u0093\u0003\u0002\u0002",
    "\u0002\b\u00a7\u0003\u0002\u0002\u0002\n\u00a9\u0003\u0002\u0002\u0002",
    "\f\u00ba\u0003\u0002\u0002\u0002\u000e\u00cc\u0003\u0002\u0002\u0002",
    "\u0010\u00d1\u0003\u0002\u0002\u0002\u0012\u00d3\u0003\u0002\u0002\u0002",
    "\u0014\u00d5\u0003\u0002\u0002\u0002\u0016\u00d8\u0003\u0002\u0002\u0002",
    "\u0018\u00e4\u0003\u0002\u0002\u0002\u001a\u00e9\u0003\u0002\u0002\u0002",
    "\u001c\u00f9\u0003\u0002\u0002\u0002\u001e\u00fe\u0003\u0002\u0002\u0002",
    " \u0103\u0003\u0002\u0002\u0002\"\u0105\u0003\u0002\u0002\u0002$\u0107",
    "\u0003\u0002\u0002\u0002&\u0128\u0003\u0002\u0002\u0002(\u012a\u0003",
    "\u0002\u0002\u0002*\u0134\u0003\u0002\u0002\u0002,\u016a\u0003\u0002",
    "\u0002\u0002.\u016c\u0003\u0002\u0002\u00020\u016e\u0003\u0002\u0002",
    "\u00022\u0178\u0003\u0002\u0002\u00024\u017b\u0003\u0002\u0002\u0002",
    "6\u0199\u0003\u0002\u0002\u00028\u019b\u0003\u0002\u0002\u0002:\u019d",
    "\u0003\u0002\u0002\u0002<\u019f\u0003\u0002\u0002\u0002>\u01a1\u0003",
    "\u0002\u0002\u0002@\u01a3\u0003\u0002\u0002\u0002B\u01ae\u0003\u0002",
    "\u0002\u0002D\u01b0\u0003\u0002\u0002\u0002F\u01b2\u0003\u0002\u0002",
    "\u0002H\u01b4\u0003\u0002\u0002\u0002J\u01c1\u0003\u0002\u0002\u0002",
    "L\u01c3\u0003\u0002\u0002\u0002N\u01c6\u0003\u0002\u0002\u0002P\u01d7",
    "\u0003\u0002\u0002\u0002R\u01e3\u0003\u0002\u0002\u0002T\u01e8\u0003",
    "\u0002\u0002\u0002V\u01f0\u0003\u0002\u0002\u0002X\u01f9\u0003\u0002",
    "\u0002\u0002Z\u0203\u0003\u0002\u0002\u0002\\\u0224\u0003\u0002\u0002",
    "\u0002^\u022f\u0003\u0002\u0002\u0002`\u0233\u0003\u0002\u0002\u0002",
    "bm\u0007\u0002\u0002\u0003cd\u0005\u0004\u0003\u0002de\u0007\u0002\u0002",
    "\u0003em\u0003\u0002\u0002\u0002fh\u0005\u0004\u0003\u0002gf\u0003\u0002",
    "\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0005",
    "\u0016\f\u0002jk\u0007\u0002\u0002\u0003km\u0003\u0002\u0002\u0002l",
    "b\u0003\u0002\u0002\u0002lc\u0003\u0002\u0002\u0002lg\u0003\u0002\u0002",
    "\u0002m\u0003\u0003\u0002\u0002\u0002nq\u0005\u0006\u0004\u0002oq\u0005",
    "\f\u0007\u0002pn\u0003\u0002\u0002\u0002po\u0003\u0002\u0002\u0002q",
    "r\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002s}\u0003\u0002\u0002\u0002tw\u0005\u0006\u0004\u0002uw\u0005\f",
    "\u0007\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y{\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{}\u0005\b\u0005",
    "\u0002|p\u0003\u0002\u0002\u0002|x\u0003\u0002\u0002\u0002}\u0005\u0003",
    "\u0002\u0002\u0002~\u0080\u0007)\u0002\u0002\u007f\u0081\u0005\u0012",
    "\n\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0086\u0007\u001c",
    "\u0002\u0002\u0083\u0085\u0005\f\u0007\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089\u0003\u0002",
    "\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u0094\u0007\u001d",
    "\u0002\u0002\u008a\u008c\u0007)\u0002\u0002\u008b\u008d\u0005\u0012",
    "\n\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0094\u0007\u001c",
    "\u0002\u0002\u008f\u0091\u0007)\u0002\u0002\u0090\u0092\u0005\u0012",
    "\n\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002\u0093~\u0003\u0002",
    "\u0002\u0002\u0093\u008a\u0003\u0002\u0002\u0002\u0093\u008f\u0003\u0002",
    "\u0002\u0002\u0094\u0007\u0003\u0002\u0002\u0002\u0095\u0096\u0007\u0007",
    "\u0002\u0002\u0096\u0097\u0007&\u0002\u0002\u0097\u0098\u0007\u001a",
    "\u0002\u0002\u0098\u0099\u0005\n\u0006\u0002\u0099\u009a\u0007\u001b",
    "\u0002\u0002\u009a\u00a8\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0007",
    "\u0002\u0002\u009c\u009d\u0007&\u0002\u0002\u009d\u009e\u0007\u001a",
    "\u0002\u0002\u009e\u00a8\u0007\u001b\u0002\u0002\u009f\u00a0\u0007\u0007",
    "\u0002\u0002\u00a0\u00a1\u0007&\u0002\u0002\u00a1\u00a8\u0007\u001a",
    "\u0002\u0002\u00a2\u00a3\u0007\u0007\u0002\u0002\u00a3\u00a8\u0007&",
    "\u0002\u0002\u00a4\u00a5\u0007\u0007\u0002\u0002\u00a5\u00a8\u0007-",
    "\u0002\u0002\u00a6\u00a8\u0007\u0007\u0002\u0002\u00a7\u0095\u0003\u0002",
    "\u0002\u0002\u00a7\u009b\u0003\u0002\u0002\u0002\u00a7\u009f\u0003\u0002",
    "\u0002\u0002\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a7\u00a4\u0003\u0002",
    "\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\t\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0007-\u0002\u0002\u00aa\u000b\u0003\u0002",
    "\u0002\u0002\u00ab\u00ad\u0005\u000e\b\u0002\u00ac\u00ab\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002",
    "\u0002\u0002\u00ae\u00b0\u0005\u0012\n\u0002\u00af\u00b1\u0005\u0014",
    "\u000b\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b4\u0005\u0010",
    "\t\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002",
    "\u0002\u0002\u00b4\u00bb\u0003\u0002\u0002\u0002\u00b5\u00bb\u0005\u000e",
    "\b\u0002\u00b6\u00b8\u0005\u0012\n\u0002\u00b7\u00b9\u0005\u0014\u000b",
    "\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00ac\u0003\u0002\u0002",
    "\u0002\u00ba\u00b5\u0003\u0002\u0002\u0002\u00ba\u00b6\u0003\u0002\u0002",
    "\u0002\u00bb\r\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0004\u0002",
    "\u0002\u00bd\u00be\u0005\u0012\n\u0002\u00be\u00bf\u0007\u0005\u0002",
    "\u0002\u00bf\u00cd\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u0004\u0002",
    "\u0002\u00c1\u00cd\u0005\u0012\n\u0002\u00c2\u00c3\u0007\u0004\u0002",
    "\u0002\u00c3\u00c4\u0005\u0012\n\u0002\u00c4\u00c5\u0007\f\u0002\u0002",
    "\u00c5\u00cd\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0004\u0002\u0002",
    "\u00c7\u00cd\u0007\f\u0002\u0002\u00c8\u00c9\u0007\u0004\u0002\u0002",
    "\u00c9\u00cd\u0007\u0005\u0002\u0002\u00ca\u00cd\u0007\u0004\u0002\u0002",
    "\u00cb\u00cd\u0007\r\u0002\u0002\u00cc\u00bc\u0003\u0002\u0002\u0002",
    "\u00cc\u00c0\u0003\u0002\u0002\u0002\u00cc\u00c2\u0003\u0002\u0002\u0002",
    "\u00cc\u00c6\u0003\u0002\u0002\u0002\u00cc\u00c8\u0003\u0002\u0002\u0002",
    "\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002",
    "\u00cd\u000f\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007+\u0002\u0002",
    "\u00cf\u00d2\u0005\u0012\n\u0002\u00d0\u00d2\u0007+\u0002\u0002\u00d1",
    "\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d2",
    "\u0011\u0003\u0002\u0002\u0002\u00d3\u00d4\t\u0002\u0002\u0002\u00d4",
    "\u0013\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007.\u0002\u0002\u00d6",
    "\u0015\u0003\u0002\u0002\u0002\u00d7\u00d9\u0005\u001c\u000f\u0002\u00d8",
    "\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da",
    "\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db",
    "\u0017\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007$\u0002\u0002\u00dd",
    "\u00df\u0005\u001a\u000e\u0002\u00de\u00e0\u0007\u0017\u0002\u0002\u00df",
    "\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e5\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007$\u0002\u0002\u00e2",
    "\u00e5\u0005\u001a\u000e\u0002\u00e3\u00e5\u0007$\u0002\u0002\u00e4",
    "\u00dc\u0003\u0002\u0002\u0002\u00e4\u00e1\u0003\u0002\u0002\u0002\u00e4",
    "\u00e3\u0003\u0002\u0002\u0002\u00e5\u0019\u0003\u0002\u0002\u0002\u00e6",
    "\u00ea\u0005\\/\u0002\u00e7\u00ea\u0007-\u0002\u0002\u00e8\u00ea\u0007",
    "0\u0002\u0002\u00e9\u00e6\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003",
    "\u0002\u0002\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea\u001b\u0003",
    "\u0002\u0002\u0002\u00eb\u00fa\u0005N(\u0002\u00ec\u00fa\u0005\u001e",
    "\u0010\u0002\u00ed\u00fa\u0005 \u0011\u0002\u00ee\u00fa\u0005X-\u0002",
    "\u00ef\u00fa\u0005$\u0013\u0002\u00f0\u00fa\u0005(\u0015\u0002\u00f1",
    "\u00f3\u00056\u001c\u0002\u00f2\u00f4\u00076\u0002\u0002\u00f3\u00f2",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00fa",
    "\u0003\u0002\u0002\u0002\u00f5\u00fa\u0005\"\u0012\u0002\u00f6\u00fa",
    "\u0005\u0018\r\u0002\u00f7\u00f8\u00074\u0002\u0002\u00f8\u00fa\b\u000f",
    "\u0001\u0002\u00f9\u00eb\u0003\u0002\u0002\u0002\u00f9\u00ec\u0003\u0002",
    "\u0002\u0002\u00f9\u00ed\u0003\u0002\u0002\u0002\u00f9\u00ee\u0003\u0002",
    "\u0002\u0002\u00f9\u00ef\u0003\u0002\u0002\u0002\u00f9\u00f0\u0003\u0002",
    "\u0002\u0002\u00f9\u00f1\u0003\u0002\u0002\u0002\u00f9\u00f5\u0003\u0002",
    "\u0002\u0002\u00f9\u00f6\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002",
    "\u0002\u0002\u00fa\u001d\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007(",
    "\u0002\u0002\u00fc\u00ff\u0005V,\u0002\u00fd\u00ff\u0007(\u0002\u0002",
    "\u00fe\u00fb\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002",
    "\u00ff\u001f\u0003\u0002\u0002\u0002\u0100\u0101\u0007*\u0002\u0002",
    "\u0101\u0104\u0005V,\u0002\u0102\u0104\u0007*\u0002\u0002\u0103\u0100",
    "\u0003\u0002\u0002\u0002\u0103\u0102\u0003\u0002\u0002\u0002\u0104!",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0005V,\u0002\u0106#\u0003\u0002",
    "\u0002\u0002\u0107\u010a\u0005&\u0014\u0002\u0108\u010b\u0007\u0017",
    "\u0002\u0002\u0109\u010b\u0005V,\u0002\u010a\u0108\u0003\u0002\u0002",
    "\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002",
    "\u0002\u010b%\u0003\u0002\u0002\u0002\u010c\u010e\u00054\u001b\u0002",
    "\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0110\u0007%\u0002\u0002",
    "\u0110\u0116\u0005> \u0002\u0111\u0113\u0007\u001a\u0002\u0002\u0112",
    "\u0114\u0005H%\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0117",
    "\u0007\u001b\u0002\u0002\u0116\u0111\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0117\u0129\u0003\u0002\u0002\u0002\u0118\u011a",
    "\u00054\u001b\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011c",
    "\u0007%\u0002\u0002\u011c\u011d\u0005> \u0002\u011d\u011e\u0007\u001a",
    "\u0002\u0002\u011e\u0129\u0003\u0002\u0002\u0002\u011f\u0121\u00054",
    "\u001b\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002",
    "\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0123\u0007%",
    "\u0002\u0002\u0123\u0129\u0005> \u0002\u0124\u0126\u00054\u001b\u0002",
    "\u0125\u0124\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002",
    "\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0129\u0007%\u0002\u0002",
    "\u0128\u010d\u0003\u0002\u0002\u0002\u0128\u0119\u0003\u0002\u0002\u0002",
    "\u0128\u0120\u0003\u0002\u0002\u0002\u0128\u0125\u0003\u0002\u0002\u0002",
    "\u0129\'\u0003\u0002\u0002\u0002\u012a\u012d\u0005*\u0016\u0002\u012b",
    "\u012e\u0007\u0017\u0002\u0002\u012c\u012e\u0005V,\u0002\u012d\u012b",
    "\u0003\u0002\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0003\u0002\u0002\u0002\u012e)\u0003\u0002\u0002\u0002\u012f\u0131",
    "\u00054\u001b\u0002\u0130\u012f\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132\u0135",
    "\u0005,\u0017\u0002\u0133\u0135\u00054\u001b\u0002\u0134\u0130\u0003",
    "\u0002\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135+\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0005.\u0018\u0002\u0137\u0138\u0007",
    "\u0006\u0002\u0002\u0138\u0139\u0005D#\u0002\u0139\u016b\u0003\u0002",
    "\u0002\u0002\u013a\u013b\u0005.\u0018\u0002\u013b\u013c\u0007\u0006",
    "\u0002\u0002\u013c\u013e\u0003\u0002\u0002\u0002\u013d\u013a\u0003\u0002",
    "\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u0142\u0003\u0002",
    "\u0002\u0002\u013f\u0140\u0005D#\u0002\u0140\u0141\u0007,\u0002\u0002",
    "\u0141\u0143\u0003\u0002\u0002\u0002\u0142\u013f\u0003\u0002\u0002\u0002",
    "\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002",
    "\u0144\u0149\u00050\u0019\u0002\u0145\u0146\u0007,\u0002\u0002\u0146",
    "\u0148\u00050\u0019\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0148",
    "\u014b\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u0149",
    "\u014a\u0003\u0002\u0002\u0002\u014a\u016b\u0003\u0002\u0002\u0002\u014b",
    "\u0149\u0003\u0002\u0002\u0002\u014c\u014d\u0005.\u0018\u0002\u014d",
    "\u014e\u0007\u0006\u0002\u0002\u014e\u0150\u0003\u0002\u0002\u0002\u014f",
    "\u014c\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150",
    "\u0151\u0003\u0002\u0002\u0002\u0151\u0154\u0005D#\u0002\u0152\u0153",
    "\u0007,\u0002\u0002\u0153\u0155\u00050\u0019\u0002\u0154\u0152\u0003",
    "\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0154\u0003",
    "\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0003",
    "\u0002\u0002\u0002\u0158\u0159\u0007,\u0002\u0002\u0159\u016b\u0003",
    "\u0002\u0002\u0002\u015a\u015b\u0005.\u0018\u0002\u015b\u015c\u0007",
    "\u0006\u0002\u0002\u015c\u015e\u0003\u0002\u0002\u0002\u015d\u015a\u0003",
    "\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002\u015e\u015f\u0003",
    "\u0002\u0002\u0002\u015f\u0160\u0005D#\u0002\u0160\u0167\u0007,\u0002",
    "\u0002\u0161\u0163\u0007,\u0002\u0002\u0162\u0164\u00050\u0019\u0002",
    "\u0163\u0162\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002",
    "\u0164\u0166\u0003\u0002\u0002\u0002\u0165\u0161\u0003\u0002\u0002\u0002",
    "\u0166\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002\u0002",
    "\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u0136\u0003\u0002\u0002\u0002",
    "\u016a\u013d\u0003\u0002\u0002\u0002\u016a\u014f\u0003\u0002\u0002\u0002",
    "\u016a\u015d\u0003\u0002\u0002\u0002\u016b-\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0007-\u0002\u0002\u016d/\u0003\u0002\u0002\u0002\u016e",
    "\u0170\u0005F$\u0002\u016f\u0171\u00052\u001a\u0002\u0170\u016f\u0003",
    "\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u01711\u0003",
    "\u0002\u0002\u0002\u0172\u0179\u0007\u001a\u0002\u0002\u0173\u0175\u0007",
    "\u001a\u0002\u0002\u0174\u0176\u0005H%\u0002\u0175\u0174\u0003\u0002",
    "\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002",
    "\u0002\u0002\u0177\u0179\u0007\u001b\u0002\u0002\u0178\u0172\u0003\u0002",
    "\u0002\u0002\u0178\u0173\u0003\u0002\u0002\u0002\u01793\u0003\u0002",
    "\u0002\u0002\u017a\u017c\u0005@!\u0002\u017b\u017a\u0003\u0002\u0002",
    "\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0005B\"\u0002\u017e\u017f\u0007\u0019\u0002\u0002",
    "\u017f5\u0003\u0002\u0002\u0002\u0180\u0181\u0005:\u001e\u0002\u0181",
    "\u0182\u0007\u0006\u0002\u0002\u0182\u0183\u0005<\u001f\u0002\u0183",
    "\u0184\u0007\u0003\u0002\u0002\u0184\u0185\u00058\u001d\u0002\u0185",
    "\u019a\u0003\u0002\u0002\u0002\u0186\u0187\u0005:\u001e\u0002\u0187",
    "\u0188\u0007\u0006\u0002\u0002\u0188\u0189\u0005<\u001f\u0002\u0189",
    "\u018a\u0007\u0003\u0002\u0002\u018a\u019a\u0003\u0002\u0002\u0002\u018b",
    "\u018c\u0005<\u001f\u0002\u018c\u018d\u0007\u0003\u0002\u0002\u018d",
    "\u018e\u00058\u001d\u0002\u018e\u019a\u0003\u0002\u0002\u0002\u018f",
    "\u0190\u0005:\u001e\u0002\u0190\u0191\u0007\u0006\u0002\u0002\u0191",
    "\u0192\u0005<\u001f\u0002\u0192\u019a\u0003\u0002\u0002\u0002\u0193",
    "\u0194\u0005:\u001e\u0002\u0194\u0195\u0007\u0006\u0002\u0002\u0195",
    "\u019a\u0003\u0002\u0002\u0002\u0196\u0197\u0005:\u001e\u0002\u0197",
    "\u0198\u0007\u0011\u0002\u0002\u0198\u019a\u0003\u0002\u0002\u0002\u0199",
    "\u0180\u0003\u0002\u0002\u0002\u0199\u0186\u0003\u0002\u0002\u0002\u0199",
    "\u018b\u0003\u0002\u0002\u0002\u0199\u018f\u0003\u0002\u0002\u0002\u0199",
    "\u0193\u0003\u0002\u0002\u0002\u0199\u0196\u0003\u0002\u0002\u0002\u019a",
    "7\u0003\u0002\u0002\u0002\u019b\u019c\u00075\u0002\u0002\u019c9\u0003",
    "\u0002\u0002\u0002\u019d\u019e\u0007-\u0002\u0002\u019e;\u0003\u0002",
    "\u0002\u0002\u019f\u01a0\t\u0002\u0002\u0002\u01a0=\u0003\u0002\u0002",
    "\u0002\u01a1\u01a2\t\u0002\u0002\u0002\u01a2?\u0003\u0002\u0002\u0002",
    "\u01a3\u01a4\u0007-\u0002\u0002\u01a4A\u0003\u0002\u0002\u0002\u01a5",
    "\u01aa\u0007-\u0002\u0002\u01a6\u01a7\u0007\u0018\u0002\u0002\u01a7",
    "\u01a9\u0007-\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9",
    "\u01ac\u0003\u0002\u0002\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01aa",
    "\u01ab\u0003\u0002\u0002\u0002\u01ab\u01af\u0003\u0002\u0002\u0002\u01ac",
    "\u01aa\u0003\u0002\u0002\u0002\u01ad\u01af\u00070\u0002\u0002\u01ae",
    "\u01a5\u0003\u0002\u0002\u0002\u01ae\u01ad\u0003\u0002\u0002\u0002\u01af",
    "C\u0003\u0002\u0002\u0002\u01b0\u01b1\t\u0002\u0002\u0002\u01b1E\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\t\u0002\u0002\u0002\u01b3G\u0003\u0002",
    "\u0002\u0002\u01b4\u01b9\u0005J&\u0002\u01b5\u01b6\u0007\u0018\u0002",
    "\u0002\u01b6\u01b8\u0005J&\u0002\u01b7\u01b5\u0003\u0002\u0002\u0002",
    "\u01b8\u01bb\u0003\u0002\u0002\u0002\u01b9\u01b7\u0003\u0002\u0002\u0002",
    "\u01b9\u01ba\u0003\u0002\u0002\u0002\u01baI\u0003\u0002\u0002\u0002",
    "\u01bb\u01b9\u0003\u0002\u0002\u0002\u01bc\u01c2\u0005L\'\u0002\u01bd",
    "\u01c2\u0007-\u0002\u0002\u01be\u01c2\u0005\\/\u0002\u01bf\u01c2\u0005",
    "Z.\u0002\u01c0\u01c2\u0005$\u0013\u0002\u01c1\u01bc\u0003\u0002\u0002",
    "\u0002\u01c1\u01bd\u0003\u0002\u0002\u0002\u01c1\u01be\u0003\u0002\u0002",
    "\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c1\u01c0\u0003\u0002\u0002",
    "\u0002\u01c2K\u0003\u0002\u0002\u0002\u01c3\u01c4\u0005@!\u0002\u01c4",
    "\u01c5\u0007-\u0002\u0002\u01c5M\u0003\u0002\u0002\u0002\u01c6\u01ca",
    "\u0005P)\u0002\u01c7\u01c9\u0005R*\u0002\u01c8\u01c7\u0003\u0002\u0002",
    "\u0002\u01c9\u01cc\u0003\u0002\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002",
    "\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002\u01cb\u01ce\u0003\u0002\u0002",
    "\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002\u01cd\u01cf\u0005T+\u0002",
    "\u01ce\u01cd\u0003\u0002\u0002\u0002\u01ce\u01cf\u0003\u0002\u0002\u0002",
    "\u01cfO\u0003\u0002\u0002\u0002\u01d0\u01d1\u0007!\u0002\u0002\u01d1",
    "\u01d2\u0005^0\u0002\u01d2\u01d3\u0005V,\u0002\u01d3\u01d8\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0007!\u0002\u0002\u01d5\u01d8\u0005^0\u0002",
    "\u01d6\u01d8\u0007!\u0002\u0002\u01d7\u01d0\u0003\u0002\u0002\u0002",
    "\u01d7\u01d4\u0003\u0002\u0002\u0002\u01d7\u01d6\u0003\u0002\u0002\u0002",
    "\u01d8Q\u0003\u0002\u0002\u0002\u01d9\u01da\u0007\"\u0002\u0002\u01da",
    "\u01db\u0007!\u0002\u0002\u01db\u01dc\u0005^0\u0002\u01dc\u01dd\u0005",
    "V,\u0002\u01dd\u01e4\u0003\u0002\u0002\u0002\u01de\u01df\u0007\"\u0002",
    "\u0002\u01df\u01e0\u0007!\u0002\u0002\u01e0\u01e4\u0005^0\u0002\u01e1",
    "\u01e2\u0007\"\u0002\u0002\u01e2\u01e4\u0007!\u0002\u0002\u01e3\u01d9",
    "\u0003\u0002\u0002\u0002\u01e3\u01de\u0003\u0002\u0002\u0002\u01e3\u01e1",
    "\u0003\u0002\u0002\u0002\u01e4S\u0003\u0002\u0002\u0002\u01e5\u01e6",
    "\u0007\"\u0002\u0002\u01e6\u01e9\u0005V,\u0002\u01e7\u01e9\u0007\"\u0002",
    "\u0002\u01e8\u01e5\u0003\u0002\u0002\u0002\u01e8\u01e7\u0003\u0002\u0002",
    "\u0002\u01e9U\u0003\u0002\u0002\u0002\u01ea\u01ec\u0007\u001c\u0002",
    "\u0002\u01eb\u01ed\u0005\u0016\f\u0002\u01ec\u01eb\u0003\u0002\u0002",
    "\u0002\u01ec\u01ed\u0003\u0002\u0002\u0002\u01ed\u01ee\u0003\u0002\u0002",
    "\u0002\u01ee\u01f1\u0007\u001d\u0002\u0002\u01ef\u01f1\u0007\u001c\u0002",
    "\u0002\u01f0\u01ea\u0003\u0002\u0002\u0002\u01f0\u01ef\u0003\u0002\u0002",
    "\u0002\u01f1W\u0003\u0002\u0002\u0002\u01f2\u01f3\u0007#\u0002\u0002",
    "\u01f3\u01f4\u0005^0\u0002\u01f4\u01f5\u0005V,\u0002\u01f5\u01fa\u0003",
    "\u0002\u0002\u0002\u01f6\u01f7\u0007#\u0002\u0002\u01f7\u01fa\u0005",
    "^0\u0002\u01f8\u01fa\u0007#\u0002\u0002\u01f9\u01f2\u0003\u0002\u0002",
    "\u0002\u01f9\u01f6\u0003\u0002\u0002\u0002\u01f9\u01f8\u0003\u0002\u0002",
    "\u0002\u01faY\u0003\u0002\u0002\u0002\u01fb\u01fc\b.\u0001\u0002\u01fc",
    "\u01fd\u0007\u0011\u0002\u0002\u01fd\u0204\u0005Z.\u000e\u01fe\u01ff",
    "\u0007\u0016\u0002\u0002\u01ff\u0204\u0005Z.\r\u0200\u0204\u0005,\u0017",
    "\u0002\u0201\u0204\u0005$\u0013\u0002\u0202\u0204\u0005\\/\u0002\u0203",
    "\u01fb\u0003\u0002\u0002\u0002\u0203\u01fe\u0003\u0002\u0002\u0002\u0203",
    "\u0200\u0003\u0002\u0002\u0002\u0203\u0201\u0003\u0002\u0002\u0002\u0203",
    "\u0202\u0003\u0002\u0002\u0002\u0204\u021c\u0003\u0002\u0002\u0002\u0205",
    "\u0206\f\f\u0002\u0002\u0206\u0207\t\u0003\u0002\u0002\u0207\u021b\u0005",
    "Z.\r\u0208\u0209\f\u000b\u0002\u0002\u0209\u020a\t\u0004\u0002\u0002",
    "\u020a\u021b\u0005Z.\f\u020b\u020c\f\n\u0002\u0002\u020c\u020d\t\u0005",
    "\u0002\u0002\u020d\u021b\u0005Z.\u000b\u020e\u020f\f\t\u0002\u0002\u020f",
    "\u0210\t\u0006\u0002\u0002\u0210\u021b\u0005Z.\n\u0211\u0212\f\b\u0002",
    "\u0002\u0212\u0213\u0007\t\u0002\u0002\u0213\u021b\u0005Z.\t\u0214\u0215",
    "\f\u0007\u0002\u0002\u0215\u0216\u0007\b\u0002\u0002\u0216\u021b\u0005",
    "Z.\b\u0217\u0218\f\u0006\u0002\u0002\u0218\u0219\u0007\u0010\u0002\u0002",
    "\u0219\u021b\u0005Z.\u0007\u021a\u0205\u0003\u0002\u0002\u0002\u021a",
    "\u0208\u0003\u0002\u0002\u0002\u021a\u020b\u0003\u0002\u0002\u0002\u021a",
    "\u020e\u0003\u0002\u0002\u0002\u021a\u0211\u0003\u0002\u0002\u0002\u021a",
    "\u0214\u0003\u0002\u0002\u0002\u021a\u0217\u0003\u0002\u0002\u0002\u021b",
    "\u021e\u0003\u0002\u0002\u0002\u021c\u021a\u0003\u0002\u0002\u0002\u021c",
    "\u021d\u0003\u0002\u0002\u0002\u021d[\u0003\u0002\u0002\u0002\u021e",
    "\u021c\u0003\u0002\u0002\u0002\u021f\u0225\t\u0007\u0002\u0002\u0220",
    "\u0225\t\b\u0002\u0002\u0221\u0225\u0007-\u0002\u0002\u0222\u0225\u0007",
    "0\u0002\u0002\u0223\u0225\u0007 \u0002\u0002\u0224\u021f\u0003\u0002",
    "\u0002\u0002\u0224\u0220\u0003\u0002\u0002\u0002\u0224\u0221\u0003\u0002",
    "\u0002\u0002\u0224\u0222\u0003\u0002\u0002\u0002\u0224\u0223\u0003\u0002",
    "\u0002\u0002\u0225]\u0003\u0002\u0002\u0002\u0226\u0227\u0007\u001a",
    "\u0002\u0002\u0227\u0228\u0005`1\u0002\u0228\u0229\u0007\u001b\u0002",
    "\u0002\u0229\u0230\u0003\u0002\u0002\u0002\u022a\u022b\u0007\u001a\u0002",
    "\u0002\u022b\u0230\u0005`1\u0002\u022c\u022d\u0007\u001a\u0002\u0002",
    "\u022d\u0230\u0007\u001b\u0002\u0002\u022e\u0230\u0007\u001a\u0002\u0002",
    "\u022f\u0226\u0003\u0002\u0002\u0002\u022f\u022a\u0003\u0002\u0002\u0002",
    "\u022f\u022c\u0003\u0002\u0002\u0002\u022f\u022e\u0003\u0002\u0002\u0002",
    "\u0230_\u0003\u0002\u0002\u0002\u0231\u0234\u0005\\/\u0002\u0232\u0234",
    "\u0005Z.\u0002\u0233\u0231\u0003\u0002\u0002\u0002\u0233\u0232\u0003",
    "\u0002\u0002\u0002\u0234a\u0003\u0002\u0002\u0002Iglprvx|\u0080\u0086",
    "\u008c\u0091\u0093\u00a7\u00ac\u00b0\u00b3\u00b8\u00ba\u00cc\u00d1\u00da",
    "\u00df\u00e4\u00e9\u00f3\u00f9\u00fe\u0103\u010a\u010d\u0113\u0116\u0119",
    "\u0120\u0125\u0128\u012d\u0130\u0134\u013d\u0142\u0149\u014f\u0156\u015d",
    "\u0163\u0167\u016a\u0170\u0175\u0178\u017b\u0199\u01aa\u01ae\u01b9\u01c1",
    "\u01ca\u01ce\u01d7\u01e3\u01e8\u01ec\u01f0\u01f9\u0203\u021a\u021c\u0224",
    "\u022f\u0233"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'<<'", "'>>'", "'->'", "'@'", "'||'", 
                     "'&&'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                     "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'!'", "';'", 
                     "','", "'='", "'('", "')'", "'{'", "'}'", "'true'", 
                     "'false'", "'nil'", "'if'", "'else'", null, "'return'", 
                     "'new'", "'Starter'", "'Theme'", "'par'", "'group'", 
                     "'opt'", "'as'", "'.'" ];

var symbolicNames = [ null, "COL", "SOPEN", "SCLOSE", "ARROW", "AT", "OR", 
                      "AND", "EQ", "NEQ", "GT", "LT", "GTEQ", "LTEQ", "PLUS", 
                      "MINUS", "MULT", "DIV", "MOD", "POW", "NOT", "SCOL", 
                      "COMMA", "ASSIGN", "OPAR", "CPAR", "OBRACE", "CBRACE", 
                      "TRUE", "FALSE", "NIL", "IF", "ELSE", "WHILE", "RETURN", 
                      "NEW", "STARTER_LXR", "THEME_LXR", "PAR", "GROUP", 
                      "OPT", "AS", "DOT", "ID", "INT", "FLOAT", "STRING", 
                      "CR", "SPACE", "COMMENT", "OTHER", "EVENT_PAYLOAD_LXR", 
                      "EVENT_END", "WS" ];

var ruleNames =  [ "prog", "head", "group", "starterExp", "starter", "participant", 
                   "stereotype", "label", "name", "width", "block", "ret", 
                   "value", "stat", "par", "opt", "anonymousBlock", "creation", 
                   "creationBody", "message", "messageBody", "func", "from", 
                   "signature", "invocation", "assignment", "asyncMessage", 
                   "content", "source", "target", "construct", "type", "assignee", 
                   "to", "methodName", "parameters", "parameter", "declaration", 
                   "alt", "ifBlock", "elseIfBlock", "elseBlock", "braceBlock", 
                   "loop", "expr", "atom", "parExpr", "condition" ];

function sequenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sequenceParser.prototype = Object.create(antlr4.Parser.prototype);
sequenceParser.prototype.constructor = sequenceParser;

Object.defineProperty(sequenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sequenceParser.EOF = antlr4.Token.EOF;
sequenceParser.COL = 1;
sequenceParser.SOPEN = 2;
sequenceParser.SCLOSE = 3;
sequenceParser.ARROW = 4;
sequenceParser.AT = 5;
sequenceParser.OR = 6;
sequenceParser.AND = 7;
sequenceParser.EQ = 8;
sequenceParser.NEQ = 9;
sequenceParser.GT = 10;
sequenceParser.LT = 11;
sequenceParser.GTEQ = 12;
sequenceParser.LTEQ = 13;
sequenceParser.PLUS = 14;
sequenceParser.MINUS = 15;
sequenceParser.MULT = 16;
sequenceParser.DIV = 17;
sequenceParser.MOD = 18;
sequenceParser.POW = 19;
sequenceParser.NOT = 20;
sequenceParser.SCOL = 21;
sequenceParser.COMMA = 22;
sequenceParser.ASSIGN = 23;
sequenceParser.OPAR = 24;
sequenceParser.CPAR = 25;
sequenceParser.OBRACE = 26;
sequenceParser.CBRACE = 27;
sequenceParser.TRUE = 28;
sequenceParser.FALSE = 29;
sequenceParser.NIL = 30;
sequenceParser.IF = 31;
sequenceParser.ELSE = 32;
sequenceParser.WHILE = 33;
sequenceParser.RETURN = 34;
sequenceParser.NEW = 35;
sequenceParser.STARTER_LXR = 36;
sequenceParser.THEME_LXR = 37;
sequenceParser.PAR = 38;
sequenceParser.GROUP = 39;
sequenceParser.OPT = 40;
sequenceParser.AS = 41;
sequenceParser.DOT = 42;
sequenceParser.ID = 43;
sequenceParser.INT = 44;
sequenceParser.FLOAT = 45;
sequenceParser.STRING = 46;
sequenceParser.CR = 47;
sequenceParser.SPACE = 48;
sequenceParser.COMMENT = 49;
sequenceParser.OTHER = 50;
sequenceParser.EVENT_PAYLOAD_LXR = 51;
sequenceParser.EVENT_END = 52;
sequenceParser.WS = 53;

sequenceParser.RULE_prog = 0;
sequenceParser.RULE_head = 1;
sequenceParser.RULE_group = 2;
sequenceParser.RULE_starterExp = 3;
sequenceParser.RULE_starter = 4;
sequenceParser.RULE_participant = 5;
sequenceParser.RULE_stereotype = 6;
sequenceParser.RULE_label = 7;
sequenceParser.RULE_name = 8;
sequenceParser.RULE_width = 9;
sequenceParser.RULE_block = 10;
sequenceParser.RULE_ret = 11;
sequenceParser.RULE_value = 12;
sequenceParser.RULE_stat = 13;
sequenceParser.RULE_par = 14;
sequenceParser.RULE_opt = 15;
sequenceParser.RULE_anonymousBlock = 16;
sequenceParser.RULE_creation = 17;
sequenceParser.RULE_creationBody = 18;
sequenceParser.RULE_message = 19;
sequenceParser.RULE_messageBody = 20;
sequenceParser.RULE_func = 21;
sequenceParser.RULE_from = 22;
sequenceParser.RULE_signature = 23;
sequenceParser.RULE_invocation = 24;
sequenceParser.RULE_assignment = 25;
sequenceParser.RULE_asyncMessage = 26;
sequenceParser.RULE_content = 27;
sequenceParser.RULE_source = 28;
sequenceParser.RULE_target = 29;
sequenceParser.RULE_construct = 30;
sequenceParser.RULE_type = 31;
sequenceParser.RULE_assignee = 32;
sequenceParser.RULE_to = 33;
sequenceParser.RULE_methodName = 34;
sequenceParser.RULE_parameters = 35;
sequenceParser.RULE_parameter = 36;
sequenceParser.RULE_declaration = 37;
sequenceParser.RULE_alt = 38;
sequenceParser.RULE_ifBlock = 39;
sequenceParser.RULE_elseIfBlock = 40;
sequenceParser.RULE_elseBlock = 41;
sequenceParser.RULE_braceBlock = 42;
sequenceParser.RULE_loop = 43;
sequenceParser.RULE_expr = 44;
sequenceParser.RULE_atom = 45;
sequenceParser.RULE_parExpr = 46;
sequenceParser.RULE_condition = 47;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(sequenceParser.EOF, 0);
};

ProgContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

ProgContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitProg(this);
	}
};




sequenceParser.ProgContext = ProgContext;

sequenceParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sequenceParser.RULE_prog);
    try {
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.match(sequenceParser.EOF);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.head();
            this.state = 98;
            this.match(sequenceParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            if(la_===1) {
                this.state = 100;
                this.head();

            }
            this.state = 103;
            this.block();
            this.state = 104;
            this.match(sequenceParser.EOF);
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
};


function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

HeadContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

HeadContext.prototype.starterExp = function() {
    return this.getTypedRuleContext(StarterExpContext,0);
};

HeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitHead(this);
	}
};




sequenceParser.HeadContext = HeadContext;

sequenceParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sequenceParser.RULE_head);
    var _la = 0; // Token type
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 110; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 110;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case sequenceParser.GROUP:
            		    this.state = 108;
            		    this.group();
            		    break;
            		case sequenceParser.SOPEN:
            		case sequenceParser.LT:
            		case sequenceParser.ID:
            		case sequenceParser.STRING:
            		    this.state = 109;
            		    this.participant();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 112; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || _la===sequenceParser.LT || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (sequenceParser.GROUP - 39)) | (1 << (sequenceParser.ID - 39)) | (1 << (sequenceParser.STRING - 39)))) !== 0)) {
                this.state = 116;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case sequenceParser.GROUP:
                    this.state = 114;
                    this.group();
                    break;
                case sequenceParser.SOPEN:
                case sequenceParser.LT:
                case sequenceParser.ID:
                case sequenceParser.STRING:
                    this.state = 115;
                    this.participant();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 121;
            this.starterExp();
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
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.GROUP = function() {
    return this.getToken(sequenceParser.GROUP, 0);
};

GroupContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

GroupContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

GroupContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

GroupContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitGroup(this);
	}
};




sequenceParser.GroupContext = GroupContext;

sequenceParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sequenceParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.match(sequenceParser.GROUP);
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 125;
                this.name();
            }

            this.state = 128;
            this.match(sequenceParser.OBRACE);
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || _la===sequenceParser.LT || _la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 129;
                this.participant();
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 135;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.match(sequenceParser.GROUP);
            this.state = 138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 137;
                this.name();
            }

            this.state = 140;
            this.match(sequenceParser.OBRACE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 141;
            this.match(sequenceParser.GROUP);
            this.state = 143;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 142;
                this.name();

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
};


function StarterExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starterExp;
    return this;
}

StarterExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterExpContext.prototype.constructor = StarterExpContext;

StarterExpContext.prototype.AT = function() {
    return this.getToken(sequenceParser.AT, 0);
};

StarterExpContext.prototype.STARTER_LXR = function() {
    return this.getToken(sequenceParser.STARTER_LXR, 0);
};

StarterExpContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

StarterExpContext.prototype.starter = function() {
    return this.getTypedRuleContext(StarterContext,0);
};

StarterExpContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

StarterExpContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

StarterExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarterExp(this);
	}
};

StarterExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarterExp(this);
	}
};




sequenceParser.StarterExpContext = StarterExpContext;

sequenceParser.prototype.starterExp = function() {

    var localctx = new StarterExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sequenceParser.RULE_starterExp);
    try {
        this.state = 165;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 147;
            this.match(sequenceParser.AT);
            this.state = 148;
            this.match(sequenceParser.STARTER_LXR);
            this.state = 149;
            this.match(sequenceParser.OPAR);
            this.state = 150;
            this.starter();
            this.state = 151;
            this.match(sequenceParser.CPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(sequenceParser.AT);
            this.state = 154;
            this.match(sequenceParser.STARTER_LXR);
            this.state = 155;
            this.match(sequenceParser.OPAR);
            this.state = 156;
            this.match(sequenceParser.CPAR);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 157;
            this.match(sequenceParser.AT);
            this.state = 158;
            this.match(sequenceParser.STARTER_LXR);
            this.state = 159;
            this.match(sequenceParser.OPAR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 160;
            this.match(sequenceParser.AT);
            this.state = 161;
            this.match(sequenceParser.STARTER_LXR);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 162;
            this.match(sequenceParser.AT);
            this.state = 163;
            this.match(sequenceParser.ID);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 164;
            this.match(sequenceParser.AT);
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
};


function StarterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starter;
    return this;
}

StarterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterContext.prototype.constructor = StarterContext;

StarterContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

StarterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarter(this);
	}
};

StarterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarter(this);
	}
};




sequenceParser.StarterContext = StarterContext;

sequenceParser.prototype.starter = function() {

    var localctx = new StarterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sequenceParser.RULE_starter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(sequenceParser.ID);
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
};


function ParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_participant;
    return this;
}

ParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

ParticipantContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ParticipantContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
};

ParticipantContext.prototype.width = function() {
    return this.getTypedRuleContext(WidthContext,0);
};

ParticipantContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParticipant(this);
	}
};

ParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParticipant(this);
	}
};




sequenceParser.ParticipantContext = ParticipantContext;

sequenceParser.prototype.participant = function() {

    var localctx = new ParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sequenceParser.RULE_participant);
    var _la = 0; // Token type
    try {
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SOPEN || _la===sequenceParser.LT) {
                this.state = 169;
                this.stereotype();
            }

            this.state = 172;
            this.name();
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.INT) {
                this.state = 173;
                this.width();
            }

            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.AS) {
                this.state = 176;
                this.label();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.stereotype();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 180;
            this.name();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.INT) {
                this.state = 181;
                this.width();
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
};


function StereotypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stereotype;
    return this;
}

StereotypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StereotypeContext.prototype.constructor = StereotypeContext;

StereotypeContext.prototype.SOPEN = function() {
    return this.getToken(sequenceParser.SOPEN, 0);
};

StereotypeContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

StereotypeContext.prototype.SCLOSE = function() {
    return this.getToken(sequenceParser.SCLOSE, 0);
};

StereotypeContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};

StereotypeContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
};

StereotypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStereotype(this);
	}
};

StereotypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStereotype(this);
	}
};




sequenceParser.StereotypeContext = StereotypeContext;

sequenceParser.prototype.stereotype = function() {

    var localctx = new StereotypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sequenceParser.RULE_stereotype);
    try {
        this.state = 202;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(sequenceParser.SOPEN);
            this.state = 187;
            this.name();
            this.state = 188;
            this.match(sequenceParser.SCLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(sequenceParser.SOPEN);
            this.state = 191;
            this.name();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 192;
            this.match(sequenceParser.SOPEN);
            this.state = 193;
            this.name();
            this.state = 194;
            this.match(sequenceParser.GT);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 196;
            this.match(sequenceParser.SOPEN);
            this.state = 197;
            this.match(sequenceParser.GT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 198;
            this.match(sequenceParser.SOPEN);
            this.state = 199;
            this.match(sequenceParser.SCLOSE);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 200;
            this.match(sequenceParser.SOPEN);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 201;
            this.match(sequenceParser.LT);
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
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.AS = function() {
    return this.getToken(sequenceParser.AS, 0);
};

LabelContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLabel(this);
	}
};




sequenceParser.LabelContext = LabelContext;

sequenceParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sequenceParser.RULE_label);
    try {
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 204;
            this.match(sequenceParser.AS);
            this.state = 205;
            this.name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 206;
            this.match(sequenceParser.AS);
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
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

NameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitName(this);
	}
};




sequenceParser.NameContext = NameContext;

sequenceParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sequenceParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function WidthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_width;
    return this;
}

WidthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WidthContext.prototype.constructor = WidthContext;

WidthContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

WidthContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterWidth(this);
	}
};

WidthContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitWidth(this);
	}
};




sequenceParser.WidthContext = WidthContext;

sequenceParser.prototype.width = function() {

    var localctx = new WidthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sequenceParser.RULE_width);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(sequenceParser.INT);
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
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBlock(this);
	}
};




sequenceParser.BlockContext = BlockContext;

sequenceParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, sequenceParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 213;
            this.stat();
            this.state = 216; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (sequenceParser.OBRACE - 26)) | (1 << (sequenceParser.IF - 26)) | (1 << (sequenceParser.WHILE - 26)) | (1 << (sequenceParser.RETURN - 26)) | (1 << (sequenceParser.NEW - 26)) | (1 << (sequenceParser.PAR - 26)) | (1 << (sequenceParser.OPT - 26)) | (1 << (sequenceParser.ID - 26)) | (1 << (sequenceParser.STRING - 26)) | (1 << (sequenceParser.OTHER - 26)))) !== 0));
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
};


function RetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ret;
    return this;
}

RetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetContext.prototype.constructor = RetContext;

RetContext.prototype.RETURN = function() {
    return this.getToken(sequenceParser.RETURN, 0);
};

RetContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

RetContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

RetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRet(this);
	}
};

RetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRet(this);
	}
};




sequenceParser.RetContext = RetContext;

sequenceParser.prototype.ret = function() {

    var localctx = new RetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, sequenceParser.RULE_ret);
    var _la = 0; // Token type
    try {
        this.state = 226;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.match(sequenceParser.RETURN);
            this.state = 219;
            this.value();
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SCOL) {
                this.state = 220;
                this.match(sequenceParser.SCOL);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
            this.match(sequenceParser.RETURN);
            this.state = 224;
            this.value();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 225;
            this.match(sequenceParser.RETURN);
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
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ValueContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitValue(this);
	}
};




sequenceParser.ValueContext = ValueContext;

sequenceParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, sequenceParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.state = 228;
            this.atom();
            break;

        case 2:
            this.state = 229;
            this.match(sequenceParser.ID);
            break;

        case 3:
            this.state = 230;
            this.match(sequenceParser.STRING);
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
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stat;
    this._OTHER = null; // Token
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.alt = function() {
    return this.getTypedRuleContext(AltContext,0);
};

StatContext.prototype.par = function() {
    return this.getTypedRuleContext(ParContext,0);
};

StatContext.prototype.opt = function() {
    return this.getTypedRuleContext(OptContext,0);
};

StatContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StatContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};

StatContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

StatContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

StatContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
};

StatContext.prototype.anonymousBlock = function() {
    return this.getTypedRuleContext(AnonymousBlockContext,0);
};

StatContext.prototype.ret = function() {
    return this.getTypedRuleContext(RetContext,0);
};

StatContext.prototype.OTHER = function() {
    return this.getToken(sequenceParser.OTHER, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStat(this);
	}
};




sequenceParser.StatContext = StatContext;

sequenceParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, sequenceParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 247;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.alt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.par();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
            this.opt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 236;
            this.loop();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 237;
            this.creation();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 238;
            this.message();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 239;
            this.asyncMessage();
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.EVENT_END) {
                this.state = 240;
                this.match(sequenceParser.EVENT_END);
            }

            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 243;
            this.anonymousBlock();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 244;
            this.ret();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 245;
            localctx._OTHER = this.match(sequenceParser.OTHER);
            console.log("unknown char: " + (localctx._OTHER===null ? null : localctx._OTHER.text));
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
};


function ParContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_par;
    return this;
}

ParContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParContext.prototype.constructor = ParContext;

ParContext.prototype.PAR = function() {
    return this.getToken(sequenceParser.PAR, 0);
};

ParContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ParContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPar(this);
	}
};

ParContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPar(this);
	}
};




sequenceParser.ParContext = ParContext;

sequenceParser.prototype.par = function() {

    var localctx = new ParContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sequenceParser.RULE_par);
    try {
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 249;
            this.match(sequenceParser.PAR);
            this.state = 250;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 251;
            this.match(sequenceParser.PAR);
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
};


function OptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_opt;
    return this;
}

OptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptContext.prototype.constructor = OptContext;

OptContext.prototype.OPT = function() {
    return this.getToken(sequenceParser.OPT, 0);
};

OptContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

OptContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOpt(this);
	}
};

OptContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOpt(this);
	}
};




sequenceParser.OptContext = OptContext;

sequenceParser.prototype.opt = function() {

    var localctx = new OptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, sequenceParser.RULE_opt);
    try {
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
            this.match(sequenceParser.OPT);
            this.state = 255;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 256;
            this.match(sequenceParser.OPT);
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
};


function AnonymousBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_anonymousBlock;
    return this;
}

AnonymousBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnonymousBlockContext.prototype.constructor = AnonymousBlockContext;

AnonymousBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

AnonymousBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAnonymousBlock(this);
	}
};

AnonymousBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAnonymousBlock(this);
	}
};




sequenceParser.AnonymousBlockContext = AnonymousBlockContext;

sequenceParser.prototype.anonymousBlock = function() {

    var localctx = new AnonymousBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, sequenceParser.RULE_anonymousBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.braceBlock();
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
};


function CreationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creation;
    return this;
}

CreationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationContext.prototype.constructor = CreationContext;

CreationContext.prototype.creationBody = function() {
    return this.getTypedRuleContext(CreationBodyContext,0);
};

CreationContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

CreationContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

CreationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreation(this);
	}
};

CreationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreation(this);
	}
};




sequenceParser.CreationContext = CreationContext;

sequenceParser.prototype.creation = function() {

    var localctx = new CreationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, sequenceParser.RULE_creation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.creationBody();
        this.state = 264;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 262;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 263;
            this.braceBlock();

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
};


function CreationBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creationBody;
    return this;
}

CreationBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationBodyContext.prototype.constructor = CreationBodyContext;

CreationBodyContext.prototype.NEW = function() {
    return this.getToken(sequenceParser.NEW, 0);
};

CreationBodyContext.prototype.construct = function() {
    return this.getTypedRuleContext(ConstructContext,0);
};

CreationBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

CreationBodyContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

CreationBodyContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

CreationBodyContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

CreationBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationBody(this);
	}
};

CreationBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationBody(this);
	}
};




sequenceParser.CreationBodyContext = CreationBodyContext;

sequenceParser.prototype.creationBody = function() {

    var localctx = new CreationBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, sequenceParser.RULE_creationBody);
    var _la = 0; // Token type
    try {
        this.state = 294;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 266;
                this.assignment();
            }

            this.state = 269;
            this.match(sequenceParser.NEW);
            this.state = 270;
            this.construct();
            this.state = 276;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
            if(la_===1) {
                this.state = 271;
                this.match(sequenceParser.OPAR);
                this.state = 273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (sequenceParser.MINUS - 15)) | (1 << (sequenceParser.NOT - 15)) | (1 << (sequenceParser.TRUE - 15)) | (1 << (sequenceParser.FALSE - 15)) | (1 << (sequenceParser.NIL - 15)) | (1 << (sequenceParser.NEW - 15)) | (1 << (sequenceParser.ID - 15)) | (1 << (sequenceParser.INT - 15)) | (1 << (sequenceParser.FLOAT - 15)) | (1 << (sequenceParser.STRING - 15)))) !== 0)) {
                    this.state = 272;
                    this.parameters();
                }

                this.state = 275;
                this.match(sequenceParser.CPAR);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 278;
                this.assignment();
            }

            this.state = 281;
            this.match(sequenceParser.NEW);
            this.state = 282;
            this.construct();
            this.state = 283;
            this.match(sequenceParser.OPAR);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 285;
                this.assignment();
            }

            this.state = 288;
            this.match(sequenceParser.NEW);
            this.state = 289;
            this.construct();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 290;
                this.assignment();
            }

            this.state = 293;
            this.match(sequenceParser.NEW);
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
};


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.messageBody = function() {
    return this.getTypedRuleContext(MessageBodyContext,0);
};

MessageContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

MessageContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessage(this);
	}
};




sequenceParser.MessageContext = MessageContext;

sequenceParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sequenceParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.messageBody();
        this.state = 299;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 297;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 298;
            this.braceBlock();

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
};


function MessageBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_messageBody;
    return this;
}

MessageBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageBodyContext.prototype.constructor = MessageBodyContext;

MessageBodyContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

MessageBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

MessageBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessageBody(this);
	}
};

MessageBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessageBody(this);
	}
};




sequenceParser.MessageBodyContext = MessageBodyContext;

sequenceParser.prototype.messageBody = function() {

    var localctx = new MessageBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, sequenceParser.RULE_messageBody);
    try {
        this.state = 306;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 302;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
            if(la_===1) {
                this.state = 301;
                this.assignment();

            }
            this.state = 304;
            this.func();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 305;
            this.assignment();
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
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

FuncContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

FuncContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

FuncContext.prototype.signature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignatureContext);
    } else {
        return this.getTypedRuleContext(SignatureContext,i);
    }
};

FuncContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.DOT);
    } else {
        return this.getToken(sequenceParser.DOT, i);
    }
};


FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFunc(this);
	}
};




sequenceParser.FuncContext = FuncContext;

sequenceParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sequenceParser.RULE_func);
    try {
        this.state = 360;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.from();
            this.state = 309;
            this.match(sequenceParser.ARROW);
            this.state = 310;
            this.to();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 315;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
            if(la_===1) {
                this.state = 312;
                this.from();
                this.state = 313;
                this.match(sequenceParser.ARROW);

            }
            this.state = 320;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
            if(la_===1) {
                this.state = 317;
                this.to();
                this.state = 318;
                this.match(sequenceParser.DOT);

            }
            this.state = 322;
            this.signature();
            this.state = 327;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 323;
                    this.match(sequenceParser.DOT);
                    this.state = 324;
                    this.signature(); 
                }
                this.state = 329;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 333;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
            if(la_===1) {
                this.state = 330;
                this.from();
                this.state = 331;
                this.match(sequenceParser.ARROW);

            }
            this.state = 335;
            this.to();
            this.state = 338; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 336;
            		this.match(sequenceParser.DOT);
            		this.state = 337;
            		this.signature();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 340; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,43, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 342;
            this.match(sequenceParser.DOT);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 347;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
            if(la_===1) {
                this.state = 344;
                this.from();
                this.state = 345;
                this.match(sequenceParser.ARROW);

            }
            this.state = 349;
            this.to();
            this.state = 350;
            this.match(sequenceParser.DOT);
            this.state = 357;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 351;
                    this.match(sequenceParser.DOT);
                    this.state = 353;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
                    if(la_===1) {
                        this.state = 352;
                        this.signature();

                    } 
                }
                this.state = 359;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
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
};


function FromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_from;
    return this;
}

FromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromContext.prototype.constructor = FromContext;

FromContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

FromContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFrom(this);
	}
};

FromContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFrom(this);
	}
};




sequenceParser.FromContext = FromContext;

sequenceParser.prototype.from = function() {

    var localctx = new FromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, sequenceParser.RULE_from);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.match(sequenceParser.ID);
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
};


function SignatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_signature;
    return this;
}

SignatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignatureContext.prototype.constructor = SignatureContext;

SignatureContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

SignatureContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

SignatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterSignature(this);
	}
};

SignatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitSignature(this);
	}
};




sequenceParser.SignatureContext = SignatureContext;

sequenceParser.prototype.signature = function() {

    var localctx = new SignatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, sequenceParser.RULE_signature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.methodName();
        this.state = 366;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        if(la_===1) {
            this.state = 365;
            this.invocation();

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
};


function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

InvocationContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

InvocationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitInvocation(this);
	}
};




sequenceParser.InvocationContext = InvocationContext;

sequenceParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, sequenceParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.state = 374;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 368;
            this.match(sequenceParser.OPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 369;
            this.match(sequenceParser.OPAR);
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (sequenceParser.MINUS - 15)) | (1 << (sequenceParser.NOT - 15)) | (1 << (sequenceParser.TRUE - 15)) | (1 << (sequenceParser.FALSE - 15)) | (1 << (sequenceParser.NIL - 15)) | (1 << (sequenceParser.NEW - 15)) | (1 << (sequenceParser.ID - 15)) | (1 << (sequenceParser.INT - 15)) | (1 << (sequenceParser.FLOAT - 15)) | (1 << (sequenceParser.STRING - 15)))) !== 0)) {
                this.state = 370;
                this.parameters();
            }

            this.state = 373;
            this.match(sequenceParser.CPAR);
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
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.assignee = function() {
    return this.getTypedRuleContext(AssigneeContext,0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(sequenceParser.ASSIGN, 0);
};

AssignmentContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignment(this);
	}
};




sequenceParser.AssignmentContext = AssignmentContext;

sequenceParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, sequenceParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        if(la_===1) {
            this.state = 376;
            this.type();

        }
        this.state = 379;
        this.assignee();
        this.state = 380;
        this.match(sequenceParser.ASSIGN);
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
};


function AsyncMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_asyncMessage;
    return this;
}

AsyncMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsyncMessageContext.prototype.constructor = AsyncMessageContext;

AsyncMessageContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

AsyncMessageContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

AsyncMessageContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

AsyncMessageContext.prototype.COL = function() {
    return this.getToken(sequenceParser.COL, 0);
};

AsyncMessageContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

AsyncMessageContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};

AsyncMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAsyncMessage(this);
	}
};

AsyncMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAsyncMessage(this);
	}
};




sequenceParser.AsyncMessageContext = AsyncMessageContext;

sequenceParser.prototype.asyncMessage = function() {

    var localctx = new AsyncMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, sequenceParser.RULE_asyncMessage);
    try {
        this.state = 407;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 382;
            this.source();
            this.state = 383;
            this.match(sequenceParser.ARROW);
            this.state = 384;
            this.target();
            this.state = 385;
            this.match(sequenceParser.COL);
            this.state = 386;
            this.content();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 388;
            this.source();
            this.state = 389;
            this.match(sequenceParser.ARROW);
            this.state = 390;
            this.target();
            this.state = 391;
            this.match(sequenceParser.COL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 393;
            this.target();
            this.state = 394;
            this.match(sequenceParser.COL);
            this.state = 395;
            this.content();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 397;
            this.source();
            this.state = 398;
            this.match(sequenceParser.ARROW);
            this.state = 399;
            this.target();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 401;
            this.source();
            this.state = 402;
            this.match(sequenceParser.ARROW);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 404;
            this.source();
            this.state = 405;
            this.match(sequenceParser.MINUS);
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
};


function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.EVENT_PAYLOAD_LXR = function() {
    return this.getToken(sequenceParser.EVENT_PAYLOAD_LXR, 0);
};

ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitContent(this);
	}
};




sequenceParser.ContentContext = ContentContext;

sequenceParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, sequenceParser.RULE_content);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(sequenceParser.EVENT_PAYLOAD_LXR);
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
};


function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitSource(this);
	}
};




sequenceParser.SourceContext = SourceContext;

sequenceParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, sequenceParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(sequenceParser.ID);
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
};


function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

TargetContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTarget(this);
	}
};




sequenceParser.TargetContext = TargetContext;

sequenceParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, sequenceParser.RULE_target);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function ConstructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_construct;
    return this;
}

ConstructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructContext.prototype.constructor = ConstructContext;

ConstructContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ConstructContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ConstructContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterConstruct(this);
	}
};

ConstructContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitConstruct(this);
	}
};




sequenceParser.ConstructContext = ConstructContext;

sequenceParser.prototype.construct = function() {

    var localctx = new ConstructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, sequenceParser.RULE_construct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitType(this);
	}
};




sequenceParser.TypeContext = TypeContext;

sequenceParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, sequenceParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(sequenceParser.ID);
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
};


function AssigneeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignee;
    return this;
}

AssigneeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssigneeContext.prototype.constructor = AssigneeContext;

AssigneeContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.ID);
    } else {
        return this.getToken(sequenceParser.ID, i);
    }
};


AssigneeContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


AssigneeContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

AssigneeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignee(this);
	}
};

AssigneeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignee(this);
	}
};




sequenceParser.AssigneeContext = AssigneeContext;

sequenceParser.prototype.assignee = function() {

    var localctx = new AssigneeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, sequenceParser.RULE_assignee);
    var _la = 0; // Token type
    try {
        this.state = 428;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 419;
            this.match(sequenceParser.ID);
            this.state = 424;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.COMMA) {
                this.state = 420;
                this.match(sequenceParser.COMMA);
                this.state = 421;
                this.match(sequenceParser.ID);
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case sequenceParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 427;
            this.match(sequenceParser.STRING);
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
};


function ToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_to;
    return this;
}

ToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToContext.prototype.constructor = ToContext;

ToContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ToContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ToContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTo(this);
	}
};

ToContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTo(this);
	}
};




sequenceParser.ToContext = ToContext;

sequenceParser.prototype.to = function() {

    var localctx = new ToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, sequenceParser.RULE_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;

MethodNameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

MethodNameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMethodName(this);
	}
};




sequenceParser.MethodNameContext = MethodNameContext;

sequenceParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, sequenceParser.RULE_methodName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameters(this);
	}
};




sequenceParser.ParametersContext = ParametersContext;

sequenceParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, sequenceParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        this.parameter();
        this.state = 439;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.COMMA) {
            this.state = 435;
            this.match(sequenceParser.COMMA);
            this.state = 436;
            this.parameter();
            this.state = 441;
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
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

ParameterContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ParameterContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ParameterContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParameterContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameter(this);
	}
};




sequenceParser.ParameterContext = ParameterContext;

sequenceParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, sequenceParser.RULE_parameter);
    try {
        this.state = 447;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 443;
            this.match(sequenceParser.ID);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 444;
            this.atom();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 445;
            this.expr(0);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.creation();
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
};


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitDeclaration(this);
	}
};




sequenceParser.DeclarationContext = DeclarationContext;

sequenceParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, sequenceParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.type();
        this.state = 450;
        this.match(sequenceParser.ID);
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
};


function AltContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_alt;
    return this;
}

AltContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AltContext.prototype.constructor = AltContext;

AltContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

AltContext.prototype.elseIfBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfBlockContext);
    } else {
        return this.getTypedRuleContext(ElseIfBlockContext,i);
    }
};

AltContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

AltContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAlt(this);
	}
};

AltContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAlt(this);
	}
};




sequenceParser.AltContext = AltContext;

sequenceParser.prototype.alt = function() {

    var localctx = new AltContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, sequenceParser.RULE_alt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.ifBlock();
        this.state = 456;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 453;
                this.elseIfBlock(); 
            }
            this.state = 458;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
        }

        this.state = 460;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ELSE) {
            this.state = 459;
            this.elseBlock();
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
};


function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

IfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

IfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIfBlock(this);
	}
};




sequenceParser.IfBlockContext = IfBlockContext;

sequenceParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, sequenceParser.RULE_ifBlock);
    try {
        this.state = 469;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 462;
            this.match(sequenceParser.IF);
            this.state = 463;
            this.parExpr();
            this.state = 464;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 466;
            this.match(sequenceParser.IF);
            this.state = 467;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 468;
            this.match(sequenceParser.IF);
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
};


function ElseIfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseIfBlock;
    return this;
}

ElseIfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfBlockContext.prototype.constructor = ElseIfBlockContext;

ElseIfBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseIfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

ElseIfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

ElseIfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseIfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseIfBlock(this);
	}
};

ElseIfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseIfBlock(this);
	}
};




sequenceParser.ElseIfBlockContext = ElseIfBlockContext;

sequenceParser.prototype.elseIfBlock = function() {

    var localctx = new ElseIfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, sequenceParser.RULE_elseIfBlock);
    try {
        this.state = 481;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 471;
            this.match(sequenceParser.ELSE);
            this.state = 472;
            this.match(sequenceParser.IF);
            this.state = 473;
            this.parExpr();
            this.state = 474;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 476;
            this.match(sequenceParser.ELSE);
            this.state = 477;
            this.match(sequenceParser.IF);
            this.state = 478;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 479;
            this.match(sequenceParser.ELSE);
            this.state = 480;
            this.match(sequenceParser.IF);
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
};


function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseBlock(this);
	}
};




sequenceParser.ElseBlockContext = ElseBlockContext;

sequenceParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, sequenceParser.RULE_elseBlock);
    try {
        this.state = 486;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 483;
            this.match(sequenceParser.ELSE);
            this.state = 484;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 485;
            this.match(sequenceParser.ELSE);
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
};


function BraceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_braceBlock;
    return this;
}

BraceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceBlockContext.prototype.constructor = BraceBlockContext;

BraceBlockContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

BraceBlockContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

BraceBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

BraceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBraceBlock(this);
	}
};

BraceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBraceBlock(this);
	}
};




sequenceParser.BraceBlockContext = BraceBlockContext;

sequenceParser.prototype.braceBlock = function() {

    var localctx = new BraceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, sequenceParser.RULE_braceBlock);
    var _la = 0; // Token type
    try {
        this.state = 494;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 488;
            this.match(sequenceParser.OBRACE);
            this.state = 490;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (sequenceParser.OBRACE - 26)) | (1 << (sequenceParser.IF - 26)) | (1 << (sequenceParser.WHILE - 26)) | (1 << (sequenceParser.RETURN - 26)) | (1 << (sequenceParser.NEW - 26)) | (1 << (sequenceParser.PAR - 26)) | (1 << (sequenceParser.OPT - 26)) | (1 << (sequenceParser.ID - 26)) | (1 << (sequenceParser.STRING - 26)) | (1 << (sequenceParser.OTHER - 26)))) !== 0)) {
                this.state = 489;
                this.block();
            }

            this.state = 492;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 493;
            this.match(sequenceParser.OBRACE);
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
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(sequenceParser.WHILE, 0);
};

LoopContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

LoopContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLoop(this);
	}
};




sequenceParser.LoopContext = LoopContext;

sequenceParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, sequenceParser.RULE_loop);
    try {
        this.state = 503;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 496;
            this.match(sequenceParser.WHILE);
            this.state = 497;
            this.parExpr();
            this.state = 498;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 500;
            this.match(sequenceParser.WHILE);
            this.state = 501;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 502;
            this.match(sequenceParser.WHILE);
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
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExprContext.prototype = Object.create(ExprContext.prototype);
NotExprContext.prototype.constructor = NotExprContext;

sequenceParser.NotExprContext = NotExprContext;

NotExprContext.prototype.NOT = function() {
    return this.getToken(sequenceParser.NOT, 0);
};

NotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNotExpr(this);
	}
};

NotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNotExpr(this);
	}
};


function FuncExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExprContext.prototype = Object.create(ExprContext.prototype);
FuncExprContext.prototype.constructor = FuncExprContext;

sequenceParser.FuncExprContext = FuncExprContext;

FuncExprContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};
FuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFuncExpr(this);
	}
};

FuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFuncExpr(this);
	}
};


function UnaryMinusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExprContext.prototype = Object.create(ExprContext.prototype);
UnaryMinusExprContext.prototype.constructor = UnaryMinusExprContext;

sequenceParser.UnaryMinusExprContext = UnaryMinusExprContext;

UnaryMinusExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};

UnaryMinusExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryMinusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterUnaryMinusExpr(this);
	}
};

UnaryMinusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitUnaryMinusExpr(this);
	}
};


function CreationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CreationExprContext.prototype = Object.create(ExprContext.prototype);
CreationExprContext.prototype.constructor = CreationExprContext;

sequenceParser.CreationExprContext = CreationExprContext;

CreationExprContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};
CreationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationExpr(this);
	}
};

CreationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationExpr(this);
	}
};


function MultiplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExprContext.prototype = Object.create(ExprContext.prototype);
MultiplicationExprContext.prototype.constructor = MultiplicationExprContext;

sequenceParser.MultiplicationExprContext = MultiplicationExprContext;

MultiplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MultiplicationExprContext.prototype.MULT = function() {
    return this.getToken(sequenceParser.MULT, 0);
};

MultiplicationExprContext.prototype.DIV = function() {
    return this.getToken(sequenceParser.DIV, 0);
};

MultiplicationExprContext.prototype.MOD = function() {
    return this.getToken(sequenceParser.MOD, 0);
};
MultiplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMultiplicationExpr(this);
	}
};

MultiplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMultiplicationExpr(this);
	}
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

sequenceParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAtomExpr(this);
	}
};


function OrExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExprContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

sequenceParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

OrExprContext.prototype.OR = function() {
    return this.getToken(sequenceParser.OR, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOrExpr(this);
	}
};


function AdditiveExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExprContext.prototype = Object.create(ExprContext.prototype);
AdditiveExprContext.prototype.constructor = AdditiveExprContext;

sequenceParser.AdditiveExprContext = AdditiveExprContext;

AdditiveExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditiveExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};

AdditiveExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};
AdditiveExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAdditiveExpr(this);
	}
};

AdditiveExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAdditiveExpr(this);
	}
};


function RelationalExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(ExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

sequenceParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelationalExprContext.prototype.LTEQ = function() {
    return this.getToken(sequenceParser.LTEQ, 0);
};

RelationalExprContext.prototype.GTEQ = function() {
    return this.getToken(sequenceParser.GTEQ, 0);
};

RelationalExprContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
};

RelationalExprContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};
RelationalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRelationalExpr(this);
	}
};

RelationalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRelationalExpr(this);
	}
};


function EqualityExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(ExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

sequenceParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EqualityExprContext.prototype.EQ = function() {
    return this.getToken(sequenceParser.EQ, 0);
};

EqualityExprContext.prototype.NEQ = function() {
    return this.getToken(sequenceParser.NEQ, 0);
};
EqualityExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterEqualityExpr(this);
	}
};

EqualityExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitEqualityExpr(this);
	}
};


function PlusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusExprContext.prototype = Object.create(ExprContext.prototype);
PlusExprContext.prototype.constructor = PlusExprContext;

sequenceParser.PlusExprContext = PlusExprContext;

PlusExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PlusExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};
PlusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPlusExpr(this);
	}
};

PlusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPlusExpr(this);
	}
};


function AndExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExprContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

sequenceParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AndExprContext.prototype.AND = function() {
    return this.getToken(sequenceParser.AND, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAndExpr(this);
	}
};



sequenceParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 88;
    this.enterRecursionRule(localctx, 88, sequenceParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 506;
            this.match(sequenceParser.MINUS);
            this.state = 507;
            this.expr(12);
            break;

        case 2:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 508;
            this.match(sequenceParser.NOT);
            this.state = 509;
            this.expr(11);
            break;

        case 3:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 510;
            this.func();
            break;

        case 4:
            localctx = new CreationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 511;
            this.creation();
            break;

        case 5:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 512;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 538;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,67,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 536;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 515;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 516;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MULT) | (1 << sequenceParser.DIV) | (1 << sequenceParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 517;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new AdditiveExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 518;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 519;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.PLUS || _la===sequenceParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 520;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 521;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 522;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.GT) | (1 << sequenceParser.LT) | (1 << sequenceParser.GTEQ) | (1 << sequenceParser.LTEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 523;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 524;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 525;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.EQ || _la===sequenceParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 526;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 527;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 528;
                    this.match(sequenceParser.AND);
                    this.state = 529;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 530;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 531;
                    this.match(sequenceParser.OR);
                    this.state = 532;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new PlusExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 533;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 534;
                    this.match(sequenceParser.PLUS);
                    this.state = 535;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 540;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,67,this._ctx);
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
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;


 
AtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BooleanAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanAtomContext.prototype = Object.create(AtomContext.prototype);
BooleanAtomContext.prototype.constructor = BooleanAtomContext;

sequenceParser.BooleanAtomContext = BooleanAtomContext;

BooleanAtomContext.prototype.TRUE = function() {
    return this.getToken(sequenceParser.TRUE, 0);
};

BooleanAtomContext.prototype.FALSE = function() {
    return this.getToken(sequenceParser.FALSE, 0);
};
BooleanAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBooleanAtom(this);
	}
};

BooleanAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBooleanAtom(this);
	}
};


function IdAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdAtomContext.prototype = Object.create(AtomContext.prototype);
IdAtomContext.prototype.constructor = IdAtomContext;

sequenceParser.IdAtomContext = IdAtomContext;

IdAtomContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};
IdAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIdAtom(this);
	}
};

IdAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIdAtom(this);
	}
};


function StringAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringAtomContext.prototype = Object.create(AtomContext.prototype);
StringAtomContext.prototype.constructor = StringAtomContext;

sequenceParser.StringAtomContext = StringAtomContext;

StringAtomContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};
StringAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStringAtom(this);
	}
};

StringAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStringAtom(this);
	}
};


function NilAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NilAtomContext.prototype = Object.create(AtomContext.prototype);
NilAtomContext.prototype.constructor = NilAtomContext;

sequenceParser.NilAtomContext = NilAtomContext;

NilAtomContext.prototype.NIL = function() {
    return this.getToken(sequenceParser.NIL, 0);
};
NilAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNilAtom(this);
	}
};

NilAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNilAtom(this);
	}
};


function NumberAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberAtomContext.prototype = Object.create(AtomContext.prototype);
NumberAtomContext.prototype.constructor = NumberAtomContext;

sequenceParser.NumberAtomContext = NumberAtomContext;

NumberAtomContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

NumberAtomContext.prototype.FLOAT = function() {
    return this.getToken(sequenceParser.FLOAT, 0);
};
NumberAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNumberAtom(this);
	}
};

NumberAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNumberAtom(this);
	}
};



sequenceParser.AtomContext = AtomContext;

sequenceParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, sequenceParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 546;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
            localctx = new NumberAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 541;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.INT || _la===sequenceParser.FLOAT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.TRUE:
        case sequenceParser.FALSE:
            localctx = new BooleanAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 542;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.TRUE || _la===sequenceParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.ID:
            localctx = new IdAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 543;
            this.match(sequenceParser.ID);
            break;
        case sequenceParser.STRING:
            localctx = new StringAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 544;
            this.match(sequenceParser.STRING);
            break;
        case sequenceParser.NIL:
            localctx = new NilAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 545;
            this.match(sequenceParser.NIL);
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
};


function ParExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parExpr;
    return this;
}

ParExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExprContext.prototype.constructor = ParExprContext;

ParExprContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

ParExprContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ParExprContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

ParExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParExpr(this);
	}
};

ParExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParExpr(this);
	}
};




sequenceParser.ParExprContext = ParExprContext;

sequenceParser.prototype.parExpr = function() {

    var localctx = new ParExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, sequenceParser.RULE_parExpr);
    try {
        this.state = 557;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 548;
            this.match(sequenceParser.OPAR);
            this.state = 549;
            this.condition();
            this.state = 550;
            this.match(sequenceParser.CPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 552;
            this.match(sequenceParser.OPAR);
            this.state = 553;
            this.condition();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 554;
            this.match(sequenceParser.OPAR);
            this.state = 555;
            this.match(sequenceParser.CPAR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 556;
            this.match(sequenceParser.OPAR);
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
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ConditionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCondition(this);
	}
};




sequenceParser.ConditionContext = ConditionContext;

sequenceParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, sequenceParser.RULE_condition);
    try {
        this.state = 561;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 559;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 560;
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
};


sequenceParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 44:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sequenceParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sequenceParser = sequenceParser;
