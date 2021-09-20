import React, { useCallback, useContext, useEffect, useState } from 'react'
import LinkTableItem from '../components/LinkTableItem'
import AuthContext from '../context/AuthContext'
import useFetch from '../hooks/useFetch'

const LinksPage = () => {
    const [ links, setLinks ] = useState([])
    const { fetchData, loading } = useFetch()
    const { token } = useContext(AuthContext)

    const getLinks = useCallback(async () => {
        try{
            const fetchLinks = await fetchData('/api/links', 'GET', null, {
                authorization: `Bearer ${token}`
            })
            setLinks(fetchLinks)
        }catch(e){
            throw new Error(`Some error in fetch links ---> ${e.message}`)
        }
    })

    const linkItemsRender = links?.map(link => <LinkTableItem linkItem={link} key={link._id} />)

    useEffect(() => {
        getLinks()
    }, [])

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2 className='title'>Links List</h2>
            <table>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Go to details</th>
                    </tr>
                </thead>

                <tbody>
                    { linkItemsRender }
                </tbody>
            </table>
        </div>
    )
}

export default LinksPage
