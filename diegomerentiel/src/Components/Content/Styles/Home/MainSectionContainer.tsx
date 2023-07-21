import styled from 'styled-components'

const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    & > h1{
        all: unset;
        font-weight: bold;
        font-size: 20px;
        @media (max-width: 500px){
            font-size: 18px;
        }
    }
    @media (max-width: 500px){
        width: 100%;
        font-size: 15px;
    }
    text-align: justify;
`

export default MainSectionContainer