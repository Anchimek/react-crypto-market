import React, { useContext } from 'react'
import { StyledNotice } from './styles/Notice.styled'
import { Context } from '../Context'

export default function Notice( { notice } ) {
    const { theme } = useContext(Context)

    return (
        <StyledNotice theme={theme}>
            <div className='notice'>
                <a 
                    href={notice.link} 
                    className='title' 
                    target='_blank'
                    rel='noreferrer'
                >
                    <h3>{notice.title}</h3>
                    <img src={notice.img} alt={notice.slug}/>
                </a>
                <div className='notice-info'>
                    <p>{notice.date}</p>
                    <p>By: cryptonews</p>
                </div>
            </div>
        </StyledNotice>
    )
}