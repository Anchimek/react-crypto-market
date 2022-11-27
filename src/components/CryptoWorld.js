import React, { useEffect, useState } from 'react'
import Notice from './Notice'

export default function CryptoWorld() {
    const [infoData, setInfoData] = useState([])

    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3db32bc154msh9342f88e3634478p1c7601jsn07f27384370c',
                'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
            }
        };
        const url = 'https://crypto-news-live11.p.rapidapi.com/all?page=1&per_page=7'
        fetch(url, options)
            .then(response => response.json())
            .then(data => setInfoData(data))
            .catch(err => console.error(err));
    }, [])

    const news = () => {
        if(infoData.news.length > 0) {
            return infoData.news.map( notice => {
                return <Notice key={notice.id} notice={notice} />
            })
        }
    } 

    return (
        <div>
            {infoData.news !== undefined && news()}
        </div>
    )
}