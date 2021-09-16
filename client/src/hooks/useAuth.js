import { useCallback, useEffect, useState } from 'react'

const localStorageName = 'userData'

const useAuth = () => {
    const [ token, setToken ] = useState(null)
    const [ userId, setUserId ] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem(localStorageName, JSON.stringify({ token: jwtToken, userId: id }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(localStorageName)
    }, [])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(localStorageName))

        if(userData && userData.token && userData.userId){
            login(userData.token, userData.userId)
        }

    }, [ login ])

    return { token, userId, login, logout }
}

export default useAuth