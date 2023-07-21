import styled from "styled-components";

interface Props {
    isActive: boolean
}

const StatusCircle = styled.div<Props>`
        width: ${(props) => (props.isActive ?
        "14px" : "10px"
        )};
        height: ${(props) => (props.isActive ?
        "14px" : "10px"
        )};
        margin-bottom: 2px;
        border: ${(props) => (props.isActive ?
        "0" : "2px solid var(--main-color)"
        )};
        border-radius: 50%;
        background-color: ${(props) => (props.isActive ?
        "var(--secondary-color)" : "transparent")};
        cursor: pointer;
`

export default StatusCircle