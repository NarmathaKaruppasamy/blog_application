import React from "react";
import style from './style.css'
//import {IoBulbOutline} from 'react-icon/fa'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={isToggleOn:true}
        this.handelClick=this.handelClick.bind(this)
    }

    handelClick(){
        this.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn
        }));
    }

    render(){
        return(
        <div className='col'>
            <button onClick={this.handelClick}>
                {this.state.isToggleOn ? <div id='on'>ON</div> : <div id='off'>OFF</div>}    
            </button>
        </div>
        )
    }
}
export default App