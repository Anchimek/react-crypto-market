import React, { useContext } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Context } from './Context'

import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import Tabs from './components/Tabs'
import Top10 from './components/Top10'
import Search from './components/Search'
import Converter from './components/Converter'
import CryptoWorld from './components/CryptoWorld'

import GlobalStyles from './components/styles/Global'
import { StyledTabs } from './components/styles/Tabs.styled'

function App() {
    const { theme } = useContext(Context)

    return (
        <>
            <GlobalStyles theme={ theme }/>
            <Container>
                <Header />
                <StyledTabs>
                    <Link to="/">
                        <Tabs value={'top10'}/>
                    </Link>
                    <Link to="/search">
                        <Tabs value={'search'}/>
                    </Link>
                    <Link to="/converter">
                        <Tabs value={'converter'}/>
                    </Link> 
                    <Link to='cryptoworld'>
                        <Tabs value={'cryptoworld'}/>
                    </Link>
                </StyledTabs>

                <Routes>
                    <Route exact path='/' element={ <Top10 />} />
                    <Route path='/search' element={ <Search /> } />
                    <Route path='/converter' element={ <Converter /> } />
                    <Route path='/cryptoworld' element={ <CryptoWorld />} />
                </Routes>

            </Container>
        </>
    )
}

export default App