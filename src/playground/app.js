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

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setItem(()=>({ options}));
            }
        } catch (e) {
            // do nothing
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() {
        this.setState(()=>({option:[]}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        })   );
    }
    handlePick() {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { 
            return 'This option already exists';
        }  

        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }
    render() {
        //title={title} 
        const title = 'Indecision V6';
        const subtitle = '!!Put your life in the hands of a computer';
        // const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}   
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
    title: 'Indecision V7'
};


const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Option = (props) => {  
    return (
        <p>
            Option Item: {props.choice}
            <button 
                onClick={(e)=> {
                    props.handleDeleteOption(props.choice)
                }}
            >
                remove
            </button>
        </p>
    );
};


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                <Option 
                    key={option} 
                    choice={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
                ))
            }
        </div>
    );
};



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



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(()=>({error}));
            // return {       INVALID STYLE
            //     error: error
            // };
        if (!error) e.target.reset();
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp options={['Takina', 'Chisato']}/>, document.getElementById('app'));