

interface ImportMetaEnv {
    readonly VITE_API_LINK: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}