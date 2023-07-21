import FooterContainer from "./Styles/FooterContainer"
import FooterText from "./Styles/FooterText"
import LanguageSelectorFooter from "./Styles/LanguageSelectorFooter"

const Footer = () => {
  return (
    <FooterContainer>
        <LanguageSelectorFooter>
            <div>
                Español
            </div>
            <div>
                English
            </div>
        </LanguageSelectorFooter>
        <FooterText>
            Created by Diego Merentiel with Vite, React, TypeScript. Hosted by Github Actions.
        </FooterText>
    </FooterContainer>
  )
}

export default Footer