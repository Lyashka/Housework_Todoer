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
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "array-callback-return": "off",
    "import/no-absolute-path": "off",
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
