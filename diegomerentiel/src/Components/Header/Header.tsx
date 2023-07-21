import React, { useState, useEffect } from "react"

import HeaderMin from "./HeaderMin"
import HeaderMax from "./HeaderMax";

interface Header {
    page: string,
    lang: string,
    setLang: Function
}

const Header: React.FC<Header> = ({ page, lang, setLang }) => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleClickDropdown = () => {
        console.log(dropdownActive)
        setDropdownActive(!dropdownActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            const isScrolled = window.scrollY > 250;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    if (scrolled) {
        return (
            <HeaderMin lang={lang} />
        )
    }
    
    return (
        <HeaderMax page={page} lang={lang}
            setLang={setLang} handleClickDropdown={handleClickDropdown}
            dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
    )
}

export default Header