import React, { Component } from 'react'

class Form extends Component
{
    constructor(props){
        super(props)
            this.state={
                usermane:""
            }
        }

    changeHandler=(event)=>{
        this.setState({
                usermane:event.target.value
    })
}
  render() {
    return (
      <div>
        <h1>
            Form Here
        </h1>
        <form>
            <div>
                <label>Username </label>
\                <input type="text" value={this.state.usermane} onChange={this.changeHandler}/>
            </div>
        </form>
      </div>
    )
  }
}

export default Form;

