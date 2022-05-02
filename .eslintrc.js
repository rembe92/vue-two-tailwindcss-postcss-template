module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    'vuejs-accessibility/form-control-has-label': 0,
  },
};
