import React, { useContext } from 'react'
import { Context } from './Context'

import Header from './components/Header'
import Coin from './components/Coin'
import { Container } from './components/styles/Container.styled'
import Tabs from './components/Tabs'

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
                    <Tabs value={'top10'}/>
                    <Tabs value={'add coin'}/>
                    <Tabs value={'converter'}/>
                    <Tabs value={'cryptoworld'}/>
                </StyledTabs>
                <Coin />
            </Container>
        </>
    )
}

export default App