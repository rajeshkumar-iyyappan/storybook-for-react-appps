import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { withDesign } from 'storybook-addon-designs'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from '../src/app-state'

import { BrowserRouter } from 'react-router-dom'

initialize()

const withStore = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  })

  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

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

export const globalDecorators = [mswDecorator, withStore, withTheme, withDesign, withRouter]
