import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [theme, setTheme] = useState('dark')
    const [currency, setCurrency] = useState('USD')
    const [coinsList, setCoinsList] = useState([])

    useEffect( () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        fetch(url)
            .then(res => res.json())
            .then(data => setCoinsList(data))
            .catch(err => console.error(err))
    }, [])
    
    function changeCurrency() {
        setCurrency( prevCurrency => {
            return prevCurrency === 'USD' ? 'PLN' : 'USD'
        })
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
                coinsList
            }
        }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}