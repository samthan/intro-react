// Challenge
// Make button '-1' - setup minusOne function and register - log 'minusOne'
// Make reset button "reset" - setup reset function - log "reset"

let count = 0
const addOne = () =>    {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
const minusOne = () =>  {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
};

// Challenge 1:
// Create a templateTwo var - JSX expression
// div
//  h1 -> name
//  p -> Age: age
//  p -> Location: location
// Render templateTwo instead of template



const renderCounterApp = () =>  {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot)
};

renderCounterApp();