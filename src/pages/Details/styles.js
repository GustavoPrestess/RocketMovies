import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display:grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        padding:  40px 106px 156px 123px;
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    grid-area: content;
    max-width:1137px;

    > div {
        display:flex;
        gap: 19px;
        align-items: center;
        margin-top: 24px;
        
        > h1 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
        }

        .iconStar {
            display:flex;
            align-items: center;
            height: 47px;
            gap: 10px;

            svg {
                font-size: 36px;
                cursor: pointer;

            &:not(:last-child){
                color: ${({theme}) => theme.COLORS.PINKY};
            }   
            }
        }
    }
    .info {
        margin-bottom: 40px;
        .user {
            display:flex;
            align-items:center;
            gap: 8px;

            .icon {
                width: 16px;
                height: 16px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: ${({theme}) => theme.COLORS.WHITE};
                }
                
                img {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
                }
            }
        }

        .date {
            display: flex;
            align-items: center;
            gap: 8px;

            .icon {
                display:flex;
                
                svg {
                    color: ${({theme}) => theme.COLORS.PINKY};
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                }
                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: ${({theme}) => theme.COLORS.WHITE};
                }
            }
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        padding-right: 24px;
        margin-top: 40px;
        
        > p {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            text-align: justify;       
        }
    }

`