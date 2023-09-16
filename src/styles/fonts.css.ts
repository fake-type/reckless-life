import { fontFace } from '@vanilla-extract/css'

export const martianMono = fontFace({
  fontStyle: 'normal',
  fontDisplay: 'fallback',
  src: [`local(Martian Mono)`, 'url(/fonts/MartianMonoVF.woff2)']
})

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
