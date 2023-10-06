import React from "react";



const App = () => {
  
  // request to internal api
  fetch("/api/users").then((res) => res.json()).then(res => console.log("users:",res));
  // request to other api
   fetch("https://fakestoreapi.com/products").then((res) => res.json()).then(res => console.log("products:",res));

   

  
  

  return <div>home</div>;
};

export default App;
