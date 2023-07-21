import styled from 'styled-components'

const SimpleHeader = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 100;
    height: 10%;
    animation: fadeInDown 0.1s ease-in-out;
    background-color: #1e1b2c;
    background-image: url("/src/assets/az-subtle.png");
    color: white;
    width: 100%;
`

export default SimpleHeader