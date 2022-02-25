import styled from "styled-components";
import camera from '../../../images/camera.jpg';
import error from '../../../images/error.png'
import man from '../../../images/man.jpg'
import woman from '../../../images/woman.jpg'

export const Container = styled.section`
    padding:0 30px;
    .grid{
        display:grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: 1fr 1fr 1fr;
        gap:20px;
        
        .area1, .topRight, .bottomLeft, .bottomRight{
            background-position:center !important;
            background-size:cover !important;
            background-repeat:no-repeat !important;
            width: 100%;
            height: 100%;
        }
        .area1{
            background:linear-gradient(rgba(0,0,0,.7),
            rgba(0,0,0,.1)),
            url(${camera});
        }
        .topRight{
            background:linear-gradient(rgba(0,0,0,.9),
            rgba(0,0,0,.1)),
            url(${error});
            
        }
        .bottomLeft{
            background:linear-gradient(rgba(0,0,0,.7),
            rgba(0,0,0,.0)),
            url(${man});
        }
        .bottomRight{
            background:linear-gradient(rgba(0,0,0,.7),
            rgba(0,0,0,.2)),
            url(${woman});
        }
        
    }
    @media(max-width:640px){
        .grid{
            display:grid;
            grid-template-columns:1fr;
            grid-template-rows: repeat(4,1fr);
            gap:20px;
        }
    }
`