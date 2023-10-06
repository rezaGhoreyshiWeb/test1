import React from "react";

const App = () => {
  // request to user app
  fetch("/api/users").then((res) => console.dir(res.json()));
  // request to other api
  fetch("https://fakestoreapi.com/products").then((res) => console.dir(res.json()));

  return <div>home</div>;
};

export default App;
