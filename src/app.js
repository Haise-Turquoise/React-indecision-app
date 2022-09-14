// install -> input -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
                {props.children}
            <p>footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

// const obj = {
//     name: 'Takina',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// //console.log(obj.getName());
// console.log(getName());

// stateless 









// class Options extends React.Component {

//     // constructor(props){
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} choice={option} />)
//                 }
//             </div>
//         );
//     }
// }






ReactDOM.render(<IndecisionApp options={['Takina', 'Chisato']}/>, document.getElementById('app'));
// ReactDOM.render((
//     <Layout>
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
//     </Layout>), document.getElementById('app'));
// class OldSyntax {
//     constructor() {
//         this.name = 'Takina';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     // getName() {
//     //     return this.name;
//     // }
//     getGreeting() {
//         return `Hi, my name is ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//     name = 'Mika';
//     getGreeting = () => {
//         return `Hi, my name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newgetGreeting = newSyntax.getGreeting;
// console.log(newgetGreeting());