import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        
        <button onClick={()=>props.clickHandler("Arguement")}>CLick Here to Change Something</button>
    </div>
  )
}


        {/* <button onClick={this.props.clickHandler}>CLick Here to Change Something</button> */}

export default ChildComponent;