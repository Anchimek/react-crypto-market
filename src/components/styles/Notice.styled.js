import styled from "styled-components"

export const StyledNotice = styled.div`
    .notice {
        padding: 0 1em;
        margin-bottom: 4em;

        .title {
            font-size: 1rem;
            text-align: justify;
        }

        img {
            width: 100%;
            heigth: auto;
            object-fit: cover;

            border-radius: 10px;
            box-shadow:
            0px 0px 1.6px rgba(0, 0, 0, 0.014),
            0px 0px 3.6px rgba(0, 0, 0, 0.028),
            0px 0px 6px rgba(0, 0, 0, 0.041),
            0px 0px 9.1px rgba(0, 0, 0, 0.054),
            0px 0px 13.1px rgba(0, 0, 0, 0.066),
            0px 0px 18.6px rgba(0, 0, 0, 0.078),
            0px 0px 26.4px rgba(0, 0, 0, 0.089),
            0px 0px 38.3px rgba(0, 0, 0, 0.1),
            0px 0px 59.1px rgba(0, 0, 0, 0.112),
            0px 0px 105px rgba(0, 0, 0, 0.16)
          ;

        }

        .notice-info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            border-bottom: 1px solid ${({ theme }) => {
                return theme === 'light'
                ? '#302D29' : '#F0ECE7'
            }};
            padding-bottom: .75em;
            
            font-size: .7rem;
            
            p {
                color: #d49b0f;
                margin-top: .5em;
            }
        }
    }
`