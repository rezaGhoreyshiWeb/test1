const  {fetch: originalFetch} = window;

const apiRoutes = {
    '/api/user': 'https://fakestoreapi.com/users'
}

window.fetch = (...params) => {
    const [url, options] = params;
    if (apiRoutes[url]) {
        return originalFetch(apiRoutes[url], options);
    }
    return originalFetch(url, options);
}
