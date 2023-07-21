import styled from 'styled-components'

const SimpleHeaderTextSection = styled.div`
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    width: 40%;
    @media (max-width: 700px) {
        font-size: 18px;
        width: 30%;
    }
`

export default SimpleHeaderTextSection