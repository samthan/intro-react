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
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";

        renderTemplate();
    }
};

// Create "Remove All" button above list
// on click -> wipe the array -> rerender
const onRemoveAll = () =>  {
    app.options = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];


// Create a render function that renders new JSX
// Call it right away
// Call it after options array is added

const renderTemplate = () =>    {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p> {app.subtitle} </p>}
            <p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */}
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();