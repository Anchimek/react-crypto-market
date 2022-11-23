import React, { useContext, useEffect, useState } from 'react'
import { StyledSearch } from './styles/Search.styled'
import { Context } from '../Context'
import Coins from './Coins'

export default function Search() {
    const { getCoins, theme } = useContext(Context)
    const [foundCoin, setFoundCoin] = useState([])
    const [inputData, setInputData] = useState({
        coinName: ''
    })
    
    function handleChange(e) {
        const {name, value} = e.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value.toLowerCase()
            }
        })
    }

    useEffect( () => {
        const allCoins = getCoins(100)

        inputData.coinName.length > 0 
        ? setFoundCoin(prevCoins => prevCoins.filter(coin => coin.id.includes(inputData.coinName)))
        : setFoundCoin(allCoins)
        
    }, [inputData, getCoins])

    return (
    <StyledSearch theme={ theme } >
            <div className='container'>
                <input 
                    type='text'
                    placeholder='Type your coin name' 
                    name='coinName'
                    value={inputData.coinName}
                    onChange={handleChange} 
                />
                {<Coins arrOfCoins={foundCoin}/>}
            </div>
        </StyledSearch>
    )
}