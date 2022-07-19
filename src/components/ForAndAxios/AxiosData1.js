import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { fetchTodo } from "../api/todo.api"


function AxiosData1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let tempData = await fetchTodo()
        setData(tempData)
    }
    return (
        <div>
            <h1>AxiosData1</h1>
            {data.map((item, index) => {
                return <div>{item.title}</div>

            })}


        </div>
    )
}
export default AxiosData1;
