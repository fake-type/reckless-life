import { createTheme } from '@vanilla-extract/css'
import { martianMono } from '@styles/fonts.css.ts'
import themesContract from './_contract.css.ts'

export const DarkTheme = createTheme(themesContract, {
  fonts: {
    body: martianMono
  },
  backgroundColor: { main: 'hsla(240, 3%, 13%, 1)' }
})
