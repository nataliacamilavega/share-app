export type ThemeColorsT = {
  main: string
  light: string
  dark: string
}

export type AdditionalColorsT = {
  error: string
  correct: string
}

export type ThemeT = {
  colors: {
    primary: ThemeColorsT
    secondary: ThemeColorsT
    additional: AdditionalColorsT
  }
}
