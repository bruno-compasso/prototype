export default `
## What is React?

React is a library that is used to build user interfaces in a modular fashion. What makes React so great is that it makes it much easier to build complex UIs by allowing you to separate different elements of the UI into smaller parts called *components*.

React is a library, and NOT a framework. What that means is that you're free to use React in your aplication without it dictating every single aspect of your app. You don't even have to build your whole website using React, you could pretty much just use React in a single page and then use a different technology on the rest.

\`\`\`js
const React = require('react')
const ReactDOM = require('react-dom')
const Markdown = require('react-markdown')
const CodeRenderer = require('./code-renderer')

ReactDOM.render(
  React.createElement(Markdown, {
    source: 'your markdown here',
    renderers: {
      CodeBlock: CodeRenderer
      Code: CodeRenderer
    }
  }),
  document.body
)
\`\`\`

By checking the \`\`\`inline\`\`\` property, we can reuse the same renderer for both inline and blocks of code!
For instance, we could highlight \`const React = require('react')\` inline.

See \`examples/custom-renderers\` for the code behind this.
`;
