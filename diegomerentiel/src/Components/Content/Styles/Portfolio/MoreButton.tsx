import styled from "styled-components";

const MoreButton = styled.button`
    all: unset;
    cursor: pointer;
    background-color: var(--secondary-color);
    width: 40%;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    &:hover{
        background-color: var(--secondary-color);
        color: white;
    }
    position: relative;
    overflow: hidden;
    &:hover::before {
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
`

export default MoreButton