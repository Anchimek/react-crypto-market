import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import Coins from './Coins'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { StyledExchange } from './styles/Exchange.styled'

export default function Exchange() {
    const [inputData, setInputData] = useState({
        coinSymbol: 'btc',
        coin: '',
        userValue: ''
    })
    const { coinsList, currency, plnRate, theme } = useContext(Context)

    function getCoinName(e) {
        const { name, value } = e.target

        //limit of characters in input
        const limit = 8

        setInputData(prevCoin => ({
            ...prevCoin,
            [name]: value.slice(0, limit)
        }))
        
    }

    function writeSelectOptions() {
        return coinsList.map( coin => (
            <option 
                value={coin.symbol} 
                key={coin.id}
                name={inputData.coinSymbol}
            >
                {coin.symbol}
            </option>
        ))
    }
    
    useEffect( () => {
        setInputData(prevData => ({
            ...prevData,
            coin: coinsList.filter( coin => coin.symbol === inputData.coinSymbol)
        }))
    }, [inputData.coinSymbol, coinsList])

    function exchangedValue() {
        const coinPrice = inputData.coin[0].current_price
        const userValue = inputData.userValue
        const value = userValue / coinPrice 

        const returnPrice = currency === 'USD' ? value : (value / plnRate)
        
        const coinName = inputData.coin[0].id
        return `You will receive ${Math.round(returnPrice * 1000000) / 1000000} ${coinName}`
    }

    return (
        <>
        <StyledExchange theme={ theme }>
            <div className='container'>
                <div className='userData'>
                    <input 
                        type='number'
                        placeholder={`1000 ${currency === 'USD' ? '$' : 'zł'}`} 
                        name='userValue'
                        value={inputData.userValue}
                        onChange={getCoinName}
                        maxLength={4}
                    />
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    <select 
                        name="coinSymbol" 
                        id="coins"
                        onChange={getCoinName}
                    >
                        {writeSelectOptions()}
                    </select>
                </div>
                <p className='exchangedValue'>
                    {inputData.userValue.length > 0 && exchangedValue()}
                </p>
                
                {inputData.coin.length > 0 && <Coins arrOfCoins={inputData.coin} />}
                
            </div>
        </StyledExchange>
        </>
    )
}