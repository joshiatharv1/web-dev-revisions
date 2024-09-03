import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props);
        this.state={
            message:"GoodBye"
        }
    }


    // clickHandler() {
    //     this.setState({
    //         message:"Hello Again"
    //     })
    // }

     clickHandler=()=> {
        this.setState({
            message:"Hello Again"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Here !</button>
      </div>
    )
  }
}

export default EventBind
