export interface TokenColorInterface {
        scope: string[] | string
        settings: {
                foreground?: string
                background?: string
                fontStyle?: string
        }
}

export interface ThemeInterface {
        name: string
        type: 'light' | 'dark'
        colors: Record<string, string>
        tokenColors: TokenColorInterface[]
}