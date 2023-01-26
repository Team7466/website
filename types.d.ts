interface AnimationFrameSerializable {
    action: "changeProperty" | "changeCityFillColor"
    values: [string, string]
    previousValue: string | null
}

type Cities = string[]

interface ResourcesKey {
    title_tr: string
    title_en: string
    resources: {
        subtitle_tr: string
        subtitle_en: string
        resources: {
            name_en: string
            name_tr: string
            url: string
        }[]
    }[]
}

interface DocsKey {
    name_tr: string
    name_en: string
    doc_path: string
    img_path: string
}

interface SponsorsKey {
    tier_name_tr: string
    tier_name_en: string
    tier_img_path: string
    sponsors: {
        name: string
        logo_path: string
        url: string
        description_tr: string
        description_en: string
    }[]
}

interface Gallery {
    [key: string]: {
        description_tr: string
        description_en: string
    }
}

interface ProjectKey {
    title: string
    shortdescription_tr: string
    shortdescription_en: string
    img_path: string
    description_tr: string
    description_en: string
}

interface PressKey {
    title_tr: string
    title_en: string
    img_path: string
    text_tr?: string
    text_en?: string
    url: string
}

interface ContactKey {
    title_tr: string
    title_en: string
    details: {
        name: string
        icon_path?: string
        url?: string
    }[]
}
