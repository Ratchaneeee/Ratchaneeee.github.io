import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { fetchTodo } from "../api/todo.api"


function AxiosData() {
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
            <h1>AxiosData</h1>

            <select>
                {data.map((item, index) => {
                    return <option>{item.title}</option>
                })}
            </select>
        </div>
    )
}
export default AxiosData;
