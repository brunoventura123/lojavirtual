import styled from "styled-components";
import camera from '../../../images/camera.jpg';
import s9 from '../../../images/s9.jpg'
import nikon from '../../../images/nikon.jpg'
import airpod from '../../../images/airpod.jpg'
import photo from '../../../images/photo.svg'
import error from '../../../images/error.svg'
import montain from '../../../images/montain.svg'
import woman from '../../../images/woman.svg'

export const Container = styled.section`
    padding:0 30px;
    .grid{
        display:grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: 1fr 1fr 1fr;
        gap:20px;
        
        .area1, .topRight, .bottomLeft, .bottomRight{
            background-position:center;
            background-size:cover;
            width: 100%;
            height: 100%;
        }
        .area1{
            background-image:url(${photo});
            width:100%;
        }
        .topRight{
            background-image:url(${error});
            
        }
        .bottomLeft{
            background-image:url(${montain});
        }
        .bottomRight{
            background-image:url(${woman});
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