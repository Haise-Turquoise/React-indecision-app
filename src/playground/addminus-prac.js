class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0

        };

    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('cnt');
            const cnt = pareInt( JSON.parse(json) , 10);
            if (!isNaN(cnt)) {
                // this.state.count = cnt;
                this.setState(()=>({count: cnt}));
            }
        } catch (e) {
            // do nothing
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count ) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('cnt', json);
        }
    }
    handleAddOne() {
        this.setState((prevState)=>{return {
            count: prevState.count + 1
        };});
    }
    handleMinusOne() {
        this.setState((prevState)=>{return {
            count: prevState.count -1
        };});
    }
    handleReset() {
        this.setState((prevState)=>{return {
            count: 0
        };});
        // this.setState((prevState)=>{return {
        //     count: prevState.count + 1
        // };});
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });

    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);



// let cnt = 0;
// // const someId = 'my-id';
// const addOne = () => {
//     cnt++;
//     refreshCounterApp();
//     // console.log('addOne');
// };

// const minusOne = () => {
//     cnt--;
//     refreshCounterApp();
//     console.log('minusOne');
// }

// const reset = () => {
//     cnt = 0;
//     refreshCounterApp();
//     console.log('reset');
// } 

// const templateTwo = (
//     <div>
//         <h1>Count: {cnt}</h1>
//         <button onClick={addOne}/*id={someId} className="button"*/>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );
// console.log(templateTwo);

// const appRoot = document.getElementById('app');
// // ReactDOM.render(templateTwo, appRoot);

// const refreshCounterApp = ()=> {
//     const templateTwo = (
//         <div>
//             <h1>Count: {cnt}</h1>
//             <button onClick={addOne}/*id={someId} className="button"*/>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// refreshCounterApp();