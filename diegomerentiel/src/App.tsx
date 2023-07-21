import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Portfolio from './Views/Portfolio'
import Contact from './Views/Contact'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'


function App() {

    const[lang, setLang] = useState("EN")

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Home lang={lang} setLang={setLang}/>
            },
            {
                path: '/about',
                element: <About lang={lang} setLang={setLang}/>,
            },
            {
                path: '/portfolio',
                element: <Portfolio lang={lang} setLang={setLang} />
            },
            {
                path: '/contact',
                element: <Contact lang={lang} setLang={setLang}/>
            }
        ]
    )

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
