import React, { useContext } from 'react'
import { StyledNotice } from './styles/Notice.styled'
import { Context } from '../Context'

export default function Notice( { notice } ) {
    const { theme } = useContext(Context)
    
    return (
        <StyledNotice theme={theme}>
            <div className='notice'>
                <a 
                    href={notice.url} 
                    className='title' 
                    target='_blank'
                    rel='noreferrer'
                >
                    <h3 className='title'>{notice.title}</h3>
                </a>
                <div className='notice-info'>
                    <p>{notice.description}</p>
                    <a 
                        href={notice.url} 
                        className='url' 
                        target='_blank'
                        rel='noreferrer'
                    >
                        <p className='by'>By: {notice.url}</p>
                    </a>
                </div>
            </div>
        </StyledNotice>
    )
}