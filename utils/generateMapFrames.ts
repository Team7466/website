import { AnimationFrame, TurkeyMap } from "./turkeyMap"

const getTransitionColors = (steps: number): string[] => {
    const colors: string[] = []
    for (let i = 0; i < steps; i++) {
        const r = Math.floor(124 + (255 - 124) * (i / steps))
        const g = Math.floor(124 + (0 - 124) * (i / steps))
        const b = Math.floor(124 + (0 - 124) * (i / steps))
        // colors.push(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`)
        colors.push(`rgb(${r}, ${g}, ${b})`)
    }

    return colors
}

const generateMap = (cities: string[]): string => {
    const map = new TurkeyMap()

    for (const city of cities) {
        map.consume(new AnimationFrame("changeCityFillColor", [city, "#0d3e80"]))
    }

    return map.snapshot("BASE64")
}

const generateAnimationFrames = (cities: Cities): AnimationFrameSerializable[] => {
    const stepsPerCity = 3
    const transitionColors = getTransitionColors(stepsPerCity)
    const frames: AnimationFrameSerializable[] = []

    for (const city of cities) {
        for (const color of transitionColors) {
            frames.push({ action: "changeCityFillColor", values: [city, color], previousValue: null })
        }
    }

    return frames
}

export { generateMap, generateAnimationFrames }
