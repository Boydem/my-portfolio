import { store } from './store'
import { MousePos, SystemAction } from './system.reducer'

export function setMousePos(mousePos: MousePos) {
    store.dispatch<SystemAction>({ type: 'SET_MOUSE_POS', mousePos })
}

export function setTheme(theme: string) {
    store.dispatch<SystemAction>({ type: 'SET_THEME', theme })
}
