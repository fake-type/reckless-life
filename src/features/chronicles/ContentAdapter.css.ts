import { createContainer, globalStyle, style } from '@vanilla-extract/css'

export const contentContainerName = createContainer()
export const ContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  containerType: 'inline-size',
  containerName: contentContainerName
})

export const ContentStyled = style({
  maxWidth: '48em',
  margin: 'auto',
  selectors: {}
})

globalStyle(`${ContentContainer} h1`, {
  fontSize: '2em',
  padding: '.7em 0',
  fontWeight: 'normal'
})

globalStyle(`${ContentContainer} a`, {
  textDecoration: 'none'
})

globalStyle(`${ContentContainer} a:hover`, {
  textDecoration: 'wavy underline'
})
