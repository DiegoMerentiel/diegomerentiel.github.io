import { PORTFOLIO_CONTENT } from "./textInterfaces"

const PORTFOLIO_CONTENT: PORTFOLIO_CONTENT =
{
    projects:
        [
            {
                TITLE: 'Matchamking',
                DESCRIPTION: {
                    EN:
                        `
                This mobile oriented web application allows users to keep track 
                of their progress in a certain sport, see leaderboard that evaluates
                their skill in comparison with other players, and, based on the collected
                data, our matchmaking algorithm is capable of making balanced teams
                when it comes to play matches.  
                `,
                    ES:
                        `
                Esta aplicacion web orientada a mobile permite a los usuarios mantener
                un historial de su progreso en determinado deporte, ver una leaderboard que 
                evalua su habilidad en comparacion a otros jugadores, y basado en la informacion
                recolectada, nuestro algoritmo de emparejamiento es capaz de crear equipos
                balanceados al momento de jugar nuevos partidos.
                `
                },
                TECHNOLOGIES: "ReactJS, NodeJS, C# Asp.NET, Docker, Git",
                GITHUBURL: "",
                URL: "",
                IMGSRC: "/src/assets/Portfolio/matchamking.png"
            },
            {
                TITLE: "Event-fi",
                DESCRIPTION: {
                    EN:
                        `
                    Mobile and web application focused on event organization.
                    As user, you can join groups, add contacts and be invited to events.
                    As admin, you can create events, groups, and invite users.
                    This was an MVP for Holberton School's final project.
                    `,
                    ES: ""
                },
                TECHNOLOGIES: "Javascript(Vanilla), MongoDB, Python, Flask",
                GITHUBURL: "",
                URL: "",
                IMGSRC: "/src/assets/Portfolio/event-fi.png"
            },
            {
                TITLE: "Draggable Blog",
                DESCRIPTION: {
                    EN: `
                    The idea behind this web app is to make a nice looking
                    blog that you can organizate the way you like, with
                    draggable components.
                    The app gives you the tools so you can add text(essential for a blog),
                    images(from the internet), videos, and sounds. 
                    `,
                    ES: 
                    `
                    
                    `
                },
                TECHNOLOGIES: "ReactJS",
                GITHUBURL: "",
                URL: "",
                IMGSRC: "/src/assets/Portfolio/blogfront.png"
            },
            {
                TITLE: "Activity Track",
                DESCRIPTION: {
                    EN: `
                    Activity Track web app allows you to keep a record on your daily (or not so daily)
                    activities. Just add your activity and start the timer,
                    then you can later go back when you are finished and check how much 
                    time it took you. In addition, you are able to see all the activities
                    you created and the time you spent doing them. 
                    `,
                    ES: ""
                },
                TECHNOLOGIES: "ReactJS, ExpressJS, MySQL",
                GITHUBURL: "",
                URL: "",
                IMGSRC: "/src/assets/Portfolio/ActivityTrack.png"
            }
        ]
}


export default PORTFOLIO_CONTENT