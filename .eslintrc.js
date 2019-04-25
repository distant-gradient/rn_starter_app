module.exports = {
  'extends': 'airbnb',
  'plugins': ['react'],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    "no-console": "off",
    "comma-dangle": "off",
    "no-trailing-spaces": "off",
    "curly": "off",
    "object-curly-newline": "off",
    "nonblock-statement-body-position": "off",
    "class-methods-use-this": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/sort-comp": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/forbid-prop-types": "off",
    "react/destructuring-assignment": "off"
  },
  'globals': {
    "fetch": false
  }
}
