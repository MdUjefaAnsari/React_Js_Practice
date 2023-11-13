import React,{Fragment} from "react";

// function MyAppFun(){

//     return(
//         <div>
//             <h1>This is functional bassed component!!</h1>
//         </div>
//     );
// }

const MyAppFun = (props) => {
    let age=100;
    let name ='ujfa';
  return (
    <Fragment>
      <div>
        <h1 style={{color: "red",fontFamily:"cursive",background:"black",textAlign:"center"}}>This is arrow function</h1>
      </div>
      <div>
        <h1>this is second div!!!..</h1>
      </div>
      <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Id:{props.id}</h1>
      </div>
    </Fragment>
  );
};
export default MyAppFun;
