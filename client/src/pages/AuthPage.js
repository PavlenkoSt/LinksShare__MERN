import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const AuthPage = () => {
    const [ formData, setFormData ] = useState({})

    const { fetchData, error, loading, clearError } = useFetch()

    const changeHandler = () => {

    }

    const registerHandler = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

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
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="password" 
                            type="password" 
                            name="password"
                            className="validate auth-input"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="card-action auth-btns">
                    <button className="btn deep-orange lighten-1">Sign</button>
                    <button className="btn deep-orange lighten-1">Register</button>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
