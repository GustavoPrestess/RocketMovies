import styled from "styled-components";

export const Container = styled.div`
width:100%;
height: 100vh;

display:grid;
grid-template-rows: 116px auto;


grid-template-areas:

"header"
"content";






`;
export const Content = styled.div`
grid-area: content;
padding:  40px 106px 156px 123px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};




>h1{
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: 24px;
}

>h2{
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;

}

.News{
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;

    >div:first-child{
        width: 113px;
    }
    >div:last-child{
        width: 190px;
    }


}

>footer{
    display: flex;
    align-items: center;
    gap:40px;

    
}


`;

export const Form = styled.form`

.inputs{
    display:flex;
    align-items: center;
    gap: 40px;
    margin: 40px 0;

    >div:last-child{
        margin-bottom: 0;
    }
}

`