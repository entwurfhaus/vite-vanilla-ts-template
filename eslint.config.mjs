import pluginJs from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
