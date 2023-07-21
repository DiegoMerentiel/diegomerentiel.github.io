
import Showcase from "./Portfolio/Showcase"
import ViewContainer from "./Styles/ViewContainer"

export interface Portfolio{
	lang: string
}

const PortfolioContent: React.FC<Portfolio> = ({lang}) => {
	return (
		<ViewContainer>
			<Showcase lang={lang}></Showcase>
		</ViewContainer>
	)
}

export default PortfolioContent