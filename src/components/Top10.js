import React, { useContext, useState } from 'react'
import Coins from '../components/Coins'
import { Context } from '../Context'

export default function Top10() {
    const { getCoins } = useContext(Context)

    const topTenCoins = getCoins(10)

    return (
        <>
            <Coins arrOfCoins={topTenCoins}/>
        </>
    )
}