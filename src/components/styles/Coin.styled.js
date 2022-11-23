import styled from "styled-components"

export const StyledCoin = styled.div`
    .coins {
        font-size: 0.7rem;
        .tabHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            grid-gap: 3em;
            padding: 0 2em;
            p {
                text-align: center;
            }
        }
        .coin {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2em;
            span {
                text-align: center;
                min-width: 70px;
                &:first-child {
                    text-align: left;
                }
                &:nth-child(2) {
                    text-align: left;
                }
            }
            img {
                width: 35px;
                height: auto;
            }
        }
    }
`