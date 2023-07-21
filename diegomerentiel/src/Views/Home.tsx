import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header.js"
import HomeContent from "../Components/Content/HomeContent"
import HOME_CONTENT from "../Texts/HOME_CONTENT"
import ViewContainer from "../Components/Content/Styles/ViewContainer"
import { useEffect } from "react"

export interface View {
	lang: string,
	setLang: Function,
}

const Home: React.FC<View> = ({lang, setLang}) => {


	return (
		<>
			<Header page={"Home"} lang={lang} setLang={setLang}></Header>
			<HomeContent content={HOME_CONTENT} lang={lang}></HomeContent>
			<Footer></Footer>
		</>

	)
}

export default Home