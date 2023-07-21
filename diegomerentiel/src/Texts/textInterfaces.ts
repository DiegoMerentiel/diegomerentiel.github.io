export interface HOME_CONTENT {
    SIDE_TITLES: {
        BRIEF_INTRO: {
            ES: string,
            EN: string
        },
        GOALS: {
            ES: string,
            EN: string
        },
        INVITATION: {
            ES: string,
            EN: string
        }
    },
    INTRODUCTION: {
        BRIEF_INTRO: {
            ES: string,
            EN: string
        },
        GOALS: {
            ES: string,
            EN: string
        },
        INVITATION: {
            ES: string,
            EN: string
        },
        RESUME_DOWNLOAD: {
            ES: string,
            EN: string
        }
    }
}


interface PROJECT {
    TITLE: string,
    DESCRIPTION: {
        EN: string,
        ES: string,
    },
    TECHNOLOGIES: string,
    GITHUBURL: string,
    URL: string,
    IMGSRC: string,
}

export interface PORTFOLIO_CONTENT {
    projects: Array<PROJECT>
}

export interface HEADER_CONTENT {
    TITLE: {
        EN: string,
        ES: string
    },
    OPTIONS: {
        HOME: {
            EN: string,
            ES: string
        },
        ABOUT: {
            EN: string,
            ES: string
        },
        PORTFOLIO: string,
        CONTACT: {
            EN: string,
            ES: string
        }
    }
}