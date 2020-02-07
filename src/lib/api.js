// Rough implementation. Untested.
function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("timeout"))
        }, ms)
        promise.then(resolve, reject)
    })
}

const createApiGetRequest = (url, headers = {}) => {
    return timeout(2000, fetch(url, {
            method: 'GET',
            headers
        })
            .then((resp) => resp.json())
    )

};

const getServerListApi = (url, headers) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            query: `
        query {ips:listInstancesIp}
      `,
            variables: {}
        }),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
};

const listNearbyInstances = (url, ip, headers) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            query: `
        query { res:listNearbyInstances(input:{ipAddress:"${ip}"}){
          domain
          instances
        }}
      `,
            variables: {}
        }),
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
};


export {
    createApiGetRequest,
    getServerListApi,
    listNearbyInstances
}
