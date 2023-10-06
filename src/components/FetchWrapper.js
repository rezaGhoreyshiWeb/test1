import React, { useEffect } from "react";
import { apiRoutes } from "../apiRoutes/endpoint";

export default function FetchWrapper() {
    useEffect(() => {
        const { fetch: originalFetch } = window;
        window.fetch = async (...params) => {
            console.log('wrapper => hit api route');
            const [url, options] = params;
            let response;
            if (url in apiRoutes) {
        
              response = await fetch(apiRoutes[url], options);
              
            } else {
        
              response = await originalFetch(url, options);
            }
        
            return response;
          };

    },[])
  return null;
}
