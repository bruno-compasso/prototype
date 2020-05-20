export default `
## Intermediate React

Now that you already know the basics of React, it's time to learn some of the main concepts that you'll be required to know in order to get a job as a React developer. If you manage to follow along with this guide and practice a lot with small, personal projects, i guarantee you'll get a job as a React developer &ndash; I'm saying this based on personal experience.

### What is JSX?

Consider the following code of a React component:

\`\`\`jsx
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>This is a React tutorial.</h2>
    </div>
  )
}
\`\`\`

Here's what's happening here:

- First we are importing the React library from the react module.
- Then we are declaring a function called *App* and setting it as the default export.
- And lastly, we are returning a \`div\` element with a class named "App", which contains two header elements inside of it.

This syntax might be confusing at first because it looks neither JavaScript nor HTML, instead it looks like a mix of both. This syntax is called JSX, and it was created as an easier way to write React applications.

Now, you might be wondering, if React is a library, can't we just import it inside an HTML file and use vanilla JavaScript to write our web applications using React? Well, in fact you can. You don't really need to know much about this specific issue to be considered an intermediate React developer, but what you need to know is: It is possible to write React with vanilla JavaScript, but it's much easier to do so using JSX.

### JSX transpiling

One other thing to keep in mind is that, while you can write React using JSX, you can't actually run your code in the browser using this syntax, because the browser would not understand what to do with it. So, what you need to do is, you need to transpile your JSX into vanilla JavaScript &ndash; Something that the browser *can* understand. Facebook's project starter tool, \`create-react-app\`, does this out of the box for you. When you create a project using CRA and run it, the code gets transpiled to vanilla JavaScript using a tool called *Babel*. So, if you started your project using CRA, you don't need to configure anything on your own in regards to code transpiling.

### What's returned from a component

Let's take a closer look at the return statement of the code we mentioned before:

\`\`\`jsx
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>This is a React tutorial.</h2>
    </div>
  )
\`\`\`

Here's how this works:

- First we call a return statement to indicate what we want to return from the function (remember that React components are basically functions that return something).
- What's being returned from our function is a set of HTML tags.
- This set of HTML tags is what is going to be rendered on the screen, wherever this component is called.

This is the result of calling this component on a page:

<figure>
  <img src="/images/hello-world-react-tutorial.png" alt="Hello World. This is a React tutorial." />
  <figcaption className="img-desc">Img 1. React component being rendered.</figcaption>
</figure>

### You must return a single parent element from the component

Looking at our example again, you can see that, even though we have 3 HTML elements, we are returning only one parent element, which is the \`div\`. If instead we tried to return the two header elements without them being inside of a container element, like this:

\`\`\`jsx
  return (
    <h1>Hello World</h1>
    <h2>This is a React tutorial.</h2>
  )
\`\`\`

It would throw an error, because React requires that, whenever you're returning more than one element, you must wrap them all inside of a parent element.

So, keep in mind that, whenever you want to return more than one element from a React component, you *must* place them inside of a container element, wether it is a \`div\`, a \`section\`, a \`p\`, it doesn't matter what tag you use, but it needs to be inside of a container, so that you can return only one parent element.

`