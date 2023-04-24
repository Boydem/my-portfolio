import { IProject, IProjectWithNext } from '../models/project'

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
    const projectIdx = projects.findIndex(proj => proj._id === projId)
    if (projectIdx < 0) throw new Error(`Couldnt find project with projectId:${projId}`)
    const project = projects[projectIdx]
    let nextProjectIdx
    if (projectIdx === projects.length - 1) nextProjectIdx = 0
    else nextProjectIdx = projectIdx + 1
    const nextProject = projects[nextProjectIdx]
    return {
        ...project,
        nextProject: { _id: nextProject._id, title: nextProject.title, img: nextProject.imgsURL[0] },
    } as IProjectWithNext
}
