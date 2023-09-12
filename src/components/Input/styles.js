import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 630px;
    display:flex;
    align-items:center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    &:not(:first-child){
        margin-bottom: 8px;
    }
    
    > input {
        height: 56px;
        width: 100%;
        padding: 10px ;
        color: ${({theme}) => theme.COLORS.WHITE};
        border:0;
        background: transparent;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_200}; 
        }

    }

    svg {
            margin-left: 16px;
        }
`;