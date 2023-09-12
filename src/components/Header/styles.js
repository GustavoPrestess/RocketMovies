import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display:flex;
    align-items:center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
 
    justify-content: space-between;
    padding: 30px 123px;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

    > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.PINKY};
    }
`;

export const Profile = styled.div`

    display:flex;
    align-items:center;
    
    > div {
        display:flex;
        flex-direction:column;
        margin-right: 9px;
        
        strong {
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
        a {
            text-align: end;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
        svg {
            margin-right: 5px;
            margin-bottom: -2px;
        }
        

    }

    > img {
        width: 64px;
        height: 64px;
        border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
        border-radius: 50%;
    }
`;