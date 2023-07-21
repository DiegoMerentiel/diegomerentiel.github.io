import React from 'react'
import NavbarItem from '../Styles/NavbarItem'
import { useNavigation } from '../../../Services/HandleRedirection'
import SimpleHeaderItem from '../Styles/SimpleHeaderItem'

interface Props {
    redirection: string,
    text: string
}

const SimpleNavOption: React.FC<Props> = ({ redirection, text }) => {
    const { handleClick } = useNavigation(redirection);


    return (
        <SimpleHeaderItem onClick={handleClick}>
            {text}
        </SimpleHeaderItem>
    )
}

export default SimpleNavOption