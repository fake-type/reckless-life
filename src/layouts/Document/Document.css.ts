import { createContainer, style } from '@vanilla-extract/css'
import cssVars from '@styles/themes/_contract.css'

export const PageContainerName = createContainer()
export const MainPanelContainerName = createContainer()

export const AppRootStyled = style({
  color: 'hsl(0, 0%, 100%)',
  fontFamily: cssVars.fonts.body,
  backgroundColor: cssVars.backgroundColor.main
})

export const PageStyled = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: '.5em',
  minHeight: ['100dvh', '100vh'],
  containerType: 'inline-size',
  containerName: PageContainerName
})

export const MainPanelContainer = style({
  width: '100%',
  containerType: 'inline-size',
  containerName: MainPanelContainerName
})
