console.log('App.js is running!');

// Challenge 2:
// Create app object title/subtitle
// use title/subtitle in the template
// render template


// Challenge 3:
// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 => "Here are your options" else "no options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p> {app.subtitle} </p>}
        <p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
        <ol>
            <li> One </li>
            <li> Two </li>
        </ol>
    </div>
);

const user = {
    name: 'Samuel',
    age: 23,
    location: 'San Jose'
};

function getLocation(location)  {
    if (location)   {
        return <p> Location: {location} </p>;
    }
}

const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

// Challenge 1:
// Create a templateTwo var - JSX expression
// div
//  h1 -> name
//  p -> Age: age
//  p -> Location: location
// Render templateTwo instead of template

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)
