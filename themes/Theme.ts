import {ThemeT} from '../types/Theme'

export const Theme: ThemeT = {
  colors: {
    primary: {
      main: '#121212',
      light: '#383838',
      dark: '#000000',
    },
    secondary: {
      main: '#990000',
      light: '#d1432b',
      dark: '#650000',
    },
    additional: {
      error: '#F2788E',
      correct: '#6FD979',
    },
  },
  tabBar: {
    backgroundColor: '#121212',
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#383838',
    borderTopColor: '#990000',
  },
  buttons: {
    filled: {
      backgroundColor: '#990000',
      textColor: '#FFFFFF',
    },
    outlined: {
      backgroundColor: '#990000',
      textColor: '#FFFFFF',
    },
    text: {
      backgroundColor: '#990000',
      textColor: '#FFFFFF',
    },
  },
}
