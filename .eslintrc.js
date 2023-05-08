module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    "**/.archive",
    "**/test",
    "**/tests",
    "*.test.js",
    "*.test.ts",
    "*.d.ts",
    "*.snap",
    "**/docs/*",
    "**/public/*",
    "**/dist/*",
    "dist/*",
    "**/build/*",
    "node_modules/*",
    "**/node_modules/*",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "warn",
  },
};
