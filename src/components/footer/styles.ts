import styled from "styled-components";

export const Container = styled.footer`
    background-color:#222;
    font-weight: 300;
    padding-left: 40px;
    padding-right:40px;


    li{
        &:hover{
            color:#FFF;
        }
    }
    @media(max-width:640px){
        padding: 0;
    }
`