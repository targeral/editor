const fuck = require('simple-html-tokenizer');
const tokenize = fuck.tokenize;
const generate = fuck.generate;
const svgToJsx = require('./svgToJsx');
let test = `<symbol viewBox="0 0 1024 1024"><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8c-3.1 3.1-3.1 8.2 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z"/><path d="M605.959 324.826a48 48 0 1 0 67.88-67.883 48 48 0 1 0-67.88 67.883zM889.7 539.8l-39.6-39.5c-3.1-3.1-8.2-3.1-11.3 0l-362 361.3-237.6-237c-3.1-3.1-8.2-3.1-11.3 0l-39.6 39.5c-3.1 3.1-3.1 8.2 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"/></symbol>`;
let tokens = tokenize(test);
console.log(tokens)
tokens[0].attributes.push(["id", "asdfaf", true]);

let str = generate(tokens);

svgToJsx(str).then(function(a) {
    console.log(a)
});

console.log(str)