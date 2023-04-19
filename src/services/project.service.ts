import { httpService } from './http.service'

export const projectsService = {
    loadProjects,
}

async function loadProjects(pageIdx = 1) {
    return httpService.get(`projects?page=${pageIdx}`)
}
