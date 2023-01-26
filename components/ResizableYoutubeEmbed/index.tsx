import { useEffect, useRef, useState } from "react"

interface ResizableYoutubeEmbedProps {
    videoId: string
    initWidth: number
    initHeight: number
}

const ResizableYoutubeEmbed = ({ videoId, initWidth, initHeight }: ResizableYoutubeEmbedProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [width, setWidth] = useState<number>(initWidth)
    const [height, setHeight] = useState<number>(initHeight)

    useEffect(() => {
        const handleResize = () => {
            const aspectRatio = 16 / 9
            if (iframeRef.current) {
                let newWidth = iframeRef.current.parentElement?.offsetWidth
                if (!newWidth) return
                let newHeight = newWidth / aspectRatio
                setWidth(newWidth)
                setHeight(newHeight)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [iframeRef])

    return (
        <iframe
            ref={iframeRef}
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
        />
    )
}
export default ResizableYoutubeEmbed
