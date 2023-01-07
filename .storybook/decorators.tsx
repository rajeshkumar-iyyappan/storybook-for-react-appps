import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { withDesign } from 'storybook-addon-designs'

import { BrowserRouter } from 'react-router-dom'

const withRouter: DecoratorFn = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../src/styles/theme'

const withTheme: DecoratorFn = (StoryFn, context) => {
  console.log(context.globals.theme, 'Conext')

  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalDecorators = [withTheme, withDesign, withRouter]
