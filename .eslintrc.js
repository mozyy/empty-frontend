module.exports = {
  extends: [
    "react-app",
    // "react-app/jest",
    // "airbnb",
    "airbnb-typescript",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "no-console": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "react/no-array-index-key": 0,
    "no-plusplus": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
  },
};
