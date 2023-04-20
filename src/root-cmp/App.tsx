import { Route } from 'react-router'
import { Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Menu } from '../components/Menu/Menu'
import { ProjectIndex } from '../pages/ProjectIndex/ProjectIndex'
import { ProjectDetails } from '../pages/ProjectDetails/ProjectDetails'
import { Cursor } from '../components/Cursor/Cursor'
import { Info } from '../pages/Info/Info'
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()

    return (
        <div className='app'>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<ProjectIndex />} />
                    <Route path='/project/:projectId' element={<ProjectDetails />} />
                    <Route path='/info' element={<Info />} />
                </Routes>
            </AnimatePresence>
            <Menu />
            <Cursor />
        </div>
    )
}

export default App
