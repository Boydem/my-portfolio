import { IProject } from '../../models/project'
import { projectsService } from '../../services/project.service'

// Project state:
export interface IProjectState {
    projects: IProject[]
    isLoading: boolean
    totalPages: number | null
}

export type ProjectAction =
    | { type: 'SET_PROJECTS'; projects: IProject[] }
    | { type: 'SET_IS_LOADING'; isLoading: boolean }

const initialState: IProjectState = {
    projects: projectsService.loadProjects(),
    isLoading: false,
    totalPages: null,
}

export function projectReducer(state = initialState, action: ProjectAction) {
    // {type: SOME_TYPE, data}

    switch (action.type) {
        // Projects
        case 'SET_PROJECTS':
            return { ...state, projects: action.projects }
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.isLoading }

        //   Defalut
        default:
            return { ...state }
    }
}
