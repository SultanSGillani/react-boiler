module.exports = {
  "env": {
    "development": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
        "plugins": [
        "babel-plugin-styled-components",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel"
      ]
    },
    "production": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
        "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-react-constant-elements",
        "transform-react-remove-prop-types"
      ]
    },
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
        "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties"
      ]
    }
  }
};
