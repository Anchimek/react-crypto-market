import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [theme, setTheme] = useState('dark')
    const [currency, setCurrency] = useState('USD')
    const [coinsList, setCoinsList] = useState([])
    const [plnRate, setPlnRate] = useState('')

    useEffect( () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        fetch(url)
            .then(res => res.json())
            .then(data => setCoinsList(data))
            .catch(err => console.error(err))
    }, [])

    useEffect( () => {
        const url = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/'
        fetch(url)
            .then(res => res.json())
            .then(data => setPlnRate(data.rates[0].bid))
            .catch(err => console.error(err))
    }, [currency])

    function getCoins(amountOfCoins = 10) {
        const coinsArr = []
        coinsList.map( (coin, index) => {
            return index < amountOfCoins ? coinsArr.push(coin) : null
        })
        return coinsArr
    } 

    function changeCurrency() {
        setCurrency( prevCurrency => {
            return prevCurrency === 'USD' ? 'PLN' : 'USD'
        })
    }

    function exchangeCurrency(value) {
        return currency === "USD" 
            ? `$${value}`
            : `${Math.round(value * plnRate * 100) / 100}zł`
    }

    function changeTheme() {
        setTheme( prevTheme => {
            return prevTheme === 'light' ? 'dark' : 'light' 
        })
    }

    return (
        <Context.Provider value={
            {
                theme,
                currency,
                changeCurrency,
                changeTheme,
                coinsList,
                exchangeCurrency,
                getCoins
            }
        }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}