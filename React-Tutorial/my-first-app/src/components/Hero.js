import React from 'react'

function Hero(props) {
if(props.name==="Joker"){
    throw new Error("Joker is not a Hero")
}
else{
  return (
    <div>
      {props.name}
    </div>
  )
}
}
export default Hero
