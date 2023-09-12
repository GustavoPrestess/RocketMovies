import styled from "styled-components";


export const Container = styled.a`
    > div {
        display:flex;
        align-items: center;
        gap: 8px;
        .iconLeft{
        > a { 
            font-weight: 400;
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.PINKY};
            display:flex;
            line-height: 21px;
            gap: 5px;
                    
            svg {
                width: 18px;
                height: 24px;
                color: ${({theme}) => theme.COLORS.PINKY};
            }   
            };    
        };
    };
`;