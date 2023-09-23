// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^(@/lib/(.*)$)|^(@/components/(.*)$)|^(@/styles/(.*)$)",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
}

module.exports = config
