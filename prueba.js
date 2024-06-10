import antlr4 from 'antlr4';
import HelloLexer from './HelloLexer.js';
import HelloParser from './HelloParser.js';
import prompt from 'prompt'
import fs from 'fs'

class ExprErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        console.log(`line ${line}, col ${column}: ${msg}`);
        throw Error("Error parsing")
    }
}

prompt.start();

const { archivo } = await prompt.get(['archivo']);

fs.readFile('./' + archivo + '.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    try {
        const chars = new antlr4.InputStream(data);
        const lexer = new HelloLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ExprErrorListener());
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new HelloParser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener(new ExprErrorListener());
        const tree = parser.program();

        if (tree.exception != null) {
            throw Error("Error Parsing")
        } else {
            console.log("Parsed OK")
        }
    } catch (e) {
        console.log(e.message)
    }
})
