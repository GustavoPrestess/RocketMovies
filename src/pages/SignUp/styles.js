
import styled from "styled-components";

import backgroundImg from '../../assets/background.png'
export const Container = styled.div`
    
    height: 100vh;
    display:flex;
    align-items:stretch;
`;

export const Form = styled.form`

    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 0 134px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINKY};   
    }
    > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.GRAY_100};     
    }

    > h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        margin: 48px 0;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .button {
        margin: 16px 0 42px 0;
    }

    > div {
        display:flex;
        align-items: center;
        justify-content: center;
        .iconLeft{

            svg {
                width: 16px;
                height: 16px;
                margin-right: 8px;
                display:flex;     
            }
        }

        a {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: ${({theme}) => theme.COLORS.PINKY};
            text-align:center
        }
    }
`;

export const Background =styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;