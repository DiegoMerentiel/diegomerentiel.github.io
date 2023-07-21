import styled, { css } from 'styled-components'

const DropdownContent = styled.div`
    bottom: -50px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    position: absolute;
    width: 150px;
    height: 50px;
    border-radius: 2px;
    justify-content: flex-end;
    & > div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
        height: 50%;
        cursor: pointer;
    }
    & > div:hover{
        color: white;
        border-radius: 1px;
        background-color: black;
    }
    & > div > b{
        margin-left: 4px;
    }
`;

export default DropdownContent