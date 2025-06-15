import React  from "react";
import ReactDom  from "react-dom/client";
import Name from "./Prem.jsx";
function App(){
const username = " Learn React";
  return(
    <>
     {/* <h1 className="text-3xl font-bold underline">Hello prem</h1>  */}
    <Name/>
    <h1>prem to learn code{username}</h1>
    {/* <p>test the react </p> */}
      </>
  );
}
 export default App;

 //`{$}`-> as repersent the variable in string 
 // same as the {username} in jsx their show as the evaluated expression ya par js nahi likhte hai but uska final outcome write karta hai.
 // {username if(true)} as this is not a valid js expression so it will not work in jsx
 // object ke under me bhi kot if or else nahi likhte hai kuki wo valid js expression nahi hai
//

