import React from 'react'
import Minipic from "../../assets/minipic.png"
import HeaderContainer from "./Styles/HeaderContainer"
import HeaderInfoContainer from "./Styles/HeaderInfoContainer"
import HeaderTexts from "./Styles/HeaderTexts"
import NavbarContainer from "./Styles/NavbarContainer"
import PictureContainer from "./Styles/PictureContainer"
import SubtitleContainer from "./Styles/SubtitleContainer"
import TitleContainer from "./Styles/TitleContainer"
import Picture from "./Styles/Picture"
import NavOption from "./Navbar/NavOption"
import OptionsContainer from "./Styles/OptionsContainer"
import Language from "./Language"
import HEADER_CONTENT from '../../Texts/HEADER_CONTENT'

interface HeaderMax {
    page: string,
    lang: string,
    setLang: Function,
    handleClickDropdown: Function,
    dropdownActive: boolean,
    setDropdownActive: Function
}

const HeaderMax: React.FC<HeaderMax> =
    ({ page, lang, setLang, handleClickDropdown,
        dropdownActive, setDropdownActive }) => {
        return (
            <HeaderContainer>
                <OptionsContainer>
                    <Language
                        lang={lang}
                        setLang={setLang}
                        handleClick={handleClickDropdown}
                        dropdownActive={dropdownActive}
                        setDropdownActive={setDropdownActive}
                    />
                </OptionsContainer>
                <HeaderInfoContainer>
                    <HeaderTexts>
                        <SubtitleContainer>
                            DIEGO MERENTIEL
                        </SubtitleContainer>
                        <TitleContainer>
                            {
                                lang === "EN" ?
                                    HEADER_CONTENT.TITLE.EN :
                                    HEADER_CONTENT.TITLE.ES
                            }
                        </TitleContainer>
                    </HeaderTexts>
                    <PictureContainer>
                        <Picture src={Minipic}>
                        </Picture>
                    </PictureContainer>
                </HeaderInfoContainer>
                <NavbarContainer>
                    <NavOption isActive={page === "Home"} redirection={'/'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.HOME.EN :
                            HEADER_CONTENT.OPTIONS.HOME.ES
                    } />
                    <NavOption isActive={page === "About"} redirection={'/about'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.ABOUT.EN :
                            HEADER_CONTENT.OPTIONS.ABOUT.ES
                    } />
                    <NavOption isActive={page === "Portfolio"} redirection={'/portfolio'} text={
                        HEADER_CONTENT.OPTIONS.PORTFOLIO
                    } />
                    <NavOption isActive={page === "Contact"} redirection={'/contact'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.CONTACT.EN :
                            HEADER_CONTENT.OPTIONS.CONTACT.ES
                    } />
                </NavbarContainer>
            </HeaderContainer>
        )
    }

export default HeaderMax