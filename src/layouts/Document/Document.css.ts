import { style } from '@vanilla-extract/css'
import cssVars from '@styles/themes/_contract.css'

export const AppRootStyled = style({
  color: 'hsl(0, 0%, 100%)',
  fontFamily: cssVars.fonts.body,
  backgroundColor: cssVars.backgroundColor.main
})
