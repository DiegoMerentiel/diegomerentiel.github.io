import React from 'react'
import NavbarItem from '../Styles/NavbarItem'
import { useNavigation } from '../../../Services/HandleRedirection'

interface Props{
    isActive: boolean,
    redirection: string,
    text: string
}

const NavOption:React.FC<Props> = ({isActive, redirection, text}) => {
    const { handleClick } = useNavigation(redirection);


  return (
    <NavbarItem isActive={isActive} onClick={handleClick}>
        {text}
    </NavbarItem>
  )
}

export default NavOption