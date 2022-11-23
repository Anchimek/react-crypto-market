import React from 'react'

export default function Tabs(props) {
    return (
        <>
                <button className={props.value === 'top10' ? 'active' : 'option'}>
                    {props.value}
                </button>
        </>
    )
}