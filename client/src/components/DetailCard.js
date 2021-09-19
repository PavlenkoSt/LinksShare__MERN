import React from 'react'

const DetailCard = ({ link }) => {
    if(!link){
        return <></>
    }

    return (
        <div>
            <div>Sourse adress link: <a target='_blank' href={ link?.from }>{ link?.from }</a></div>
            <div>Generated new adress link: <a target='_blank' href={ link?.to }>{ link?.to }</a></div>
            <div>Date: <strong>{ new Date(link?.date).toLocaleDateString() }</strong></div>
            <div>Clicks: <strong>{ link?.clicks }</strong></div>
        </div>
    )
}

export default DetailCard
