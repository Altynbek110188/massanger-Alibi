async function makeQuery(endpoint, method='get', payload={}) {
   
    const BASE_URL = 'http://10.60.10.16:8080/api/'
    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // ...(method.toLowerCase() == 'post' && { body: JSON.stringify(payload) })
    }
    
if (method.toLowerCase()== "put" || method.toLowerCase() == "post") {
    options.body = JSON.stringify(payload);
}

    let response = await fetch(BASE_URL + endpoint, options);
    return await response.json();
    
}



