import styled from "styled-components";

const GithubButton = styled.button`
    all: unset;
    cursor: pointer;
    border: 1px solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 10%;
    width: 50%;
    height: 40px;
    &:hover{
        background-color: black;
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

export default GithubButton