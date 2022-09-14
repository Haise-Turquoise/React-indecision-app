console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'Indecision-app!heheha!Jim!',
    subtitle: 'dumb',
    options: []
}



const onFormSubmit = (e) => {
    e.preventDefault();// prevent default action
    console.log('form submitted');
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onDelete = (e) => {
    e.preventDefault();// prevent default action
    console.log('form deleted');
    // remove all element in app.options
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length );
    console.log(randomNum);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? "here are options:" : "no option" }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            {
                app.options.map((option)=>
                    (<li key ={option}>Item: {option}</li>)
                )
            }
            {
            // <ol>
            //     <li>Item one</li>
            //     <li>Item two</li>
            // </ol> 
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={onDelete}>Delete All Option</button>
        </div>);
    ReactDOM.render(template, appRoot);
}

const user = {
    name: 'Takina',
    age: 16,
    location: 'Reco'
}

/*
var userName = 'Mika';
var userAge = '48';
var userLocation = 'LycoReco';
*/

function getLocation(location) {
    if (location) {
        return <p>Location:{location}</p>;
    } 
}

// create a templateTwo variable
// var templateTwo = (
//     <div>
//         <h1>{user.name? user.name: 'Anonymous'}</h1>  
//         {user.age >= 18 && <p>Age:{user.age}</p>}       
//         {getLocation(user.location)}
//     </div>);

// const app2 = {
//     title: 'Lycoris',
//     subtitle: 'Recoil'
// }

// let TemplateThree = (
//     <div>
//         <h1>{app2.title}</h1>
//         <p>{app2.subtitle}</p>
//     </div>
// )
// var template = /*#__PURE__*/React.createElement("h1", { id: "someid"}, "Something new");
const appRoot = document.getElementById('app');

renderApp();