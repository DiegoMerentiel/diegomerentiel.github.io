import styled from 'styled-components'

const SimpleHeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    color: white;
    width: 40%;
    @media (max-width: 700px) {
        width: 70%;
    }
`

export default SimpleHeaderSection