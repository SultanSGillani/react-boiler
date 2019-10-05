
module.exports = {
  "plugins": [
    "react-redux",
    "prettier",
    "react",
    "redux-saga"
  ],
    "globals": {
    "document": false,
      "window": false,
      "getElementById": false
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended",
    "plugin:redux-saga/recommended"
  ],
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true,
        "classes": true,
        "jsx": true
    },
    "ecmaVersion": 7
  },
  "rules": {
    "prettier/prettier": 1,
      "import/extensions": 1,
      "import/no-extraneous-dependencies": 0,
      "jsx-a11y/click-events-have-key-events": 1,
      "jsx-a11y/label-has-associated-control": 1,
      "jsx-a11y/label-has-for": [
      1,
      {
        "components": [
          "Label"
        ],
        "required": {
          "some": [
            "nesting",
            "id"
          ]
        },
        "allowChildren": false
      }
    ],
      "jsx-a11y/no-autofocus": 1,
      "jsx-a11y/no-noninteractive-tabindex": 1,
      "jsx-a11y/no-static-element-interactions": 1,
      "keyword-spacing": 1,
      "max-len": [
      1,
      140,
      4
    ],
      "no-console": 0,
      "no-multi-spaces": 1,
      "object-curly-spacing": [
      1,
      "always"
    ],
      "no-restricted-syntax": [
      2,
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
      "no-unused-vars": 1,
      "no-use-before-define": [
      1,
      {
        "variables": false
      }
    ],
      "padded-blocks": 1,
      "prefer-const": 1,
      "quotes": [
      1,
      "single"
    ],
      "react-redux/no-unused-prop-types": 1,
      "indent": 1,
      "eol-last": 0,
      "react/button-has-type": 1,
      "react/destructuring-assignment": 1,
      "react/jsx-filename-extension": 0,
      "react/jsx-indent": 1,
      "react/jsx-tag-spacing": 1,
      "react/no-unused-prop-types": 0,
      "react/prop-types": 0,
      "react/static-property-placement": 0,
      "semi": 1,
      "import/newline-after-import": 1,
      "template-curly-spacing": 1,
      "comma-dangle": 1,
      "space-before-blocks": 1,
      "spaced-comment": 1
  }
};
