import styled from 'styled-components'

export const StyledExchange = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        justfiy-content: center;
        align-items: center;
        .userData {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-gap: 1em;

            margin-bottom: 1em;

            input, select {
                background-color: transparent;

                border-radius: 5px;
                border: ${ ({ theme }) => {
                    return theme === 'light'
                    ? "1px solid #302D29" : "1px solid #F0ECE7"
                }};
                
                color: ${({ theme }) => {
                    return theme === 'light'
                    ? '#302D29' : '#F0ECE7'
                }};
                
                width: 80px;
                height: 30px;
                text-align: center;
 
                option {
                    background: ${({ theme }) => {
                        return theme === 'light'
                        ? '#F0ECE7' : '#302D29'
                    }};

                    color: ${({ theme }) => {
                        return theme === 'light'
                        ? '#302D29' : '#F0ECE7'
                    }};
                }
            }
        }
        .exchangedValue {
            font-size: .9rem;
            color: #D9A21B;

            padding: 0 1em;
            text-align: center;
        }
    }
`