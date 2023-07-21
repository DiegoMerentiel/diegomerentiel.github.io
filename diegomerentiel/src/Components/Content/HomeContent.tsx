import Illustration from "./Styles/Home/Illustration"
import MainArticleContainer from "./Styles/Home/MainArticleContainer"
import MainSectionContainer from "./Styles/Home/MainSectionContainer"
import Section from "./Styles/Home/Section"
import Growth from "../../assets/arrow-growth.svg"
import Resume from "../../assets/resume.svg"
import SideContainer from "./Styles/Home/SideContainer"
import ViewContainer from "./Styles/ViewContainer"
import ButtonResume from "./Styles/Home/ButtonResume"
import HandleResumeDownload from "../../Services/HandleResumeDownload"
import { HOME_CONTENT } from "../../Texts/textInterfaces"
import { useEffect } from "react"

interface Props {
    content: HOME_CONTENT,
    lang: string,
}


const HomeContent: React.FC<Props> = ({content, lang}) => {
    useEffect(() => {
        console.log(lang);
    }, [lang])

    return (
        <ViewContainer>
            <MainArticleContainer>
                <Section>
                    <SideContainer>
                        <div>
                            2Y
                            <h1>
                                experience
                            </h1>
                        </div>

                    </SideContainer>
                    <MainSectionContainer>
                        <h1>
                            WELCOME!
                        </h1>
                        {
                            lang === 'EN' ?
                                content.INTRODUCTION.BRIEF_INTRO.EN :
                                content.INTRODUCTION.BRIEF_INTRO.ES
                        }
                    </MainSectionContainer>
                </Section>
                <Section>
                    <MainSectionContainer>
                        {
                            lang === 'EN' ?
                                content.INTRODUCTION.GOALS.EN :
                                content.INTRODUCTION.GOALS.ES
                        }
                    </MainSectionContainer>
                    <SideContainer>
                        <div>
                          <Illustration src={Growth}></Illustration>
                        </div>
                    </SideContainer>
                </Section>
                <Section>
                    <SideContainer>
                        <div>
                            <Illustration src={Resume}></Illustration>
                        </div>
                    </SideContainer>
                    <MainSectionContainer>
                        <h1>
                            CHECK MY WORK!
                        </h1>
                        {
                            lang === 'EN' ?
                                content.INTRODUCTION.INVITATION.EN :
                                content.INTRODUCTION.INVITATION.ES
                        }
                    </MainSectionContainer>
                </Section>
                <Section>
                    <ButtonResume onClick={HandleResumeDownload}>
                        {
                            lang === 'EN' ?
                                content.INTRODUCTION.RESUME_DOWNLOAD.EN :
                                content.INTRODUCTION.RESUME_DOWNLOAD.ES
                        }
                    </ButtonResume>
                </Section>
            </MainArticleContainer>
        </ViewContainer>
    )
}

export default HomeContent