import React from 'react'

function Greet(params) {
    console.log("Say hello to "+params.name)
  return (
    <div>
      Hello Atharv and hello {params.name}

      <h3>{params.children}</h3>
    </div>

  )
}

export default Greet
