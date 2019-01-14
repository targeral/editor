const svgToJsx = require('svg-to-jsx');
const promiseSvgToJsx = function(str, options = {}) {
    return new Promise(function (resolve, reject) {
        svgToJsx(str, options, function(error, result) {
            if (error) reject(error);
            resolve(result);
        })
    });
};

module.exports = promiseSvgToJsx;