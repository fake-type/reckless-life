import { createContainer, globalStyle, style } from '@vanilla-extract/css'

export const contentContainerName = createContainer()
export const ContentContainer = style({
  maxWidth: '48em',
  padding: '0 .8em',
  display: 'flex',
  justifyContent: 'center',
  containerType: 'inline-size',
  containerName: contentContainerName
})

export const TextContent = style({
  maxWidth: '48em',
  margin: 'auto'
})

globalStyle(`${ContentContainer} h1`, {
  fontSize: '2em',
  padding: '.7em 0',
  fontWeight: 'normal'
})
