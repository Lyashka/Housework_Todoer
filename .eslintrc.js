module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "react/destructuring-assignment": "never",
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./"],
        "extensions": [".js"]
      }
    }
  }
};
