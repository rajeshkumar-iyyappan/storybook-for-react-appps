import { rest } from 'msw'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { restaurants } from '../../../../stub/restaurants'
import { BASE_URL } from '../../../../api'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/Homepage/RestaurantsSection',
  component: RestaurantsSection,
  args: {
    title: 'Our favourite picks',
  },
  parameters: {
    design: {
      title: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126%3A3893&t=E6fUzobJdMiCA09Q-4',
    },
  },
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args: any) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}
