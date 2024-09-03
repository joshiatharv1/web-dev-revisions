import React from 'react'

function Synthetic() {
    function handleTitleChange(e) {
        console.log("The new title is:", e.target.value);
        // 'e' represents synthetic event
        const nativeEvent = e.nativeEvent;
        console.log(nativeEvent);
        e.stopPropagation();
        e.preventDefault();
      }

  return (
    <div>
    <input name="title" onChange={handleTitleChange} />; 
   </div>
  )
}

export default Synthetic
