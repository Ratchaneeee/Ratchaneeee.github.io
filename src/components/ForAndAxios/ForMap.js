import React, { useState, useEffect } from 'react';
function Formap() {
    const [allNumber, setAllNumber] = useState([])
    useEffect(() => {
        mapNumber()
    }, [])

    const mapNumber = () => {
        let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let checkNumber = number.map(num => {
            if (num % 2 === 0) {
                return <p>{num} true</p>
            }
            else {
                return <p>{num} false</p>
            }
        })
        setAllNumber(checkNumber)
    }
    console.log(allNumber)

    // let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let result = number.filter(num => {
    //   let x = num % 3 == 0
    //   return x
    // })
    // console.log(result)
    return (
        <>
            <div className="App">
                {allNumber.map(data => {
                    return data
                })}
            </div>
        </>
    )
}
export default Formap;