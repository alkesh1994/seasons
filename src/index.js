import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';


const App = () =>{
    
    const [lat,errorMessage] = useLocation();

    let content;
    if(errorMessage){
        content = <div>Error: { errorMessage } </div>;
    }else if(lat){
        content =<SeasonDisplay lat={lat} />;
    }else{
    return <Spinner message="Accept location request"/>;
    }

    return <div className="border red">{content}</div>
}


/* class App extends React.Component {
     
    state = { lat:null , errorMessage : '' };

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>; 
            }
            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={this.state.lat}/>  
            }
            return <Spinner message="Accept location request"/>;
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude }),
            err => this.setState({ errorMessage: err.message})           
        );
    }

    componentDidUpdate(){
        console.log('My component was just update d-it rerendered');
    }
    render() {
    return<div className="border 10px red">{this.renderContent()}</div>  
    }
} */
 

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
); 