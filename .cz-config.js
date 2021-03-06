'use strict';

const TYPE = '选择你这次提交更改的类型';

module.exports = {
    types: [
        {
            value: 'feat',
            name: '✨  feat:     A new feature'
        },
        {
            value: 'fix',
            name: '🐞  fix:      A bug fix'
        },
        {
            value: 'refactor',
            name: '🛠  refactor: A code change that neither fixes a bug nor adds a feature'
        },
        {
            value: 'docs',
            name: '📚  docs:     Documentation only changes'
        },
        {
            value: 'test',
            name: '🏁  test:     Add missing tests or correcting existing tests'
        },
        {
            value: 'chore',
            name: '🗯  chore:    Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
        },
        {
            value: 'style',
            name: '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
        },
        {
            value: 'revert',
            name: '⏪  revert:   Revert to a commit'
        }
    ],

    scopes: ['api', 'build', 'components', 'config', 'doc', 'mock', 'pages', 'static', 'utils'],

    allowCustomScopes: false,
    allowBreakingChanges: ["feat", "fix"],
    footerPrefix: 'ICAFE CLOSED:'
};