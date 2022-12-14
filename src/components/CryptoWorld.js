import React, { useEffect, useState } from 'react'
import Notice from './Notice'

export default function CryptoWorld() {
    const [infoData, setInfoData] = useState([])

    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3db32bc154msh9342f88e3634478p1c7601jsn07f27384370c',
		        'X-RapidAPI-Host': 'web-search24.p.rapidapi.com'
            }
        }
        const url = 'https://web-search24.p.rapidapi.com/?query=cryptonews&max=10&proxy=US'
        fetch(url, options)
            .then(response => response.json())
            .then(data => setInfoData(data.results))
            .catch(err => console.error(err));
    }, [])
    
    const news = () => {
        if(infoData.length > 0) {
            return infoData.map( ( notice, index ) => {
                return <Notice key={index} notice={notice} />
            })
        }
    } 

    return (
        <div>
            {infoData !== undefined && news()}
        </div>
    )
}