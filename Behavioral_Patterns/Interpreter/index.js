const TokenType = Object.create({
    integer: 0,
    plus: 1,
    minus: 2,
    lparen: 3,
    rparen: 4,
});

class Token {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }

    toString() {
        return `\`${this.text}\``;
    }
}

function lex(input) {
    const res = [];

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '+':
                res.push(new Token(TokenType.plus, input[i]));
                break;
            case '-':
                res.push(new Token(TokenType.minus, input[i]));
                break;
            case '(':
                res.push(new Token(TokenType.lparen, input[i]));
                break;
            case ')':
                res.push(new Token(TokenType.rparen, input[i]));
                break;
            default:
                const buffer = [input[i]];
                for (let j = i + 1; j < input.length; j++) {
                    if ('0123456789'.includes(input[j])) {
                        buffer.push(input[j]);
                        i++;
                    } else {
                        res.push(
                            new Token(
                                TokenType.integer,
                                buffer.join('')
                            )
                        );
                        break;
                    }
                }
                break;
        }
    }

    return res;
}

const input = '(13+4)-(12+1)';
const tokens = lex(input);

console.log(tokens.join(' '));
