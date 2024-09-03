import React from 'react';

function MapFunctiom() {
  let arr = ["Atharv", "Atharva", "Amisha", "Adarsh"];
  arr.push("John")
  arr.unshift("Kevin")
  arr.pop()
  arr.push("Kevin")
  let arr3 = arr.map((e, index) => {
    return <h1 key={index}>{e+" "+index}</h1>;
  });
  return (
    <div>
      {arr3}
    </div>
  );
}

export default MapFunctiom;
