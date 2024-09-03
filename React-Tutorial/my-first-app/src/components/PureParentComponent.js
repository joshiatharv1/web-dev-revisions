import React, { Component,  } from 'react'
import PureChildComponent from './PureChildComponent'
class PureParentComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            message:"I am an Parent Component"
        }
    }
    updateMessage=()=>{
        this.setState({
            message:"I am an Parent Component"
        })
    }
  render() {
    return (
      <div>

        <PureChildComponent message={this.state.message}/>
        <button onClick={this.updateMessage}>Click Here to Try Pure Component</button>
      </div>
    )
  }
}

export default  PureParentComponent;