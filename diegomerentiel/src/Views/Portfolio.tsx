import PortfolioContent from "../Components/Content/PortfolioContent"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import { View } from "./Home.js"


const Portfolio: React.FC<View>= ({lang, setLang}) => {
  return (
    <>
        <Header page={"Portfolio"} lang={lang} setLang={setLang}></Header>
        <PortfolioContent lang={lang}></PortfolioContent>
        <Footer></Footer>
    </>

  )
}

export default Portfolio