import styled from 'styled-components'

const SideContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100px;
    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 20px;
        text-align: center;
        width: 80px;
        height:80px;
        @media (max-width: 500px){
            width: 50px;
            height: 50px;
        }
        background-color: var(--secondary-color);
        border-radius: 3px;
    }
    & > div > h1{
        all: unset;
        font-size: 15px;
        @media (max-width: 500px){
            font-size: 8px;
        }
    }
`

export default SideContainer