module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true, 
        "jest": true
    },
    "extends": [ "eslint:recommended", "prettier"] ,
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
    }
};
