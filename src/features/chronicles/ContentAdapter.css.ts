import { createContainer, globalStyle, style } from '@vanilla-extract/css'

export const contentContainerName = createContainer()
export const ContentContainer = style({
  width: '100%',
  containerType: 'inline-size',
  containerName: contentContainerName
})

export const ContentStyled = style({
  maxWidth: '48em',
  margin: 'auto',
  padding: '.8em',
  selectors: {}
})

globalStyle(`${ContentContainer} h1`, {
  fontSize: '2em',
  padding: '.7em 0',
  fontWeight: 'normal'
})

globalStyle(`${ContentContainer} a`, {
  textDecoration: 'none',
  color: 'blue'
})

globalStyle(`${ContentContainer} a:hover`, {
  textDecoration: 'wavy underline'
})
