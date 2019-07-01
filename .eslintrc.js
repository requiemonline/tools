module.exports = {
  "parser": "@typescript-eslint/parser",
  // "parserOptions": {
  //   "ecmaFeatures": {
  //     "jsx": true
  //   }
  // },
  "extends": [
    // "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "plugins": [
    "@typescript-eslint",
    // "react",
    // "react-hooks",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    // "react-hooks/rules-of-hooks": "warn",
    // "react-hooks/exhaustive-deps": "warn",
    // "react/prop-types": 0,
    // "react/display-name": "off",
    "no-console": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-undef": "warn",
    "no-empty": "warn",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "warn",
  },
  // "settings": {
  //   "react": {
  //     "version": "detect", 
  //   }
  // },
  "env": {
    "browser": true,
    "node": true
  }
}