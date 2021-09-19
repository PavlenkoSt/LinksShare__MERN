import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DetailCard from '../components/DetailCard'
import AuthContext from '../context/AuthContext'
import useFetch from '../hooks/useFetch'

const DetailPage = () => {
    const [ link, setLink ] = useState(null)
    const { id } = useParams()
    const { fetchData, loading } = useFetch()
    const { token } = useContext(AuthContext)

    const getDataHandler = useCallback( async () => {
        try{
            const fetchLink = await fetchData(`/api/links/${id}`, 'GET', null, {
                authorization: `Bearer ${token}`
            })
            setLink(fetchLink)
        }catch(e){
            throw new Error(`Oooops, some error on detail page`)
        }
    })

    useEffect(() => {
        getDataHandler()
    }, [token])

    if(loading){
        return <p>loading...</p>
    }

    if(!loading && !link){
        return <p>Error. Link with this id not found.</p>
    }

    return (
        <div>
            <h2 className='title'>DetailPage link with id: { link?._id }</h2>
            <DetailCard link={link} />
        </div>
    )
}

export default DetailPage
