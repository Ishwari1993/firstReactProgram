import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/css/index.css';

class Root extends Component{
    constructor(){
        super();
        this.state={
            name: "ishwari",
            name1: "saroj",
            name2: "rahul",
            name3: "binod"
        };
    }
    onButtonclick =() =>{
        this.setState({name: "pandey"});
    }
    onButtonclick1 =() =>{
        this.setState({name1: "Bhattarai"});
    }
    onButtonclick2 =() =>{
        this.setState({name2: "poudel"});
    }
    onButtonclick3 =() =>{
        this.setState({name3: "Neupane"});
    }
    
 render(){
     return(
         <div>
           
           <button onClick = {this.onButtonclick}>ishwari</button>
           <button onClick = {this.onButtonclick1}>saroj</button>
           <button onClick = {this.onButtonclick2}>rahul</button>
           <button onClick = {this.onButtonclick3}>binod</button>
             <div>
                 Name: {this.state.name}
             </div>
             <div>
                 Name: {this.state.name1}
             </div>
             <div>
                 Name: {this.state.name2}
             </div>
             <div>
                 Name: {this.state.name3}
             </div>
         </div>
     )
 }
}
render(<Root />, document.getElementById('react-root'))
    