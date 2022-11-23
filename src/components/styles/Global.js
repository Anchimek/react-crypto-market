import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
        * {
            box-sizing: border-box;
            font-family: 'Syne Mono', monospace;
        }

        body {
            background-color: ${({ theme }) => {
                return theme === 'light'
                ? '#F0ECE7' : '#302D29'
            }};
            color: ${({ theme }) => {
                return theme === 'light'
                ? '#302D29' : '#F0ECE7'
            }};
            font-size: 1.15em;            
            margin: 0;
        }

        p {
            line-height: 1.5;
        }
`

export default GlobalStyles