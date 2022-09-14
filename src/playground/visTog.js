console.log('App.js is running');



// JSX - JavaScript XML

class VisTog extends React.Component {
    constructor(props){
        super(props);
        this.infoTog = this.infoTog.bind(this);
        this.state = {
            detail: false
        };

    }
    
    infoTog() {
        this.setState((prevState)=>{return {
            detail: !prevState.detail
        };});

    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle V2</h1>
            
            <button onClick={this.infoTog}>
                {this.state.detail == false ? 'show detail' : 'hide detail'}
            </button>
            {this.state.detail == true && <p>Detail showed</p>}
            
        </div>);
    }
}

// let show = 0;

// const detailTog = () => {
//     show = (show==0 ? 1 : 0);
//     renderApp();
// };



// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
            
//             <button onClick={detailTog}>
//                 {show==0 ? 'show detail' : 'hide detail'}
//             </button>
//             {show ===1 && <p>Detail showed</p>}
            
//         </div>);
//     ReactDOM.render(template, appRoot);
// }


const appRoot = document.getElementById('app');
ReactDOM.render(<VisTog />, appRoot);