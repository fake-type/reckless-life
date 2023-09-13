import { createContainer, globalStyle, style } from '@vanilla-extract/css'

export const pageContainer = createContainer()
export const pageStyle = style({
  display: 'flex',
  minHeight: ['100vh', '100dvh'],
  containerType: 'inline-size',
  containerName: pageContainer
})

export const MainContent = style({
  display: 'flex',
  flexFlow: 'column',
  width: '100%'
})

globalStyle(`${pageStyle} img`, {
  maxWidth: '100%'
})
