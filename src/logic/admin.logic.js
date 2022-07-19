import { fetchTodo } from "../api/todo.api"

export async function finalFetchTodo() {
    let data = await fetchTodo()

    const final = data.map(item => {
        if (item.title.indexOf("autem") > -1 || item.title.indexOf("minus") > -1) {
            return <p style={{ color: "#fff" }}>{item.title}</p>
        } else {
            return <p style={{ color: "blue" }}>{item.title}</p>
        }
    })
    return final
}

export async function finalPlush() {
    let data = await fetchTodo()
    const dataFinal = data.map(item => {
        // การรวม object 
        //ถ้าการ push คือการสร้าง array ใหม่
        return {
            ...item,
            image: "aaa"
        }
    })
    return dataFinal


}