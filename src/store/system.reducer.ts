export interface MousePos {
    x: number
    y: number
}

export interface ISystemState {
    isLoading: boolean
    mousePos: MousePos
    target: Element | null
    theme: string
    isTouchDevice: boolean
}

export type SystemAction =
    | { type: 'LOADING_START'; isLoading: boolean[] }
    | { type: 'LOADING_DONE'; isLoading: boolean }
    | { type: 'SET_MOUSE_POS'; mousePos: MousePos }
    | { type: 'SET_MOUSE_TARGET'; target: Element | null }
    | { type: 'SET_THEME'; theme: string }
    | { type: 'SET_IS_TOUCH_DEVICE'; isTouchDevice: boolean }

const initialState: ISystemState = {
    isLoading: false,
    mousePos: { x: 0, y: 0 },
    target: null,
    theme: 'dark',
    isTouchDevice: false,
}

export function systemReducer(state = initialState, action: SystemAction) {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.theme }
        case 'SET_MOUSE_TARGET':
            return { ...state, target: action.target }
        case 'SET_IS_TOUCH_DEVICE':
            return { ...state, isTouchDevice: action.isTouchDevice }
        case 'SET_MOUSE_POS':
            return { ...state, mousePos: action.mousePos }
        case 'LOADING_START':
            return { ...state, isLoading: true }
        case 'LOADING_DONE':
            return { ...state, isLoading: false }
        default:
            return state
    }
}
