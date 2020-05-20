export default `
## React basics

### What is React?

React is a library for building user interfaces in a modular fashion. What makes React so great is that it makes it much easier to build complex UIs by allowing you to separate different elements of the UI into smaller parts called *components*.

React is a library, and NOT a framework. What that means is that you're free to use React in your aplication without it dictating every single aspect of your app. You don't even have to build your whole website using React, you could pretty much just use React in a single page and then use a different technology on the rest.

### Component-based

React allows you to build the UI elements in the form of component. These components manage their own state. Once you build a component, you can then go ahead and use that component inside of another component, and that inside of another component, and so on. What that means is that you can build components that are made out of another components. For example, you can create a "profile page" component that is compose of a profile picture component, an avatar component, a biography component, etc.

This is one of the biggest advantages of using a library like React, that is, you don't have to put all your "profile page" code in a single file, instead you divide it into smaller pieces that are easier to manage.

### A practical example

\`\`\`jsx
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

The \`name="Bruno"\` that is passed to the *Greeting* component is not an HTML attribute like \`class\` or \`style\`, it is actually something specific to React, we call it a *prop*. The prop, in our example, has a value of *Bruno*, and we are accessing it inside of the Greeting component using \`{ props.name }\` inside of curly braces. The curly braces here are used to render a JavaScript expression, in our case, we are accessing a value on the \`props\` object. If we instead typed \`props.name\` without the curly braces, the code would be rendered as a string, instead of being evaluated as an expression that returns a value.

## Getting started
In this lesson, i'll teach you how to get started using React. You'll learn how to install \`create-react-app\`, Facebook's official project starter for React. I'll explain some of the basics about create-react-app and how to start a React project using this tool.

### Prerequisites
In order to understand React and be able to work with it, first you have to make sure you're familiar with a few other technologies that are used along with the React library itself. With that in mind, i would suggest you to continue this tutorial *only* if you meet the following criteria:

- You're confident enough writing HTML and CSS.
- You know the basics of JavaScript ES6 &ndash; *let, const, arrow functions, etc.*
- You're familiar with the Document Object Model (*DOM*). You understand it's structure and know how to listen and respond to DOM events.

If you're good with these requirements, then let's keep going. Otherwise, you might wanna practice these concepts a little more. If you need help learning HTML, CSS, ES6+, or any other JavaScript topic, i recommend giving a look at the <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">MDN</a> (Mozilla's official documentation for many web technologies).

### Installing Node and NPM
The CRA (*create-react-app*) package can be installed using NPM, that means you must first install Node.js if you haven't yet. When you install Node.js, it automatically installs NPM as well. To verify that you have both Node.js and NPM installed, open your terminal (might be the cmd on Windows) and type the following, one by one:

\`node --version\` <i className="mdComment">// v12.16.1, in my case.</i>

\`npm --version\` <i className="mdComment">// 6.13.4, in my case.</i>

These should return the version number of node and npm, respectively.

Keep in my that, though i'll be using NPM throughout this tutorial, the same can be done with Yarn (just with different command syntax).

### Installing create-react-app
To install the CRA, first open up a terminal &ndash; if you're using VSCode, you can use it's integrated terminal. Run the following command on the terminal in order to install create-react-app:

\`npm install -g create-react-app\` <i className="mdComment">// the "-g" will install it globally.</i>

To verify that it was installed correctly, run the following command on your terminal to check the CRA version:

\`create-react-app --version\` <i className="mdComment">// 3.4.1, in my case.</i>

### Start a React project

Now that you have the CRA installed, let's go ahead and start a new project. Open up your terminal and type the following to start a new React project (it takes a while to finish):

\`create-react-app my-app\`

Once it's done, navigate into the folder by typing \`cd my-app\`, then run the following command to start the development server and run the application:

\`npm start\`

This command will automatically navigate you to http://localhost:3000 on your browser, where you should see your app runing.

And there you have it. You just created your first React application!
`