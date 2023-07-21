import InfoSection from '../Styles/Portfolio/InfoSection'
import CarouselTitle from '../Styles/Portfolio/CarouselTitle'
import CarouselText from '../Styles/Portfolio/CarouselText'
import ActionsContainer from '../Styles/Portfolio/ActionsContainer'
import GithubButton from '../Styles/Portfolio/GithubButton'
import MoreButton from '../Styles/Portfolio/MoreButton'
import ImageSection from '../Styles/Portfolio/ImageSection'
import ProjectImage from '../Styles/Portfolio/ProjectImage'

interface PortfolioItem {
    title: string,
    text: string,
    technologies: string,
    imgsrc: string,
}

const PortfolioItem: React.FC<PortfolioItem> =
    ({ title, text, technologies, imgsrc }) => {
        return (
            <>
                <InfoSection>
                    <CarouselTitle>
                        {title}
                    </CarouselTitle>
                    <CarouselText>
                        {text}
                    </CarouselText>
                    <CarouselText>
                        <h1>
                            Technologies:
                        </h1>
                        {technologies}
                    </CarouselText>
                    <ActionsContainer>
                        <GithubButton>
                            See on GitHub
                        </GithubButton>
                        <MoreButton>
                            Learn More
                        </MoreButton>
                    </ActionsContainer>
                </InfoSection>
                <ImageSection>
                    <ProjectImage src={imgsrc}>
                    </ProjectImage>
                </ImageSection>
            </>
        )
    }

export default PortfolioItem