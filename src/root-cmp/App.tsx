import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Menu } from '../components/Menu/Menu'
import { ProjectIndex } from '../pages/ProjectIndex/ProjectIndex'
import { ProjectDetails } from '../pages/ProjectDetails/ProjectDetails'
import { Cursor } from '../components/Cursor/Cursor'
import { Info } from '../pages/Info/Info'

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project' element={<ProjectIndex />} />
                <Route path='/project/:projectId' element={<ProjectDetails />} />
                <Route path='/info' element={<Info />} />
            </Routes>
            <Menu />
            <Cursor />
        </div>
    )
}

export default App
