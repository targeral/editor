// all rule: https://github.com/marionebl/commitlint/blob/master/docs/reference-rules.md
// refer to: https://github.com/marionebl/commitlint/blob/master/@commitlint/config-conventional/index.js

module.exports = { 
    rules: {
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'chore',
                'docs',
                'feat',
                'fix',
                'refactor',
                'style',
                'test',
                'revert'
            ]
        ]
    }
};
