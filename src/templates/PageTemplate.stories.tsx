import { ComponentMeta, ComponentStory } from '@storybook/react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Tenplates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args: any) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}

export const WithItemsInCart = Template.bind({})
WithItemsInCart.parameters = {
  store: {
    initialState: {
      cart: {
        items: cartItems,
      },
    },
  },
}

export const StickHeader = Template.bind({})
StickHeader.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>
      Template with sticky header on desktop and navigation items. Try Sccrolling!
    </DummyComponent>
  ),
}

export const Basic = Template.bind({})
Basic.args = {
  type: 'basic',
  children: (
    <DummyComponent>
      Simple template with scrollable header and no navigation items and no footer
    </DummyComponent>
  ),
}
