module.exports = {
  root: true,
  
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true, // browser global variables
    node: true,    // Node.js global variables and Node.js scoping.
    es2022: true,  //  adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
    jquery: false, // jQuery global variables
  },

  parserOptions: {
    ecmaVersion: 'latest', // use the most recently supported version 
    sourceType: 'module',  // your code is in ECMAScript modules
  },

  rules: {
    "eqeqeq": "warn",
  },

};