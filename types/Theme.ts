export type ThemeColorsT = {
  main: string
  light: string
  dark: string
}

export type AdditionalColorsT = {
  error: string
  correct: string
}

export type ThemeButtonT = {
  backgroundColor: string
  textColor: string
}

export type ThemeTabBarColorsT = {
  backgroundColor: string
  activeTintColor: string
  inactiveTintColor: string
  borderTopColor: string
}

export type ThemeT = {
  colors: {
    primary: ThemeColorsT
    secondary: ThemeColorsT
    additional: AdditionalColorsT
  }
  tabBar: ThemeTabBarColorsT
  buttons: {
    filled: ThemeButtonT
    outlined: ThemeButtonT
    text: ThemeButtonT
  }
}
