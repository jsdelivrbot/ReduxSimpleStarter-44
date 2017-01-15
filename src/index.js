import React from 'react';
import ReactDOM from 'react-dom';


const API_KEY = "AIzaSyBWkyIAQOSeJidl-bwP3KL-isyDsngnkDc";

// Create a new component. This component should produce
// some HTML

/*const App = function() {
  return <div>Hi!</div>
}*/

// Alternative to above code. It is more like member lamba.
const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it
// on the page (in the DOM).

//ReactDom.render requires instance of component class App
// if you pass App to render it will give an error saying pass object
// instance of component instead of component class.
// to get rid of this error we need to create instance of App component
// using <App></App> if you do not have anthing inside the opening and
// closing tag you can also write it as self closing tag <App />.

// _registerComponent(...): Target container is not a DOM element.
// to get rid of this error you need to pass the DOM element reference
// inside which our component is going to render
// like passing the .container DOM element selector as second
// parameter in the render function.

ReactDOM.render(<App/>, document.querySelector('.container'));
