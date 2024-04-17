module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "max-lines-per-function": ["error", 40],
    "no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "internal",
          "builtin",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-hook-form",
            group: "external",
            position: "before",
          },
          {
            pattern: "axios",
            group: "external",
            position: "before",
          },
          {
            pattern: "@hookform/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "*.{css,scss}",
            group: "unknown",
            position: "after",
          },
          {
            pattern: "./**.{css,scss}",
            group: "unknown",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
        "newlines-between": "always-and-inside-groups",
      },
    ],
  },
};
