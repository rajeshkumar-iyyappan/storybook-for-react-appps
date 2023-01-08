import { ComponentMeta, ComponentStory } from '@storybook/react'

import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSectionComponent as RestaurantSection } from './RestaurantsSection.container'

export default {
  title: 'Pages/Homepage/RestaurantsSection',
  component: RestaurantSection,
  args: {
    title: 'Our favourite picks',
  },
  parameters: {
    design: {
      title: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126%3A3893&t=E6fUzobJdMiCA09Q-4',
    },
  },
} as ComponentMeta<typeof RestaurantSection>

const Template: ComponentStory<typeof RestaurantSection> = (args: any) => (
  <RestaurantSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  restaurants,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
