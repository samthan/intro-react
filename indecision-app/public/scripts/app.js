'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
// var template = (
//     <div>
//         <h1>Indecision App</h1> 
//         <p>This is some info</p>
//         <ol>
//             <li> Item one </li>
//             <li> Item two </li>
//         </ol>    
//     </div>
// );

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Samuel Han '
    ),
    React.createElement(
        'p',
        null,
        ' Age: 23 '
    ),
    React.createElement(
        'p',
        null,
        ' Location: San Jose '
    )
);

// Create a templateTwo var - JSX expression
// div
//  h1 -> name
//  p -> Age: age
//  p -> Location: location
// Render templateTwo instead of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
