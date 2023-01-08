import { ComponentMeta, ComponentStory } from '@storybook/react'

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
Default.args = {}
