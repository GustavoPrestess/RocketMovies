import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
    > header {
        height: 144px;
        width: 100%;
        padding: 64px 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

        > div {
            display:flex;
            align-items: center;
            gap: 8px;
            .iconLeft{
                > a {
                    svg {
                        height: 16px;
                        width: 16px;
                        display:flex;
                        color: ${({theme}) => theme.COLORS.PINKY};
                    }
                }
            }
            > a {
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: ${({theme}) => theme.COLORS.PINKY};
            }
        }         
    }
`;

export const Form = styled.form`

    max-width: 340px;
    margin: 0 auto;

    > div:nth-child(3),
    div:nth-child(5)
    {
        margin-bottom: 24px;
    }
`;

export const Avatar = styled.div`

    position: relative;
    margin: -99px auto 44px;
    
    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius:50%;
    }
    > label {
        position: absolute;
        bottom: 7px;
        right: 7px;
        
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.PINKY};
        
        display:flex;
        align-items: center;
        justify-content:center;

        cursor: pointer;

        input {
            display:none;
        }
        
        svg {
            width: 20px;
            height: 20px; 
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }
    }
`;