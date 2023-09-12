import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    padding: 19px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 10px;
    border: none;
    resize: none; //evitar que o usuário aumente o tamando da caixa
    margin-bottom: 40px;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

`;