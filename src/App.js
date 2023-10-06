import React from "react";



const App = () => {
  
  // request to internal api
  fetch("/api/users").then((res) => res.json()).then(res => console.log("wrapper=>users:",res));
  // request to other api
   fetch("https://fakestoreapi.com/products").then((res) => res.json()).then(res => console.log("wrapper=>products:",res));

   

  
  

  return <div>home</div>;
};

export default App;
