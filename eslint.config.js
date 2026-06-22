import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [
    js.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
        braceStyle: 'allman',
        semi: false,
        commaDangle: 'never',
        quotes: 'single'
    }),
    {
        ignores: [
            'node_modules',
            'dist',
            'server.js'
        ]
    },
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals:
            {
                ...globals.browser
            }
        }
    },
    {
        rules: {
            'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }]
        }
    }
]
