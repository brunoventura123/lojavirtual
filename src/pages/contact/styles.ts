import styled from "styled-components";
import contactUs from '../../images/contactus.jpg'

export const Container = styled.div`
    .banner{
        background:linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ),url(${contactUs});
          background-position:center;
          background-size:cover;
        
    }
`