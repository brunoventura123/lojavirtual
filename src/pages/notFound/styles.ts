import styled from "styled-components";
import gif from '../../images/gifs.gif'

export const Container = styled.div`
.frem{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${gif});
    background-position: center;
    background-repeat: no-repeat;
}
.frem p{
    position: absolute;
    top: 3rem;
    font-size: 7rem;
    color: #00000063;
}
.frem h2{
    position: absolute;
    bottom: 8rem;
    font-size: 34px;
}
.frem h5{
    position: absolute;
    bottom: 6rem;
    color: #9c9c9c;
}
.frem a{
    position: absolute;
    bottom: 1rem;
    background: linear-gradient(45deg, #ff0034, #ffbc00);
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 23px;
    border-radius: 13px;
}
`