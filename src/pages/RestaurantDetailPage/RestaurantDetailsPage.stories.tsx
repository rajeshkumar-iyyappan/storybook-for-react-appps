import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { RestaurantDetailPage } from './RestaurantDetailPage'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    designs: {
      title: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126%3A3893&t=E6fUzobJdMiCA09Q-4',
    },
    deeplink: {
      path: '/restaurants/:id',
      route: '/restaurants/2',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const Template: ComponentStory<typeof RestaurantDetailPage> = (args: any) => (
  <>
    <RestaurantDetailPage {...args} />
    <div id="modal"></div>
  </>
)

export const Default = Template.bind({})
