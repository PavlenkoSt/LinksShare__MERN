import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
import AuthContext from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const CreatePage = () => {
    const [ link, setLink ] = useState('')
    const { fetchData } = useFetch()
    const auth = useContext(AuthContext)
    const history = useHistory()

    const linkChangeHandler = (e) => {
        setLink(e.target.value)
    }

    const createHandler = async () => {
        try{
            if(link){
                const fetchLink = await fetchData('api/links/generate', 'POST', { from: link }, { authorization: `Bearer ${auth.token}`})
                history.push(`/detail/${fetchLink.link._id}`)
            }
        }catch(e){
            throw new Error(`Error in create handler ----> `, e.message )
        }
    }

    return (
        <div>
            <h2 className="title">Create link</h2>
            <div className="input-field col s6">
                <input id="link" type="text" value={link} onChange={linkChangeHandler} className="validate"/>
                <label htmlFor="link">Link</label>
            </div>
            <button className="btn blue darken-3" onClick={createHandler}>Create</button>
        </div>
    )
}

export default CreatePage
