module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "warn",
    "linebreak-style": "off",
    "forbid-prop-types": "off",
    "react/forbid-prop-types": ["error", { forbid: ["any", "array"] }],
    "react/prop-types-exact": "off",
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "off",
    "no-alert": "off",
  },
};
