import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { StyledCoin } from './styles/Coin.styled'

export default function Coins(  {arrOfCoins} ) {
    const { exchangeCurrency } = useContext(Context)
    
    const writeCoins = arrOfCoins => {
        return arrOfCoins.map( coin => {
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
                    {Math.round(coin.price_change_percentage_24h * 1000) / 1000}%
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
                {writeCoins(arrOfCoins)}
            </div>
        </StyledCoin>
    )
}