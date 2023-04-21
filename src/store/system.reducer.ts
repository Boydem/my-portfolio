export interface MousePos {
    x: number
    y: number
}

export interface ISystemState {
    isLoading: boolean
    mousePos: MousePos
    target: Element | null
    theme: string
}

export type SystemAction =
    | { type: 'LOADING_START'; isLoading: boolean[] }
    | { type: 'LOADING_DONE'; isLoading: boolean }
    | { type: 'SET_MOUSE_POS'; mousePos: MousePos }
    | { type: 'SET_MOUSE_TARGET'; target: Element | null }
    | { type: 'SET_THEME'; theme: string }

const initialState: ISystemState = {
    isLoading: false,
    mousePos: { x: 0, y: 0 },
    target: null,
    theme: 'dark',
}

export function systemReducer(state = initialState, action: SystemAction) {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.theme }
        case 'SET_MOUSE_TARGET':
            return { ...state, target: action.target }
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
