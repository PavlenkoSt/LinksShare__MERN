import { useCallback, useState } from "react"


const useFetch = () => {
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    
    const fetchData = useCallback(async (url, method = 'GET', body = {}, headers = {}) => {
        try{
            setLoading(true)

            const responce = await fetch(url, { method, body, headers })
            const data = await responce.json()

            setLoading(false)
            
            if(!responce.ok){
                throw new Error(data.message || 'Some error')
            }

            return data
        }catch(e){
            setError({ error: e })
            throw new Error(e.message || 'Some error')
        }
    })

    const clearError = () => setError(null)

    return { loading, error, fetchData, clearError }
}

export default useFetch