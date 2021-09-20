import React from 'react'
import { Link } from 'react-router-dom'

const LinkTableItem = ({ linkItem }) => {
    return (
        <tr>
            <td>{ linkItem.from }</td>
            <td>{ linkItem.to }</td>
            <td><Link to={`detail/${linkItem._id}`}>Go to details</Link></td>
        </tr>
    )
}

export default LinkTableItem
