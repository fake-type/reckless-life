import { createContainer, globalStyle, style } from '@vanilla-extract/css'

export const pageContainer = createContainer()
export const pageStyle = style({
  display: 'flex',
  maxWidth: '1400px',
  minHeight: ['100vh', '100dvh'],
  margin: 'auto',
  containerType: 'inline-size',
  containerName: pageContainer
})

globalStyle(`${pageStyle} img`, {
  maxWidth: '100%'
})
