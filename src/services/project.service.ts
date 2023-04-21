import { IProject } from '../pages/Home/Home'
import { httpService } from './http.service'

export const projectsService = {
    loadProjects,
    getProjectById,
}

const gProjects = require('../assets/data/project.json') as IProject[]

function loadProjects() {
    return [...gProjects]
}

function getProjectById(projId: string) {
    const projects = [...gProjects]
    return projects.find(proj => proj._id === projId)
}
