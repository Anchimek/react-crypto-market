import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Tabs(props) {
    const { pathname } = useLocation()
    
    function checkPath() {
        if(pathname === `/${props.value}`) {
            return 'bold'
        } else if (pathname === '/' && props.value === 'top10') {
            return 'bold'
        } else return 'normal'
    }

    return (
        <>
                <button style={ { fontWeight: checkPath() }}>
                    {props.value}
                </button>
        </>
    )
}