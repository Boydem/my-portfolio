import { useState, useRef, useLayoutEffect } from 'react'
import { IProject } from '../../../../models/project'

interface Props {
    projects: IProject[]
    hoverState: 'enter' | 'leave' | null
    hoveredProject: IProject | null
}

export function ProjectsImage({ projects, hoveredProject, hoverState }: Props) {
    const [lastHovered, setLastHovered] = useState<HTMLDivElement | null>(null)
    const hoveredRef = useRef<HTMLDivElement | null>(null)
    useLayoutEffect(() => {
        if (!hoverState) return
        const cssPropsFrames = [
            { tl: 1, tr: 1, bl: 1, br: 1 },
            { tl: 0.4, tr: 0.6, bl: 1, br: 1 },
            { tl: 0, tr: 0, bl: 1, br: 1 },
            { tl: 0, tr: 0, bl: 0, br: 0 },
        ]
        const keyFrames = cssPropsFrames.map(keyframe => ({
            clipPath: `polygon(
                0% calc(${keyframe.tl} * 100%),
                100% calc(${keyframe.tr} * 100%),
                100% calc(${keyframe.bl} * 100%),
                0% calc(${keyframe.br} * 100%)
            )`,
        }))
        if (lastHovered) {
            lastHovered.animate(keyFrames[3], { duration: 500, fill: 'forwards', easing: 'ease-out' })
        }
        if (hoverState === 'enter') {
            const currHoveredEl = hoveredRef.current
            currHoveredEl?.animate([keyFrames[0], keyFrames[1], keyFrames[2]], {
                duration: 250,
                fill: 'forwards',
                easing: 'ease-in',
            })
            setLastHovered(currHoveredEl)
        }
    }, [hoveredProject, hoverState, lastHovered])

    return (
        <div className='projects-image'>
            {projects.map(proj => (
                <div
                    ref={hoveredProject === proj ? hoveredRef : null}
                    className={`img-container ${hoveredProject === proj ? 'hovered' : ''}`}
                    key={`pi-${proj._id}`}
                >
                    <img src={proj.imgsURL[0]} alt={proj.title} />
                </div>
            ))}
        </div>
    )
}
