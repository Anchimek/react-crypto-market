import styled from 'styled-components'

export const StyledSearch = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        input {
            background: transparent;
            color: ${({ theme }) => {
                return theme === 'light'
                ? '#302D29' : '#F0ECE7'
            }};

            width: 170px;
            height: 30px;
            
            border: ${ ({ theme }) => {
                return theme === 'light'
                ? "1px solid #302D29" : "1px solid #F0ECE7"
            }};
            border-radius: 10px;
            cursor: pointer;

            text-align: center;

            margin: 2em 0;

            &::placeholder {
                color: ${({ theme }) => {
                return theme === 'light'
                ? '#302D29' : '#F0ECE7'
            }};
            }
        }
    }
`