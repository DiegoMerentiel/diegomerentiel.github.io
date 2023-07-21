import styled from 'styled-components'

const PictureContainer = styled.div`
    height: 160px;
    width: 160px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    border-radius: 50%;
    @media (max-width: 700px) {
        width: 100px;
        height: 100px;
    }
    position: relative;
    overflow: hidden;
    &:hover::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 100%;
    background-image: linear-gradient(
        120deg,
        rgba(255,255,255, 0) 30%,
        #e4e4e450,
        rgba(255,255,255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: shine 2s infinite linear; /* Animation */
    cursor: pointer;
}
`

export default PictureContainer
