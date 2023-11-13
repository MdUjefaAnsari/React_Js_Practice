import React from 'react';
import ReactDOM from 'react-dom';
import MyStudent1 from './MyStudent1';

// import MyApp from './MyApp';
// import MyAppFun from "./MyAppFun";

// import MyStudent from './MyStudent';
// import MypropsCheck from './MypropsCheck';
// import MyState from './MyState';
// import MyEvent from './MyEvent';
// import MyEventFun from './MyEventFun';


// ReactDOM.render(<MyApp />,document.getElementById("root"));

// ReactDOM.render(<MyAppFun id="101" />,document.getElementById("root"));

/*
let a=[23,34]
ReactDOM.render(<MypropsCheck   id={20}>
  
  I am children{a}
</MypropsCheck>,document.getElementById("root"));
*/
ReactDOM.render(<MyStudent1  roll={101} name="ujefa" />,document.getElementById("root"));