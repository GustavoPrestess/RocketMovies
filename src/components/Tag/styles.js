import styled from "styled-components";

export const Container = styled.button`
    border: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    border-radius: 8px;
    padding: 5px 16px;
    &:not(:last-child){
        margin-right: 8px;
    }
`;