import AboutContent from "../Components/Content/AboutContent.js"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header.js"
import { View } from "./Home.js"

const About: React.FC<View> = ({ lang, setLang }) => {
    return (
        <>
            <Header page={"About"} lang={lang} setLang={setLang}></Header>
            <AboutContent lang={lang}/>
            <Footer></Footer>
        </>
    )
}

export default About