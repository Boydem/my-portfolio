import { useState } from 'react'

type Mode = 'dark' | 'light'

export function LightDarkButtons() {
    const [currentMode, setCurrentMode] = useState<Mode>('dark')

    function onToggle(mode: Mode) {
        if (currentMode === mode) return
        if (mode === 'light') {
            document.documentElement.setAttribute('data-theme', 'light')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
        setCurrentMode(mode)
    }

    return (
        <section className='light-dark-buttons'>
            <button
                className={`light-btn ${currentMode === 'light' ? 'active' : ''}`}
                onClick={() => onToggle('light')}
            >
                Light
            </button>
            <span> | </span>
            <button className={`dark-btn ${currentMode === 'dark' ? 'active' : ''}`} onClick={() => onToggle('dark')}>
                Dark
            </button>
        </section>
    )
}
