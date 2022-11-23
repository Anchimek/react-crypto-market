import React, { useEffect, useState, useContext } from 'react'
import { StyledHeader } from './styles/Header.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context'
 
function Header() {
    const [fearIndex, setFearIndex] = useState()
    const { currency, changeCurrency, theme, changeTheme } = useContext(Context)

    const url = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi'
    
    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 
                '3db32bc154msh9342f88e3634478p1c7601jsn07f27384370c',
                'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com'
            }
        }
        fetch(url, options)
            .then(res => res.json())
            .then(data => setFearIndex(data.fgi.now.valueText))
            .catch(err => console.error(err))
    }, [])

    function indexColor() {
        switch(fearIndex) {
            case 'Greed':
                return '#00A300'
            case 'Extreme Greed':
                return '#00A300'
            case 'Neutral':
                return '#302D29'
            case 'Fear':
                return '#E32227'
            case 'Extreme Fear':
                return '#E32227'
            
            default:
                return '#302D29';
        }
    }

    function renderMode() {
        return currency === 'USD' ? 'PLN: ZŁ' : 'USD: $'
    }

    function switchTheme() {
        return theme === 'light' ? faMoon : faLightbulb
    }

    return (
        <StyledHeader>
            <div className='logo'>
                <h1>Crypto market</h1>
                <div className='settings'>
                    <p 
                        className='currency'
                        onClick={() => changeCurrency()}    
                    >
                        {renderMode()}
                    </p>
                    <p className='mode'>
                        <FontAwesomeIcon 
                        icon={switchTheme()} 
                        onClick={() => changeTheme()}
                    />
                    </p>
                    <p className='index'>
                        <span>F&G index:</span> 
                        <span  style={ {color: indexColor()}}>
                            {fearIndex}
                        </span>
                    </p>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header