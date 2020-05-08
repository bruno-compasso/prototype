const withTM = require("next-transpile-modules")(["react-syntax-highlighter/dist/esm/styles/prism/index.js"]);
 
module.exports = withTM();