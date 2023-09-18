import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { martianMono } from './fonts.css'

export const PageContainerName = createContainer()

globalStyle('*, :after, :before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

globalStyle('ol, ul, menu', { listStyle: 'none' })

export const BodyStyled = style({
  fontFamily: martianMono,
  color: 'hsl(0, 0%, 100%)',
  backgroundColor: '#202022'
})

export const PageStyled = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: '.5em',
  minHeight: ['100dvh', '100vh'],
  containerName: PageContainerName,
  containerType: 'inline-size'
})
