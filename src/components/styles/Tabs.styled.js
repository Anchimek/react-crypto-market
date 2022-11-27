import styled from 'styled-components'

export const StyledTabs = styled.div`
    display: flex;
    justify-content: center;
    text-transform: lowercase;
    padding: .5em 0 1em 0;
    
    button {
        background: transparent;
        color: #d49b0f;
        border: none;
        cursor: pointer;
        &.active {
            font-weight: bold;
            font-size: 1rem;
        }
    }
`