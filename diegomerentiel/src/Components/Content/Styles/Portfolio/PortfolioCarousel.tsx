import styled from "styled-components";

const PortfolioCarousel = styled.article`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    width: 900px;
    height: 500px;

    @media(max-width: 1000px)
    {
        flex-direction: column;
        align-items: center;
        width: 150%;
        height: 100%;
    }

    @media(min-width: 1000px) and (min-height: 600px)
    {
        min-width: 900px;
        max-width: 1100px;
        width: 80%;
        min-height: 500px;
        height: 500px;
    }
`

export default PortfolioCarousel