import styled from "styled-components";

export const Container = styled.div<{ banner: string }>`
    margin-bottom:20px;
    border-radius:10px;
    background:linear-gradient(
        rgba(0,0,0,.4), 
        rgba(0,0,0,0.4)
        ), url(${props => props.banner});
        background-position:center;
        background-size:cover;
        transition:all ease .2s;
    
    &:hover .areablack{
        opacity:1;

    }
   
    .city{
       border-radius:10px;
        .areaall{
            padding-top:100px;
            transition:all ease .3s;
        }
        &:hover .areaall{
            padding-top:0 !important;
        }
    }
    
    &:hover .city{
        background:linear-gradient(
            rgba(0,50,255,.9), 
            rgba(0,50,255,0.9)
            ), url(${props => props.banner});
            background-position:center;
            background-size:cover;
    }
    .areablack{
        transition:all ease .3s;
        opacity:0;
       
    }
   

`