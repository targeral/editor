const fs = require('fs');
const path = require('path');
const svgo = require('./svgo');
const svgToJsx = require('./svgToJsx');
const SimpleHtmlTokenizer = require('simple-html-tokenizer');
const loaderUtils = require('loader-utils');
const tokenize = SimpleHtmlTokenizer.tokenize;
const generate = SimpleHtmlTokenizer.generate;
const utils = require('./utils');

function buildComponent (svg, options) {
    const type = options.es6 ? 'es6' : 'es5';
    const templateFilename = path.resolve(__dirname, 'templates', type) + '.js.tpl';
    let template = fs.readFileSync(templateFilename).toString('utf8');

    return template
        .replace(/{SVG}/g, svg)
        .replace(/{CLASSNAME}/g, options.displayName);
}

function optimizeSvg(tag) {
    
}

module.exports = function (source, map) {
    this.cacheable();

    const callback = this.async();
    const fileName = path.basename(this.resourcePath, '.svg');
    const displayName = utils.camelCase(fileName);
    let options = loaderUtils.getOptions(this);

    options = utils.assign({}, options);

    svgo.optimize(source).then(function({ data }) {
        let symbol = data.replace(/svg/gi, "symbol");
        symbol = symbol.replace(/<symbol/gi, `<symbol id="${displayName}" `)

        svgToJsx(symbol).then(function(result) {
            const component = buildComponent(result, {
                es6: options.es6 || true,
                displayName
            });
            
            callback(null, component);
        });
    });
};
