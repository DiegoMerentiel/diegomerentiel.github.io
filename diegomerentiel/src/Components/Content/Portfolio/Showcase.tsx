import { useEffect, useState } from "react"
import PortfolioCarousel from "../Styles/Portfolio/PortfolioCarousel"
import Next from "../../../assets/bx-right-arrow-alt.svg"
import Back from "../../../assets/bx-left-arrow-alt.svg"
import ControlButtons from "../Styles/Portfolio/ControlButtons"
import BackButton from "../Styles/Portfolio/BackButton"
import NextButton from "../Styles/Portfolio/NextButton"
import StatusDisplayer from "../Styles/Portfolio/StatusDisplayer"
import PortfolioItem from "./PortfolioItem.js"
import PORTFOLIO_CONTENT from "../../../Texts/PORTFOLIO_CONTENT.ts"
import StatusCircle from "../Styles/Portfolio/StatusCircle.tsx"

interface Showcase {
    lang: string
}

const Showcase: React.FC<Showcase> = ({ lang }) => {
    const [item, setItem] = useState(PORTFOLIO_CONTENT.projects[0])
    const [currentItem, setCurrentItem] = useState(0);
    const [navFlag, setNavFlag] = useState(0);

    useEffect(() => {
        const lastIndex = PORTFOLIO_CONTENT.projects.length - 1;

        if (navFlag > 0) {
            setCurrentItem((prevItem) => {
                if (prevItem === lastIndex) {
                    setItem(PORTFOLIO_CONTENT.projects[0]);
                    return 0;
                } else {
                    const newItem = prevItem + 1;
                    setItem(PORTFOLIO_CONTENT.projects[newItem]);
                    return newItem;
                }
            });
        } else if (navFlag < 0) {
            setCurrentItem((prevItem) => {
                if (prevItem === 0) {
                    setItem(PORTFOLIO_CONTENT.projects[lastIndex]);
                    return lastIndex;
                } else {
                    const newItem = prevItem - 1;
                    setItem(PORTFOLIO_CONTENT.projects[newItem]);
                    return newItem;
                }
            });
        }
    }, [navFlag]);

    useEffect(() => {
        console.log(currentItem);
    }, [currentItem])
    const handleStatusClick = (index: number) => {
        setCurrentItem(index);
        setItem(PORTFOLIO_CONTENT.projects[index]);
    };

    const handleNextClick = () => {
        setNavFlag(navFlag + 1);
    };

    const handlePreviousClick = () => {
        setNavFlag(navFlag -1);
    };

    return (
        <>
            <PortfolioCarousel>
                <PortfolioItem
                    title={item.TITLE}
                    text={
                        lang === "EN" ?
                            item.DESCRIPTION.EN :
                            item.DESCRIPTION.ES
                    }
                    technologies={item.TECHNOLOGIES} imgsrc={item.IMGSRC} />
                <StatusDisplayer>
                    {
                        PORTFOLIO_CONTENT.projects.map((_it, index) =>
                            <StatusCircle key={index} isActive={index === currentItem}
                                onClick={() => handleStatusClick(index)} />
                        )
                    }
                </StatusDisplayer>
            </PortfolioCarousel>
            <ControlButtons>
                <BackButton
                    onClick={handlePreviousClick}
                    src={Back} />
                <NextButton
                    onClick={handleNextClick}
                    src={Next} />
            </ControlButtons>
        </>
    )
}

export default Showcase