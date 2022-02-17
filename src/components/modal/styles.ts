import styled from "styled-components";
import modalbg from '../../images/modalbg.png'

export const Container = styled.div`
    .woman{
        background-image: url(${modalbg});
        background-position: center;
        background-size:cover;
        width:400px;
    }
    .textModal{
        width:390px;
        margin-left:-50px;

        .x{
            width: 100%;
            text-align: end;
        }
    }
    i{
        margin-top:-10px;
    }
    @media (max-width:770px) {
        .woman{
            background-position: top;
            width: 300px;
        }
        .textModal{
            width: 300px;
            margin-left: 0;
        }
    }

`