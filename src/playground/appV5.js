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
        this.state = {
            options: []
        };
    }
    handleDeleteOptions() {
        this.setState(()=>{
            return {
                options: []
            };
        });
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

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        const title = 'Indecision V5';
        const subtitle = '!!Put your life in the hands of a computer';
        // const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}    
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}



class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}



class Option extends React.Component {
    render() {
        return (
            <p>
                Option Item: {this.props.choice}
            </p>
        );
    }
}



class Options extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options);
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} choice={option} />)
                }
            </div>
        );
    }
}



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
        
        this.setState(()=>{
            // return {       INVALID STYLE
            //     error: error
            // };
            return { error };
        });
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));