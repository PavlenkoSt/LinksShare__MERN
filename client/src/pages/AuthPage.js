import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import useToast from '../hooks/useToast'
import { ToastContainer } from 'react-toastify'


const AuthPage = () => {
    const [ formData, setFormData ] = useState({ email: '', password: '' })

    const { fetchData, error, loading, clearError } = useFetch()
    const toast = useToast()

    const changeHandler = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const registerHandler = async () => {
        const register = await fetchData('api/auth/register', 'POST', { ...formData })
        toast(register.message)
    }

    const loginHandler = async () => {
        const login = await fetchData('api/auth/login', 'POST', { ...formData })
        console.log(login)
    }

    useEffect(() => {
        toast(error)
        clearError()
    }, [error, toast])

    return (
        <div>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Authorization</span>
                </div>
                <div className='auth-inputs'>
                    <div className="input-field">
                        <input 
                            id="email" 
                            type="email" 
                            name="email"
                            className="validate auth-input"
                            onChange={changeHandler}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="password" 
                            type="password" 
                            name="password"
                            className="validate auth-input"
                            onChange={changeHandler}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="card-action auth-btns">
                    <button className="btn deep-orange lighten-1" disabled={loading} onClick={loginHandler}>Sign</button>
                    <button className="btn deep-orange lighten-1" disabled={loading} onClick={registerHandler}>Register</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AuthPage
