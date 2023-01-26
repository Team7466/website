const chunk = <T>(arr: T[], chunkSize: number): T[][] => {
    let chunks = []
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize))
    }
    return chunks
}

// Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
//     arr.slice(i * chunkSize, i * chunkSize + chunkSize)
// )

export default chunk
