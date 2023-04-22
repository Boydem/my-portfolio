import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setTheme } from '../../store/system.actions'

type Mode = 'dark' | 'light'

export function LightDarkButtons() {
    const { theme } = useSelector((storeState: RootState) => storeState.systemModule)

    function onToggle(mode: Mode) {
        if (theme === mode) return
        if (mode === 'light') {
            document.documentElement.setAttribute('data-theme', 'light')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
        setTheme(mode)
    }

    return (
        <section className='light-dark-buttons'>
            <button
                data-hover={true}
                className={`light-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => onToggle('light')}
            >
                Light
            </button>
            <span> / </span>
            <button
                data-hover={true}
                className={`dark-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => onToggle('dark')}
            >
                Dark
            </button>
        </section>
    )
}
