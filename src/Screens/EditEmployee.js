import React, { useEffect, useState } from 'react'
import Validation from '../Validation'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const countries = ["Bangladesh", "Canada", "China", "France", "India", "Japan", "Nepal", "Sri Lanka"]

export default function EditEmployee() {

    const {state} = useLocation()

    console.log(state)

    const initialState = useSelector((state) => state)
    const dispatch = useDispatch()
    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        dob: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        skills: ''

    }
    const [values, setValues] = useState(initialValues)

    const [errors, setErrors] = useState({})

    function handleInput(e) {
        const newObj = { ...values, [e.target.name]: e.target.value }
        setValues(newObj)

    }

    function setterData(){
        const newData = initialState.list.find
    }

    function handleValidation(e) {
        console.log(typeof initialState)
        e.preventDefault();
        setErrors(Validation(values))
        if (Object.keys(Validation(values)).length === 0) {
            dispatch({ type: 'EDIT', payload: { id: new Date().getTime().toString(), data: values } })
            setValues(initialValues)
            console.log(initialState.list)
        }
    }
    
    return (
        <div>
            <p>Employee Details</p>
            <form onSubmit={handleValidation}>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>First Name</p>
                    <input onChange={handleInput}
                        name='fname'
                        value={values.fname}
                        placeholder='First Name'
                        style={{
                            height: 35,
                            width: '100%',
                        }} />
                    {errors.fname && <p style={{ color: 'red' }}>{errors.fname}</p>}
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Last Name</p>
                    <input onChange={handleInput}
                        name='lname'
                        value={values.lname}
                        placeholder='Last Name'
                        style={{ height: 35, width: '100%' }} />
                    {errors.lname && <p style={{ color: 'red' }}>{errors.lname}</p>}
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Email</p>
                    <input onChange={handleInput}
                        value={values.email}
                        name='email'
                        placeholder='Email'
                        style={{ height: 35, width: '100%' }} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Mobile Number</p>
                    <input onChange={handleInput}
                        name='mobile'
                        value={values.mobile}
                        placeholder='Mobile'
                        style={{ height: 35, width: '100%' }} />
                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Date of Birth</p>
                    <input onChange={handleInput}
                        name='dob'
                        value={values.dob}
                        type='date'
                        placeholder='First Name'
                        style={{ height: 35, width: '100%' }} />
                </div>
                <div style={{ height: 35, width: '100%', marginBottom: 40 }}>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Gender</p>
                    <input onChange={handleInput} name='gender' type='radio' value='male' /> Male
                    <input onChange={handleInput} name='gender' type='radio' value='female' /> Female
                </div>
                <div >
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Address</p>
                    <textarea name='address' value={values.address} style={{ width: '100%', height: 90 }} />
                </div>

                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '100%' }}>
                            <p style={{ fontWeight: 'bold', fontSize: 15 }}>Country</p>
                            <select name="country" value={values.city} onChange={handleInput} style={{ height: 40, width: '40%' }}>
                                {countries.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{ width: '100%' }}>
                            <p style={{ fontWeight: 'bold', fontSize: 15 }}>City</p>
                            <input onChange={handleInput} value={values.city} name='city' placeholder='City' style={{ height: 35, width: '40%' }} />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: 15 }}>Skills</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>AWS</span>
                            </div>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>DevOps</span>
                            </div>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>Full Stack Developer</span>
                            </div>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>Middleware</span>
                            </div>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>QA Automation</span>
                            </div>
                            <div>
                                <input onChange={handleInput} type='checkbox' /><span>WebServices</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}


