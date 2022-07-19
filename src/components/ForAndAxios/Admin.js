import React, { useState, useEffect } from 'react'
import { finalFetchTodo, finalPlush } from "./../logic/admin.logic"
// import { hello } from "../api/todo.api"


function Admin() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        // hello()
        let tempData = await finalFetchTodo()
        let showData = await finalPlush()
        console.log(showData)
        setData(tempData)
    }
    return (
        <div>
            <h1>Admin</h1>
            {data.map((item, index) => {
                // console.log(item)
                return <div style={{ background: index % 2 === 0 ? "#fcde92" : "#aabfaa", padding: "20px", color: "#fff" }}>{item}<button>แก้ไข</button></div>
            })}


        </div>
    )
}
export default Admin;
