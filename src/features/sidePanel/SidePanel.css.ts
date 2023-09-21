import { PageContainerName } from '@layouts/Document/Document.css.ts'
import { createContainer, style } from '@vanilla-extract/css'

export const SidePanelContainerName = createContainer()
export const SidePanelStyled = style({
  display: 'none',
  justifyContent: 'flex-end',
  width: 'calc(50% - 19em)',
  minWidth: '19em',
  padding: '1em',
  containerType: 'inline-size',
  containerName: SidePanelContainerName,

  '@container': {
    [`${PageContainerName} (min-width: 1024px)`]: {
      display: 'flex'
    }
  }
})

export const MenuStyledContainerName = createContainer()
export const MenuStyled = style({
  display: 'flex',
  justifyContent: 'flex-end',
  containerName: MenuStyledContainerName
})
