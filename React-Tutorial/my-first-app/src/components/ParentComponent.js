import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            message:"I am an Parent Component"
        }
    }
    clickHandler=(Arguementfromchild)=>{
        alert(`Who are you ${this.state.message} and I got an arguement from ${Arguementfromchild}`);
    }
  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

export default ParentComponent;
