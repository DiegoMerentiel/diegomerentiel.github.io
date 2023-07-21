import styled, { css } from 'styled-components'

interface Props {
    isActive: boolean
}

const NavbarItem = styled.div<Props>`
    position: relative;
    height: 100%;
    max-height: 50px;
    width: 25%;
    color: ${(props) => props.isActive ?
        "white" : "black"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: ${(props) => props.isActive ?
        "var(--secondary-color)" : "transparent"};
    border-radius: 3px;
    
    ${props =>
        props.isActive &&
        css`
        background-color: var(--secondary-color);
        color: white;
    position: relative;
    overflow: hidden;
    &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
        120deg,
        rgba(255,255,255, 0) 30%,
        rgba(255, 255, 255, 0.8),
        rgba(255,255,255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: 2.5s shine infinite linear; /* Animation */
    }
`};

    &:hover{
    cursor: pointer;
    z-index: 10;
    }
    &: hover:after{
    content: '';
    position: absolute;
    bottom: 0;
    height: 4px;
    width: 70 %;
    background - color: var(--secondary - color - shadow);
}
    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 70 %;
    background - color: ${(props) => props.isActive ?
        "var(--secondary-color-shadow)" : "transparent"
    };
}

`
export default NavbarItem