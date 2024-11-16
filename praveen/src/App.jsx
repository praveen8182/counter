// import React from "react";
// import Newcomponent from "./Component/Newcomponent";
// const App = () => {
//   return (
//     <div>
//       <Newcomponent placeholder={"name"} />
//       <Newcomponent placeholder={"password"} />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import Newcomponent from "./Component/Newcomponent";
// import Label from "./Component/Label";

// const App = () => {
//   return (
//     <div>
//       <Label label={"name"} placeholder={"name"} />
//       <Label label={"register no"} placeholder={"register no"} />
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import Label from "./Component/Label";
import Newcomponent from "./Component/Newcomponent";
import Adam from "./Component/button";
const App = () => {
 let name="raja"
  const [currentState,setCurrentState]=useState("")
 console.log(currentState)
 
  return (
    <div className="">
      <button onClick={()=>setCurrentState("maya")}>login</button>
      <Adam  button={"login"} />
      <Adam button={"signup"} />
      <div>
        <h1> login </h1>
        <Label placeholder={"email"} label={"email"} />
        <Label placeholder={"password"} label={"password"} />
        <Adam button={"login"} />
      </div>
      <div>
        <h1> signup </h1>
        <Label placeholder={"email"} label={"email"} />
        <Label placeholder={"password"} label={"password"} />
        <Adam button={"signup"} />
      </div>
    </div>
  );

}

export default App;
