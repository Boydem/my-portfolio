export const utilService = { debounce }
function debounce<T extends Function>(cb: T, wait = 20) {
    let timer: NodeJS.Timeout
    let callable = (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(() => cb(...args), wait)
    }
    return <T>(<any>callable)
}
