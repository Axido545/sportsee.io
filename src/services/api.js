const apiUrl = "http://localhost:3000/user/";
const mockUrl = "http://localhost:5173/"

export function getUser(id, mock) {
    const url = getUrl(mock, id, mock ? 'user' : '')
    return fetch(url)
        .then(res => res.json())
}

export function getUserActivity(id, mock) {
    const url = getUrl(mock, id, '/activity')
    return fetch(url)
        .then(res => res.json())
}

export function getUserAverageSessions(id, mock) {
    const url = getUrl(mock, id, '/average-sessions')
    return fetch(url)
        .then(res => res.json())
}

export function getUserPerformance(id, mock) {
    const url = getUrl(mock, id, '/performance')
    return fetch(url)
        .then(res => res.json())
}

function getUrl(mock, id, route) {
    if (mock) {
        return mockUrl + route + '.json'
    } else {
        return apiUrl + id + route;
    }
}