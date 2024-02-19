import '../Styling/Table.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../Styling/Table.css'


export default function Search() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [number, setNumber] = useState(null)

    const [data, setData] = useState([])
    let initialState = useSelector((state) => state)
    useEffect(() => {
        setData(initialState.list)
    }, [])

    async function removeData(e) {
        dispatch({ type: 'REMOVE', payload: { id: e } })
        let newData = initialState.list.filter((item) =>
            item.id != e
        )
        setData(newData)
        setName("");
        setNumber("")
    }

    function searchElement() {

        let newData = initialState.list.filter((item) => {
            return name.toLowerCase() === '' ? item :
                item.data.fname.toLowerCase().includes(name.toLowerCase())
        }
        )

        newData = newData.filter((item) => {
            return number.toLowerCase() === null ? item :
                item.data.mobile.includes(number)
        }
        )
        console.log(newData)
        setData(newData)
    }

    return (
        <div>
            <div>
                <p style={{ fontWeight: 'bold', fontSize: 15 }}>Employee Name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    name='fname'
                    placeholder='Employee Name'
                    style={{
                        height: 35,
                        width: '100%',
                    }} />
            </div>
            <div>
                <p style={{ fontWeight: 'bold', fontSize: 15 }}>Mobile No.</p>
                <input
                    onChange={(e) => setNumber(e.target.value)}
                    name='fname'
                    placeholder='Mobile No.'
                    style={{
                        height: 35,
                        width: '100%',
                    }} />
            </div>
            <button
                style={{ backgroundColor: '#4284f5', height: 30, width: 80, marginTop: 20, marginBottom: 20, color: 'white' }}
                onClick={() => searchElement()}
            >Search</button>
            <div>
                <table style={{ width: '100%', border: '3px solid black' }}>
                    <tr style={{ backgroundColor: '#04AA6D', color: 'white', height: 40 }}>
                        <th className='th'>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                    {data.length > 0 &&
                        data?.map((item) => (
                            <tr className='container' >
                                <td >{item.data?.fname}</td>
                                <td>{item.data?.lname}</td>
                                <td>{item.data?.mobile}</td>
                                <td>{item.data?.email}</td>
                                <td>{item.data?.gender}</td>
                                <td>{item.data?.dob}</td>
                                <td>{item.data?.country}</td>
                                <td><button onClick={() => navigate('/createEmployee', { state: item.id })}>Edit</button><button onClick={() => removeData(item.id)}>delete</button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}
