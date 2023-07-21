import HeaderContainer from "./Styles/HeaderContainer"
import SimpleHeader from "./Styles/SimpleHeader"
import SimpleHeaderSection from "./Styles/SimpleHeaderSection"
import SimpleHeaderTextSection from "./Styles/SimpleHeaderTextSection"
import SimpleNavOption from "./Navbar/SimpleNavOption"
import HEADER_CONTENT from "../../Texts/HEADER_CONTENT"

export interface Header_I {
    lang: string
}

const HeaderMin: React.FC<Header_I> = ({ lang }) => {
    return (
        <>
            <SimpleHeader>
                <SimpleHeaderTextSection>
                    DIEGO MERENTIEL
                </SimpleHeaderTextSection>
                <SimpleHeaderSection>
                    <SimpleNavOption redirection={'/'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.HOME.EN :
                            HEADER_CONTENT.OPTIONS.HOME.ES
                    } />
                    <SimpleNavOption redirection={'/about'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.ABOUT.EN :
                            HEADER_CONTENT.OPTIONS.ABOUT.ES
                    } />
                    <SimpleNavOption redirection={'/portfolio'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.PORTFOLIO :
                            HEADER_CONTENT.OPTIONS.PORTFOLIO
                    } />
                    <SimpleNavOption redirection={'/contact'} text={
                        lang === "EN" ?
                            HEADER_CONTENT.OPTIONS.CONTACT.EN :
                            HEADER_CONTENT.OPTIONS.CONTACT.ES
                    } />
                </SimpleHeaderSection>
            </SimpleHeader>
            <HeaderContainer></HeaderContainer>
        </>
    )
}

export default HeaderMin