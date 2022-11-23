import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { StyledCoin } from './styles/Coin.styled'

export default function Coin() {
    const [plnRate, setPlnRate] = useState('')
    const { coinsList, currency } = useContext(Context)
    
    function getTopTen() {
        const topTenArr = []
        coinsList.length > 0 && coinsList.map( (coin, index) => {
            return index < 10 ? topTenArr.push(coin) : null
        })
        return topTenArr
    } 

    useEffect( () => {
        const url = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/'
        fetch(url)
            .then(res => res.json())
            .then(data => setPlnRate(data.rates[0].bid))
            .catch(err => console.error(err))
    }, [currency])
    
    function exchangeCurrency(value) {
        return currency === "USD" 
            ? `$${value}`
            : `${Math.round(value * plnRate * 100) / 100}zł`
    }
    
    function writeCoins() {
        return getTopTen().map(coin => {
            return <p className='coin' key={coin.id}>
                <span>
                    <img 
                        src={coin.image} 
                        alt={`Symbol of ${coin.name}`}
                    />
                </span>
                <span>{exchangeCurrency(coin.current_price)}</span>
                <span 
                    style={ { color: coin.price_change_percentage_24h < 0 ? '#E32227' : '#00A300'} }
                >
                    {Math.round(coin.price_change_percentage_24h * 100) / 100}%
                </span>
                <span>{exchangeCurrency(coin.ath)}</span>
            </p>
        })
    }

    return (
        <StyledCoin>
            <div className='coins'>
                <div className='tabHead'>
                    <p>Crypto</p>
                    <p>Current price</p>
                    <p>24h</p>
                    <p>All Time High</p>
                </div>
                {writeCoins()}
            </div>
        </StyledCoin>
    )
}