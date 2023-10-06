const  {fetch: originalFetch} = window;

export const apiRoutes = {
    '/api/users': 'https://fakestoreapi.com/users'
}

window.fetch = async (...params) => {
    const [url, options] = params;
    let response;
    switch (url) {
        case apiRoutes[url]:
            response = await fetch(apiRoutes[url], options);
            break;
    
        default:
            response = await originalFetch(url, options);
            break;
    }

    return response;
}
