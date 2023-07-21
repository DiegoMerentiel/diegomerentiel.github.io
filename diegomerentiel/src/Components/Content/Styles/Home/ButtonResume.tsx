import styled from 'styled-components'

const ButtonResume = styled.button`
    all: unset;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
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
@media (max-width: 700px){
        width: 100%;
        font-size: 15px;
        font-weight: bold;
    }
`

export default ButtonResume