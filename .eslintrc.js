module.exports = {
  "extends": [
    "react-app",
    // "react-app/jest",
    // "airbnb",
    "airbnb-typescript",
    // "plugin:prettier/recommended",
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "no-console": 0,
    "react/prop-types": 0,
  }
}
