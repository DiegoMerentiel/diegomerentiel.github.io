import styled from 'styled-components'

const TitleContainer = styled.div`
    width: 50%;
    height: 50%;
    max-height: 72px;
    color: white;
    font-size: 36px;
    font-weight: bold;
    @media (max-width: 700px) {
        width: 100%;
        justify-content: center;
    }
`

export default TitleContainer