import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header.js"
import HomeContent from "../Components/Content/HomeContent"
import HOME_CONTENT from "../Texts/HOME_CONTENT.js"
import { View } from "./Home.js"


const Contact:React.FC<View>= ({lang, setLang}) => {
  return (
    <>
        <Header page={"Contact"} lang={lang} setLang={setLang}></Header>
        <HomeContent content={HOME_CONTENT} lang={"EN"}></HomeContent>
        <Footer></Footer>
    </>

  )
}

export default Contact