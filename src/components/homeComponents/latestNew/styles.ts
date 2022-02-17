import styled from "styled-components";
import jack from '../../../images/jack.jpg'

export const Container = styled.article`
    &:hover .img{
        transform:scale(1.1);
    }
    .img{
        background-image:url(${jack});
        background-position:center;
        background-size:cover;
        width:350px;
        height:250px;
        transition:all ease .5s;
    }
    @media(max-width:768px){
        .img{
            width: 90%;
            height: 350px;
        }
    }
`