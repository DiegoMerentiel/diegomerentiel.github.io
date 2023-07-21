import styled from 'styled-components'

const NavbarContainer = styled.nav`


    position: absolute;
    bottom: -1rem;
    border-radius: 4px 4px 0px 0px;
    height: 20%;
    max-height: 50px;
    width: 60%;
    background-color: #E9EAEC;
    margin-left: auto;
    margin-right: auto;
    right: 0px;
    left: 0px;
    display: flex;
    max-width: 900px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    animation: expand 0.5s forwards;
    @media (max-width: 700px) {
        width: 100%;
        animation: expand-mobile 0.5s forwards;
        border-radius: 0px;
    }
`
export default NavbarContainer