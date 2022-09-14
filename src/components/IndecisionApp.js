import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }
    state = {
        options: [],
        selectedOption: undefined
    };
    componentDidMount = () => {
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
    componentDidUpdate = (prevProps, prevState) =>{
        if (prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions = () => {
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState( (prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        // alert('pick success!')
        this.setState(()=>({
            selectedOption: option
        }));
    };
    handleOkay = () => {
        this.setState(()=>({
            selectedOption: undefined
        }));
    }
    handleAddOption = (option) => {
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
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}    
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption}   
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleOkay={this.handleOkay}
                    />
                </div>
            </div>
        );
    }
}

export default IndecisionApp;