
const API_URL = 'http://localhost:8080/work'
export default function fetchWorkData()
{
    return fetch(API_URL).then(res=>res.json());
}