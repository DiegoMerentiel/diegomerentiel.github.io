import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 50px;
    width: 100%;
    max-height: 250px;
    max-width: 900px;
    @media (max-width: 700px){
        width: 100%;
        font-size: 18px;
        justify-content: space-around;
    }
`

export default Section