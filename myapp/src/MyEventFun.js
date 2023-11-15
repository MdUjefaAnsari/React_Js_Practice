
import React from 'react'

export default function MyEventFun(props) {

    // function handleClick(){
    //     console.log("I am clicked..")
    // }

    const handleClick = ()=>{
        console.log("I am clicked..")
    }


  return (
    <div>
        <button onClick={handleClick}>Click</button>
        
    </div>
  )
}
