const path = require('path')

module.exports = {
  extends: "plugin:fp-ts/all",
  plugins: ["@typescript-eslint", "fp-ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "fp-ts/no-pipeable": "warn"
  },
};
