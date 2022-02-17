import styled from "styled-components";

export const Container = styled.div<{ bannerImg: string }>`
    background-image:url(${props => props.bannerImg});
    background-position:center;
    background-size:cover;
`