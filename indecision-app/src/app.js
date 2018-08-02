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

var templateTwo = (
    <div>
        <h1> Samuel Han </h1>
        <p> Age: 23 </p>
        <p> Location: San Jose </p>
    </div>
);

// Create a templateTwo var - JSX expression
// div
//  h1 -> name
//  p -> Age: age
//  p -> Location: location
// Render templateTwo instead of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot)
