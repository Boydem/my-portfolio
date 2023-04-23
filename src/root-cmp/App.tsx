import { Route } from 'react-router'
import { Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Menu } from '../components/Menu/Menu'
import { ProjectIndex } from '../pages/ProjectIndex/ProjectIndex'
import { ProjectDetails } from '../pages/ProjectDetails/ProjectDetails'
import { Cursor } from '../components/Cursor/Cursor'
import { Info } from '../pages/Info/Info'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useMouseMove } from '../hooks/useMouseMove'
import { useEffect } from 'react'
import { setMousePos, setMouseTarget } from '../store/system.actions'
import { useDispatch } from 'react-redux'
import { useTouchDevice } from '../hooks/useTouchDevice'
import { useWindowSize } from '../hooks/useWindowSize'
import { PageWrapper } from '../components/PageWrapper/PageWrapper'

function App() {
    const isTouchDevice = useTouchDevice()
    const windowSize = useWindowSize()
    const location = useLocation()
    const { mousePos, target } = useMouseMove()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isTouchDevice) return
        setMousePos(mousePos)
    }, [mousePos, isTouchDevice])
    useEffect(() => {
        if (isTouchDevice) return
        setMouseTarget(target)
    }, [target, isTouchDevice])
    useEffect(() => {
        dispatch({ type: 'SET_IS_TOUCH_DEVICE', isTouchDevice })
    }, [isTouchDevice, dispatch])

    return (
        <div className='app'>
            <AnimatePresence mode='wait'>
                <PageWrapper windowSize={windowSize} key={location.pathname}>
                    <Routes location={location}>
                        <Route path='/' element={<Home />} />
                        <Route path='/project' element={<ProjectIndex />} />
                        <Route path='/project/:projectId' element={<ProjectDetails />} />
                        <Route path='/info' element={<Info />} />
                    </Routes>
                </PageWrapper>
            </AnimatePresence>
            <Menu />
            {isTouchDevice ? null : <Cursor />}
        </div>
    )
}

export default App
