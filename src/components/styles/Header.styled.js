import styled from "styled-components"

export const StyledHeader = styled.header`
    h1 {
        font-size: 2.15rem;
        text-transform: uppercase;
        text-shadow: 0px 0px 2px rgba(48, 45, 41, 1);
        text-align: center;
    }

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .settings {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-gap: 3em;
            width: 90%;            
            font-size: .75rem;
            border-bottom: 1px solid #B5AA99;
            padding-bottom: 1em;
            p {
                width: calc(100% / 3);
                text-align: center;
            }
            .currency {
                cursor: pointer;
            }
            .mode {
                cursor: pointer;
                svg {
                    width: auto;
                    height: 15px;
                    transition: all .75s ease;
                }
            }
            .index {
                display: flex;
                flex-direction: column;
                min-width: 100px;
                span {
                    
                    padding-left: .25em;
                }
            }
        }
    }
`