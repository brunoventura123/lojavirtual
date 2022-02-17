import styled from "styled-components";

export const Container = styled.div<{ cart: boolean }>`

    display:${props => props.cart ? 'flex' : 'none'};

    section{
        width: ${props => props.cart ? '350' : '0'}px;
        margin-right:${props => props.cart ? '0' : '-350'}px;
    }

    @media(max-width:450px){
        justify-content:start;
        section{
            width: ${props => props.cart ? '100%' : 0}px;
            margin-right:${props => props.cart ? '0' : '-320'}px;
            
        }
    }
`