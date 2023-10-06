import React, { useEffect, useLayoutEffect } from "react";
import { apiRoutes } from "../apiRoutes/endpoint";

export default function FetchWrapper() {
  console.log("hit fetch wrapper");
  const { fetch: originalFetch } = window;
  window.fetch = async (...params) => {
    const [url, options] = params;
    let response;
    if (url in apiRoutes) {
      console.log("wrapper => app api route");

      response = await fetch(apiRoutes[url]);
    } else {
      console.log("wrapper => external api route");

      response = await originalFetch(url, options);
    }

    return response;
  };
  return null;
}
