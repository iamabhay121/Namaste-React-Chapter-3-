import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element ---------> JSx is a react element
// const heading = (
//     <h1 id="h1" key="h1">
//       Namaste React by Abhay
//     </h1>
//   );


// React functional Components  ----> is a function that return some piece of Jsx.

  const Title = () =>{
   return (
    <h1 id="h1" key="h1">
      Namaste React by Abhay
    </h1>
  );
}

  const HeadingComponent =() => {
    return <div>
      <Title />
      <h1>Namaste React from Function Components</h1>
    </div> 
  }


  const root = ReactDOM.createRoot(document.getElementById("root"));

 // root.render(heading); // render the react element

  root.render(<HeadingComponent />) // render the react component