import React from 'react'
function EventHandlingExam() {

    const ClickHandler=()=>{
        console.log("Button is Clicked")
    }
  return (
    <div>
      <button onClick={ClickHandler}>Click Me</button>
    </div>
  )
}

export default EventHandlingExam
