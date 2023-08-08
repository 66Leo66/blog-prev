export type License = {
    name: string;
    fullName: string;
    url?: string;
}

export type LicenseAlias = {
    aliasTo: string;
}

export type LicenseListItem = License | LicenseAlias;

export const licenseMap: Record<string, LicenseListItem> = {
    "cc-by-nc-4.0": {
        name: "CC BY-NC 4.0",
        fullName: "Creative Commons Attribution-NonCommercial 4.0 International",
        url: "https://creativecommons.org/licenses/by-nc/4.0/"
    },
    "cc-by-nc-sa-4.0": {
        name: "CC BY-NC-SA 4.0",
        fullName: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    },
    "cc-by-sa-4.0": {
        name: "CC BY-SA 4.0",
        fullName: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    "cc0": {
        name: "CC0",
        fullName: "Creative Commons Zero v1.0 Universal",
        url: "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "copyright": {
        name: "All Rights Reserved",
        fullName: "All Rights Reserved"
    },
    "default": {
        aliasTo: "copyright"
    }
}