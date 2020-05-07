// const withTM = require("next-transpile-modules")(["react-syntax-highlighter/dist/esm/styles/prism/index"]);
const withTM = require("next-transpile-modules")(["react-syntax-highlighter/dist/esm/styles/prism/index.js"]);
// const withTM = require("next-transpile-modules")(["react-syntax-highlighter/dist/esm/styles/prism"]);
 
module.exports = withTM();