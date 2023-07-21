import styled from 'styled-components'

const MainArticleContainer = styled.article`
    all: unset;
    width: 60%;
    font-size: 20px;
    height: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #E9EAEC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    max-width: 900px;
    @media (max-width: 700px){
        margin-top: 2rem;
        height: 100%;
        width: 90%;
        padding-top: 0;
        padding-bottom: 0;
    }
`

export default MainArticleContainer