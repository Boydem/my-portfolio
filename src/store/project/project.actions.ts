import { ProjectAction } from './project.reducer'
import { store } from '../store'
import { IProject } from '../../models/project'
import { projectsService } from '../../services/project.service'

export async function loadProjects(projects: IProject[] = projectsService.loadProjects()) {
    try {
        store.dispatch<ProjectAction>({ type: 'SET_IS_LOADING', isLoading: true })
    } catch (err) {
        console.log('ProjectActions: Had issues loading projects', err)
        throw err
    } finally {
        store.dispatch<ProjectAction>({ type: 'SET_IS_LOADING', isLoading: false })
    }
}
