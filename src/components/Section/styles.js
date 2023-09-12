import styled from "styled-components";

export const Container = styled.div`

width: 100%;
padding: 32px;
border-radius: 16px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    > h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 8px;
    }
    .icon {
        svg{
            margin: 3px;
            width: 12px;
            height: 12px;
            cursor: pointer;
            &:not(:last-child){
                color: ${({theme}) => theme.COLORS.PINKY};
            }
        }
    }
    > p {
        margin-top: 15px;
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        align-self: stretch;
    }
`;