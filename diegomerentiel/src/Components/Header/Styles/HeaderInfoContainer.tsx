import styled from 'styled-components'

const HeaderInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70%;
    width: 60%;
    max-width: 900px;
    justify-content: space-between;
    animation: 0.3s fadeIn ease-in-out;
    @media (max-width: 700px) {
        height: 100%;
        align-content: center;
        align-items: center;
        width: 100%;
        justify-content: center;
    }
`
export default HeaderInfoContainer