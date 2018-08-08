// console.log('app.js is running!');

// const app = {
//     title: 'Visibility Toggle',
//     details: false
// };

// const appRoot = document.getElementById('app');

// const changeState = () => {
//     app.details = !app.details;
//     console.log(app.details);
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1> {app.title} </h1>
//             <button onClick={changeState}> {app.details == false ? 'Show details' : 'Hide details' } </button>
//             { app.details == true && <p> This is where the details should go. </p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();

// Instructor solution
let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1> Visibility toggle </h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p> Hey. These are some details you can now see! </p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
