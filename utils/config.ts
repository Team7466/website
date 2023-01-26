import yaml from "js-yaml"
import { readFileSync } from "fs"

// Singleton
export default class WebsiteConfig {
    private static instance: WebsiteConfig
    private config: any

    private constructor() {
        const config = readFileSync("./config.yaml", "utf8")
        this.config = yaml.load(config)
    }

    private static getInstance(): WebsiteConfig {
        if (!this.instance) {
            this.instance = new WebsiteConfig()
        }

        return this.instance
    }

    public static cities(): Cities {
        return this.getInstance().config.cities
    }

    public static resources(): ResourcesKey[] {
        return this.getInstance().config.resources
    }

    public static docs(): DocsKey[] {
        return this.getInstance().config.docs
    }

    public static sponsors(): SponsorsKey[] {
        return this.getInstance().config.sponsors
    }

    public static gallery(): Gallery {
        return this.getInstance().config.gallery
    }

    public static projects(): ProjectKey[] {
        return this.getInstance().config.projects
    }

    public static press(): PressKey[] {
        return this.getInstance().config.press
    }

    public static contact(): ContactKey[] {
        return this.getInstance().config.contact
    }

    public static isTakingApplications(): boolean {
        return this.getInstance().config.is_taking_applications
    }
}
