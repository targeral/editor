exports.camelCase = function(string) {
    return string.replace(/(?:_|-)([a-z])/g, function(g) {
        return g[1].toUpperCase();
    });
};

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
}

function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }

        // Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
        const test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        const test2 = {};
        for (let i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        const order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        const test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }

        return true;
    } catch(err) {
        return false;
    }
}

exports.assign = shouldUseNative() ? Object.assign : function(target, source) {
    var from, symbols;
    var to = toObject(target);

    for (var s = 1; s < arguments.length; s++) {
        from = arguments[s];

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }

        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }

    return to;
}