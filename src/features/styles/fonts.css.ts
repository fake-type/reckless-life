import { fontFace } from '@vanilla-extract/css'

export const jetBrainsMono = fontFace([
  {
    fontStyle: 'italic',
    fontDisplay: 'block',
    src: [
      'local(JetBrains Mono)',
      'url(/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf) format(TrueType)'
    ]
  },
  {
    fontStyle: 'normal',
    fontDisplay: 'block',
    src: [
      'local(JetBrains Mono)',
      'url(/fonts/JetBrainsMono-VariableFont_wght.ttf) format(TrueType)'
    ]
  }
])
