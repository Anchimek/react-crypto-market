import styled from 'styled-components'

export const StyledTabs = styled.div`
    display: flex;
    justify-content: center;
    text-transform: lowercase;
    padding: .5em 0 1em 0;
    
    button {
        background: transparent;
        color: #D9A21B;
        border: none;
        &.active {
            font-weight: bold;
            font-size: 1rem;
        }
    }
`