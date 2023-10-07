import React from "react";

/** 
 * use the fucking service worker in the browser to intercept api request 
 * go to this url: https://mswjs.io/
 
  
*/ 


const App = () => {
  // mock server request using msw: mocking server worker
  fetch('/api/users').then(response => response.json()).then(data => console.log("users request in mocking api: ",data));

  // request to that api endpoint that not mock
  fetch('https://fakestoreapi.com/products?limit=5').then(response => response.json()).then(data => console.log(data));

   

  
  

  return <div>home</div>;
};

export default App;
