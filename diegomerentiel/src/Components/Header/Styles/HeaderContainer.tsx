import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50vh;
    max-height: 400px;
    width: 100vw;
    background-color: var(--main-color);
    background-image: url("/src/assets/az-subtle.png");
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
`
export default HeaderContainer