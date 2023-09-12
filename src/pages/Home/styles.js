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
        grid-area: content;
        overflow-y: auto;
        padding: 0 123px;
    }

`

export const Content = styled.div`

    width: 100%;
    
    margin: 0 auto;
    padding: 50px 0;
    display:flex;
    flex-direction: column;
    gap: 24px;

    > header {
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 16px;
        h2{
        }
    }
`;