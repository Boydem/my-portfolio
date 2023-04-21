import { combineReducers, legacy_createStore, compose } from 'redux'

import { ISystemState, systemReducer } from './system.reducer'
import { IProjectState, projectReducer } from './project/project.reducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
export interface RootState {
    systemModule: ISystemState
    projectModule: IProjectState
}

const rootReducer = combineReducers({
    systemModule: systemReducer,
    projectModule: projectReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined

export const store = legacy_createStore(rootReducer, middleware)
