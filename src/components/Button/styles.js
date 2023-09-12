import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_1000 :  theme.COLORS.PINKY};
    color: ${({theme, isNew}) => isNew ? theme.COLORS.PINKY : theme.COLORS.BACKGROUND_900};
    width: 100%;
    padding: 13px 32px;
    border: 0;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    display:flex;
    align-items:center;
    justify-content: center;

    &:disabled{

    opacity: 0.5;
    }
`;  