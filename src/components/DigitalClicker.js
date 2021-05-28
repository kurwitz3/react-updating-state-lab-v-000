import React, { Component } from 'react' 


class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
    buttonClicks = () => {
        this.setState((prevState =>{
            return {
                timesClicked: prevState.timesClicked + 1
            }
        }))
    }

    render(){
        return(
            <div>
                <label></label>
                <button onClick={this.buttonClicks} >{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
