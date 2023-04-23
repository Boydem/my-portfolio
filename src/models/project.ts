export interface IProject {
    _id: string
    title: string
    desc: string
    shortDesc: string
    repoURL: string
    url: string
    stack: string[]
    imgsURL: string[]
    createdAt: number
}

export interface IProjectWithNext extends IProject {
    nextProject: {
        _id: string
        title: string
        img: string
    }
}
