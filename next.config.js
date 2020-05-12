const withTM = require("next-transpile-modules")(["react-syntax-highlighter/dist/esm/styles/prism/index.js"]);
 
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})