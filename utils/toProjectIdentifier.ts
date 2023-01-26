const toProjectIdentifier = (project: string): string => {
    return project
        .replace(/ı/g, "i")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ğ/g, "g")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/İ/g, "i")
        .replace(/Ü/g, "u")
        .replace(/Ş/g, "s")
        .replace(/Ğ/g, "g")
        .replace(/Ö/g, "o")
        .replace(/Ç/g, "c")
        .replace(/\s+/g, "-") // space => -
        .toLowerCase()
}

export default toProjectIdentifier
