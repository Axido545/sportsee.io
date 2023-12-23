export function getUser(id){
    return fetch(`http://localhost:3000/user/${id}`)
    .then(res => res.json())

}

export function getUserActivity(id){
    return fetch(`http://localhost:3000/user/${id}/activity`)
    .then(res => res.json())

}

export function getUserAverageSessions(id){
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then(res => res.json())

}

export function getUserPerformance(id){
    return fetch(`http://localhost:3000/user/${id}/performance`)
    .then(res => res.json())

}