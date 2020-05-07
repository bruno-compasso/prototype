export default `
## What is React?

React is a library for building user interfaces in a modular fashion. What makes React so great is that it makes it much easier to build complex UIs by allowing you to separate different elements of the UI into smaller parts called *components*.

React is a library, and NOT a framework. What that means is that you're free to use React in your aplication without it dictating every single aspect of your app. You don't even have to build your whole website using React, you could pretty much just use React in a single page and then use a different technology on the rest.

### Component-based

React allows you to build the UI elements in the form of component. These components manage their own state. Once you build a component, you can then go ahead and use that component inside of another component, and that inside of another component, and so on. What that means is that you can build components that are made out of another components. For example, you can create a "profile page" component that is compose of a profile picture component, an avatar component, a biography component, etc.

This is one of the biggest advantages of using a library like React, that is, you don't have to put all your "profile page" code in a single file, instead you divide it into smaller pieces that are easier to manage.

### A practical example

\`\`\`js
import React from "react";
import ReactDOM from "react-dom";

const Greeting = (props) => {
    return (
      <div>
        Hello { props.name }
      </div>
    );
}

ReactDOM.render(<Greeting name="Bruno" />, document.getElementById("root"));
\`\`\`

What the code above does is, it defines a *functional component* that accepts a \`props\` object as parameter. That function returns a \`div\` element, which contains the text \`Hello { props.name }\`. In the last line, we are rendering the component inside of a container DOM element with id \`root\`.

The \`name="Bruno"\` that is passed to the *Greeting* component is not an HTML property like \`class\` or \`style\`, it is actually something specific to React, we call it a *prop*. The prop, in our example, has a value of *Bruno*, and we are accessing it inside of the Greeting component using \`{ props.name }\` inside of curly braces. The curly braces here are used to render a JavaScript expression, in our case, we are accessing a value on the \`props\` object. If we instead typed \`props.name\` without the curly braces, the code would be rendered as a string, instead of being evaluated as an expression that returns a value.
`