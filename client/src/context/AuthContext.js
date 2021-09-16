import { createContext } from 'react'

const none = () => {}

const AuthContext = createContext({
    token: null,
    userId: null,
    login: none,
    logout: none,
    isAuth: false
})

export default AuthContext