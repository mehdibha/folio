// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: false,
    plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
