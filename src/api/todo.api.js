import axios from "axios"

export function hello() {
    console.log("hello Pang")
}

export async function fetchTodo() {
    let data = axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4',)
        .then((res) => {
            return res.data
        })
    return data
}
export const fetchTodo1 = async () => {
    let data = await axios.get('https://jsonplaceholder.typicode.com/todos',)
        .then((res) => {
            return res.data
        })
    return data
}