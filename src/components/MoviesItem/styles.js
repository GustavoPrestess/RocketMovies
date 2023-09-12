import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700 };

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none" };
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
        svg {
            color: ${({theme}) => theme.COLORS.PINKY};
        }
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        background: transparent;
        border: none;

        &::placeholder{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        }
    }
`;