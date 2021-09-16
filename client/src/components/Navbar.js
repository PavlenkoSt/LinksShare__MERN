import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-2">
                <span className="brand-logo">Links Shared</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/links'>Links</Link></li>
                    <li><a href='/' onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
